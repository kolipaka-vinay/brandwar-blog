import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import {
  Plus,
  Edit3,
  Eye,
  FileText,
  Image,
  X,
  Save,
  RotateCcw,
} from "lucide-react";

interface Section {
  type: "text" | "image";
  content: string | null;
  file?: File | null;
  url: string | null;
  alt: string | null;
}

interface Blog {
  id: string;
  date: string;
  slug: string;
  title: string;
  keywords: string;
  description: string;
  sections: Section[];
  links: string[];
}

const ClientBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [viewBlog, setViewBlog] = useState<Blog | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);

  const [newBlog, setNewBlog] = useState<Blog>({
    id: "",
    date: new Date().toLocaleDateString(),
    slug: "",
    title: "",
    keywords: "",
    description: "",
    sections: [],
    links: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const addSection = (type: "text" | "image") => {
    setNewBlog((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        { type, content: null, file: null, alt: null, url: null },
      ],
    }));
  };

  const updateSection = (
    index: number,
    field: string,
    value: string | File
  ) => {
    const updatedSections = [...newBlog.sections];
    if (field === "file") {
      updatedSections[index].file = value as File;
      updatedSections[index].url = URL.createObjectURL(value as File);
    } else if (field === "alt") {
      updatedSections[index].alt = value as string;
    } else {
      updatedSections[index].content = value as string;
    }
    setNewBlog((prev) => ({ ...prev, sections: updatedSections }));
  };

  const removeSection = (index: number) => {
    const updatedSections = [...newBlog.sections];
    updatedSections.splice(index, 1);
    setNewBlog((prev) => ({ ...prev, sections: updatedSections }));
  };

  const handleSubmit = async () => {
    if (!newBlog.title.trim()) return alert("Title is required!");

    try {
      const formData = new FormData();
      formData.append("slug", newBlog.slug);
      formData.append("title", newBlog.title);
      formData.append("keywords", newBlog.keywords);
      formData.append("description", newBlog.description);
      formData.append("date", newBlog.date);

      const sectionsData = newBlog.sections.map((sec) => ({
        type: sec.type,
        content: sec.content || "",
        alt: sec.alt || "",
      }));
      formData.append("sections", JSON.stringify(sectionsData));

      newBlog.sections.forEach((sec, idx) => {
        if (sec.type === "image" && sec.file) {
          formData.append(`image_${idx}`, sec.file);
        }
      });

      if (selectedBlog) {
        formData.append("id", selectedBlog.id);
      }

      const url = selectedBlog
        ? `http://localhost:4000/api/blogs/${selectedBlog.id}`
        : "http://localhost:4000/api/blogs";

      const method = selectedBlog ? axios.put : axios.post;

      const res = await method(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      fetchBlogs(); // This will trigger an immediate re-render with the updated list.
      resetForm();
      setShowForm(false);
      setSelectedBlog(null);
    } catch (error: any) {
      console.error(error);
      alert("Failed to save blog. Check console for details.");
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/blogs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBlogs(response.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const resetForm = () => {
    setNewBlog({
      id: "",
      date: new Date().toLocaleDateString(),
      slug: "",
      title: "",
      keywords: "",
      description: "",
      sections: [],
      links: [],
    });
  };

  // const openViewForm = (blog: Blog) => {
  //   setViewBlog(blog);
  //   setShowViewModal(true);
  // };
  const openViewForm = (blog: Blog) => {
    // Map the server's data structure to the client's state for viewing
    const sectionsWithUrls = blog.sections.map((sec: any) => ({
      type: sec.type,
      // Use the correct backend keys for mapping
      content: sec.type === "text" ? sec.text : null,
      url:
        sec.type === "image" && sec.imageUrl
          ? `http://localhost:4000${sec.imageUrl}`
          : null,
      alt: sec.type === "image" ? sec.imageAlt : null,
    }));

    // Create a temporary blog object with the correctly mapped sections for viewing
    const blogToView = {
      ...blog,
      sections: sectionsWithUrls,
    };

    setViewBlog(blogToView);
    setShowViewModal(true);
  };

  const openEditForm = (blog: Blog) => {
    setSelectedBlog(blog);
    // Map backend data to frontend state format for editing
    const sectionsWithUrls: Section[] = blog.sections.map((sec: any) => ({
      type: sec.type,
      content: sec.text || "",
      alt: sec.imageAlt || "",
      url: sec.imageUrl ? `http://localhost:4000${sec.imageUrl}` : "",
      file: null, // file will be null for existing images
    }));

    setNewBlog({ ...blog, sections: sectionsWithUrls });
    setShowForm(true);
  };

  const openAddForm = () => {
    setSelectedBlog(null);
    resetForm();
    setShowForm(true);
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`http://localhost:4000/api/blogs/${blogId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchBlogs(); // Re-fetch to update the list immediately
    } catch (error: any) {
      console.error(error);
      alert("Failed to delete blog. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-red-600">Blog Management</h1>
          <button
            onClick={openAddForm}
            className="flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Blog
          </button>
        </div>

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.length === 0 && (
            <p className="text-gray-500 col-span-full">No blogs yet.</p>
          )}
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm mb-2">{blog.description}</p>
                <p className="text-gray-400 text-xs">
                  Slug: <span className="text-gray-600">{blog.slug}</span>
                </p>
              </div>
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => openEditForm(blog)}
                  className="flex items-center px-3 py-1 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200"
                >
                  <Edit3 className="w-4 h-4 mr-1" /> Edit
                </button>

                <button
                  onClick={() => openViewForm(blog)}
                  className="flex items-center px-3 py-1 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors duration-200"
                >
                  <Eye className="w-4 h-4 mr-1" /> View
                </button>
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="flex items-center px-3 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-200"
                >
                  <X className="w-4 h-4 mr-1" /> Delete
                </button>
                <span className="text-gray-400 text-xs">{blog.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedBlog ? "Edit Blog" : "Create New Blog"}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setSelectedBlog(null);
                  }}
                  className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex h-full overflow-hidden">
                {/* Form Section */}
                <div className="w-full p-6 overflow-y-auto">
                  <div className="space-y-4">
                    {/* Basic Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Slug
                        </label>
                        <input
                          type="text"
                          name="slug"
                          placeholder="blog-post-url"
                          value={newBlog.slug}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Keywords
                        </label>
                        <input
                          type="text"
                          name="keywords"
                          placeholder="web, development, react"
                          value={newBlog.keywords}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Your Amazing Blog Title"
                        value={newBlog.title}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Description
                      </label>
                      <textarea
                        name="description"
                        placeholder="Brief description..."
                        value={newBlog.description}
                        onChange={handleChange}
                        rows={3}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Dynamic Sections */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-semibold text-gray-700">
                          Content Sections
                        </label>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => addSection("text")}
                            className="flex items-center px-3 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors duration-200"
                          >
                            <FileText className="w-4 h-4 mr-1" /> Text
                          </button>
                          <button
                            onClick={() => addSection("image")}
                            className="flex items-center px-3 py-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200"
                          >
                            <Image className="w-4 h-4 mr-1" /> Image
                          </button>
                        </div>
                      </div>

                      {newBlog.sections.map((sec, idx) => (
                        <div
                          key={idx}
                          className="border border-gray-200 rounded-xl p-4 bg-gray-50 relative"
                        >
                          <button
                            onClick={() => removeSection(idx)}
                            className="absolute top-2 right-2 p-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-200"
                          >
                            <X className="w-4 h-4" />
                          </button>

                          <div className="flex items-center mb-3">
                            {sec.type === "text" ? (
                              <FileText className="w-4 h-4 text-green-600 mr-2" />
                            ) : (
                              <Image className="w-4 h-4 text-purple-600 mr-2" />
                            )}
                            <span className="text-sm font-medium text-gray-700 capitalize">
                              {sec.type} Section {idx + 1}
                            </span>
                          </div>

                          {sec.type === "text" && (
                            <ReactQuill
                              theme="snow"
                              value={sec.content || ""}
                              onChange={(content) =>
                                updateSection(idx, "content", content)
                              }
                              className="bg-white border border-gray-300 rounded-lg"
                            />
                          )}

                          {sec.type === "image" && (
                            <div className="space-y-3">
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  e.target.files &&
                                  updateSection(idx, "file", e.target.files[0])
                                }
                                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all duration-200"
                              />
                              <input
                                type="text"
                                placeholder="Alt text for accessibility"
                                value={sec.alt || ""}
                                onChange={(e) =>
                                  updateSection(idx, "alt", e.target.value)
                                }
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              />
                              {sec.url && (
                                <img
                                  src={sec.url}
                                  alt={sec.alt}
                                  className="h-24 w-24 object-cover rounded-lg border border-gray-200"
                                />
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                      <button
                        onClick={() => {
                          setShowForm(false);
                          setSelectedBlog(null);
                        }}
                        className="flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" /> Cancel
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="flex items-center px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        {selectedBlog ? "Update Blog" : "Create Blog"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showViewModal && viewBlog && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Eye className="w-5 h-5 mr-2" /> View Blog
                </h2>
                <button
                  onClick={() => {
                    setShowViewModal(false);
                    setViewBlog(null);
                  }}
                  className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto">
                <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                  {viewBlog.title && (
                    <h1 className="text-2xl font-bold text-gray-900">
                      {viewBlog.title}
                    </h1>
                  )}
                  {viewBlog.description && (
                    <p className="text-gray-600">{viewBlog.description}</p>
                  )}

                  <div className="space-y-4">
                    {/* Use the mapped section data from viewBlog */}
                    {viewBlog.sections?.map((sec, idx) => (
                      <div key={idx}>
                        {/* Text Section */}
                        {sec.type === "text" && sec.content && (
                          <div
                            className="prose max-w-full"
                            dangerouslySetInnerHTML={{
                              __html: sec.content,
                            }}
                          />
                        )}

                        {/* Image Section */}
                        {sec.type === "image" && sec.url && (
                          <div className="space-y-2">
                            <img
                              src={sec.url}
                              alt={sec.alt || ""}
                              className="max-w-full h-auto rounded-lg shadow-sm"
                            />
                            {sec.alt && (
                              <p className="text-sm text-gray-500 italic">
                                {sec.alt}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientBlogs;
