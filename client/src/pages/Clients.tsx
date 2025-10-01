import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

// Reusable Client Form Component
interface ClientFormProps {
  formData: any;
  setFormData: (data: any) => void;
  onSubmit: () => void;
  submitLabel: string;
  onCancel: () => void;
}

const ClientForm = ({
  formData,
  setFormData,
  onSubmit,
  submitLabel,
  onCancel,
}: ClientFormProps) => (
  <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-160px)]">
    {/* Company Information */}
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-slate-700 uppercase tracking-wide">
        Company Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none transition-all"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Website
          </label>
          <input
            type="text"
            placeholder="https://example.com"
            className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none transition-all"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
          />
        </div>
      </div>
    </div>

    {/* Logo Upload */}
    <div>
      <h3 className="text-sm font-medium text-slate-700 uppercase tracking-wide mb-3">
        Logo
      </h3>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFormData({
                    ...formData,
                    logoFile: file,
                    logoPreview: URL.createObjectURL(file),
                  });
                }
              }}
              className="w-100 border border-slate-200 px-4 py-3 rounded-xl cursor-pointer file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 transition-all"
            />
          </div>
        </div>
        {formData.logoPreview && (
          <div className="flex-shrink-0">
            <img
              src={formData.logoPreview}
              alt="Logo Preview"
              className="w-40 h-16 rounded-2xl object-cover border border-slate-200 shadow-sm"
            />
          </div>
        )}
      </div>
    </div>

    {/* Brand Colors */}
    <div>
      <h3 className="text-sm font-medium text-slate-700 uppercase tracking-wide mb-3">
        Brand Colors
      </h3>
      <div className="flex gap-6">
        {["primary", "secondary"].map((colorKey) => (
          <div key={colorKey} className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-600 capitalize">
              {colorKey}
            </label>
            <input
              type="color"
              value={
                formData.brandColors[colorKey] ||
                (colorKey === "primary" ? "#000000" : "#ffffff")
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  brandColors: {
                    ...formData.brandColors,
                    [colorKey]: e.target.value,
                  },
                })
              }
              className="w-12 h-12 border border-slate-200 rounded-xl cursor-pointer shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Modules */}
    <div>
      <h3 className="text-sm font-medium text-slate-700 uppercase tracking-wide mb-3">
        Modules Enabled
      </h3>
      <div className="flex flex-wrap gap-3">
        {["blogs", "news", "images", "videos"].map((module) => (
          <label
            key={module}
            className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <input
              type="checkbox"
              checked={formData.modulesEnabled.includes(module)}
              onChange={(e) => {
                const checked = e.target.checked;
                setFormData({
                  ...formData,
                  modulesEnabled: checked
                    ? [...formData.modulesEnabled, module]
                    : formData.modulesEnabled.filter((m) => m !== module),
                });
              }}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-slate-700 capitalize">
              {module}
            </span>
          </label>
        ))}
      </div>
    </div>

    {/* Contact Information */}
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-slate-700 uppercase tracking-wide">
        Contact Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Contact Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none transition-all"
            value={formData.contactName}
            onChange={(e) =>
              setFormData({ ...formData, contactName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Contact Number
          </label>
          <input
            type="text"
            placeholder="+1 (555) 123-4567"
            className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none transition-all"
            value={formData.contactNumber}
            onChange={(e) =>
              setFormData({ ...formData, contactNumber: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">
          Address
        </label>
        <input
          type="text"
          placeholder="123 Main Street, City, State 12345"
          className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none transition-all"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </div>
    </div>

    {/* Footer */}
    <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-200/50 flex gap-3 justify-end">
      <button
        onClick={onCancel}
        className="px-6 py-2.5 rounded-xl border border-red-200-200 text-red-700 font-medium hover:bg-slate-50 transition-colors"
      >
        Cancel
      </button>
      <button
        onClick={onSubmit}
        className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors"
      >
        {submitLabel}
      </button>
    </div>
  </div>
);

// Reusable Client Details Component
const ClientDetails = ({
  client,
  onClose,
}: {
  client: any;
  onClose: () => void;
}) => (
  <div className="p-6 space-y-5 overflow-y-auto max-h-[calc(85vh-140px)]">
    <div className="flex items-start gap-4">
      <div className="flex-1">
        <div className="mb-3">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            Company
          </span>
          <p className="text-slate-900 font-medium">{client.companyName}</p>
        </div>
        <div>
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            Website
          </span>
          <a
            href={client.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 block truncate"
          >
            {client.website}
          </a>
        </div>
      </div>
      {client.logoUrl && (
        <div className="flex-shrink-0">
          <img
            src={client.logoUrl}
            alt="Logo"
            className="w-40 h-16 rounded-2xl object-cover border border-slate-200"
          />
        </div>
      )}
    </div>
    <div className="grid grid-cols-1 gap-3">
      <div>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
          Contact
        </span>
        <p className="text-slate-900 font-medium">{client.contactName}</p>
      </div>
      <div>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
          Phone
        </span>
        <p className="text-slate-900 font-medium">{client.contactNumber}</p>
      </div>
      <div>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
          Address
        </span>
        <p className="text-slate-600 text-sm leading-relaxed">
          {client.address}
        </p>
      </div>
    </div>
    <div>
      <span className="text-xs font-medium text-slate-500 uppercase tracking-wide block mb-2">
        Modules
      </span>
      <div className="flex flex-wrap gap-1.5">
        {client.modulesEnabled?.map((module: string, idx: number) => (
          <span
            key={idx}
            className="bg-red-100 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            {module}
          </span>
        ))}
      </div>
    </div>
    {client.brandColors && (
      <div>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide block mb-2">
          Brand Colors
        </span>
        <div className="flex gap-2">
          {(Object.values(client.brandColors) as string[]).map((color, idx) => (
            <div
              key={idx}
              className="w-10 h-10 rounded-xl shadow-sm border border-slate-200"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    )}
  </div>
);

// Main Clients Component
export default function Clients() {
  const [clients, setClients] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    logoFile: null as File | null,
    logoPreview: "",
    brandColors: { primary: "#000000", secondary: "#ffffff" },
    modulesEnabled: [] as string[],
    contactName: "",
    contactNumber: "",
    address: "",
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await api.get("/all-clients");
      setClients(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Add Client
  const handleAddClient = async () => {
    try {
      let logoUrl = "";
      if (formData.logoFile) {
        const uploadData = new FormData();
        uploadData.append("file", formData.logoFile);
        const uploadRes = await api.post("/all-clients/upload", uploadData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        logoUrl = uploadRes.data.url;
      }

      const res = await api.post("/all-clients", { ...formData, logoUrl });
      setClients([...clients, res.data]);
      resetForm();
      setShowForm(false);
      toast.success("Client added successfully!");
    } catch (err: any) {
      console.error(err);
      toast.error(
        "Failed to add client: " + (err.response?.data?.error || err.message)
      );
    }
  };

  // Edit Client
  const handleUpdateClient = async () => {
    if (!selectedClient) return;
    try {
      let logoUrl = formData.logoPreview || "";
      if (formData.logoFile) {
        const uploadData = new FormData();
        uploadData.append("file", formData.logoFile);
        const uploadRes = await api.post("/all-clients/upload", uploadData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        logoUrl = uploadRes.data.url;
      }

      const res = await api.put(`/all-clients/${selectedClient.id}`, {
        ...formData,
        logoUrl,
      });
      setClients(
        clients.map((c) => (c.id === selectedClient.id ? res.data : c))
      );
      resetForm();
      setShowEditModal(false);
      toast.success("Client updated successfully!");
    } catch (err: any) {
      console.error(err);
      toast.error(
        "Failed to update client: " + (err.response?.data?.error || err.message)
      );
    }
  };

  const handleView = (id: string) => {
    const client = clients.find((c) => c.id === id);
    if (client) {
      setSelectedClient(client);
      setShowViewModal(true);
    }
  };

  const handleEdit = (id: string) => {
    const client = clients.find((c) => c.id === id);
    if (client) {
      setSelectedClient(client);
      setFormData({
        companyName: client.companyName,
        website: client.website,
        logoFile: null,
        logoPreview: client.logoUrl || "",
        brandColors: client.brandColors || {
          primary: "#000000",
          secondary: "#ffffff",
        },
        modulesEnabled: client.modulesEnabled || [],
        contactName: client.contactName || "",
        contactNumber: client.contactNumber || "",
        address: client.address || "",
      });
      setShowEditModal(true);
    }
  };

  const resetForm = () => {
    setFormData({
      companyName: "",
      website: "",
      logoFile: null,
      logoPreview: "",
      brandColors: { primary: "#000000", secondary: "#ffffff" },
      modulesEnabled: [],
      contactName: "",
      contactNumber: "",
      address: "",
    });
    setSelectedClient(null);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-red-600">Clients</h1>
        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors"
        >
          Add Client
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-red-200">
          <tr>
            <th className="px-4 py-2 text-left text-red-700">Name</th>
            <th className="px-4 py-2 text-left text-red-700">Website</th>
            <th className="px-4 py-2 text-left text-red-700">Contact</th>
            <th className="px-4 py-2 text-left text-red-700">Options</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => (
            <tr key={c.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{c.companyName}</td>
              <td className="px-4 py-2">
                <a
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {c.website}
                </a>
              </td>
              <td className="px-4 py-2">{c.contactNumber}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => handleView(c.id)}
                  className="relative overflow-hidden z-0 px-4 py-1 rounded border border-red-400 text-red-800 transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-red-300 before:z-[-1] before:transition-all before:duration-300 hover:before:w-full hover:border-red-600"
                >
                  View More
                </button>
                <button
                  onClick={() => handleEdit(c.id)}
                  className="relative overflow-hidden z-0 px-4 py-1 rounded border border-black text-black transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-200 before:z-[-1] before:transition-all before:duration-300 hover:before:w-full hover:border-black"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
          {clients.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No clients found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Add Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-5 border-b border-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-800">
                Add Client
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 text-lg font-bold"
              >
                &times;
              </button>
            </div>
            <ClientForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleAddClient}
              submitLabel="Add Client"
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedClient && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-5 border-b border-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-800">
                Edit Client
              </h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 text-lg font-bold"
              >
                &times;
              </button>
            </div>
            <ClientForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleUpdateClient}
              submitLabel="Save Changes"
              onCancel={() => setShowEditModal(false)}
            />
          </div>
        </div>
      )}

      {/* View More Modal */}
      {showViewModal && selectedClient && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-5 border-b border-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-800">
                Client Details
              </h2>
              <button
                onClick={() => setShowViewModal(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 text-lg font-bold"
              >
                &times;
              </button>
            </div>
            <ClientDetails
              client={selectedClient}
              onClose={() => setShowViewModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
