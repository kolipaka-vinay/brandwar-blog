// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import logo from "../assets/brandwar.png";
import clients from "../assets/clients.png";
import dashboard from "../assets/dashboard.png";
export default function Sidebar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-red-600">
        <a href="#" className="flex items-center ps-2.5 mb-5">
          <img src={logo} className="h-6 me-3 sm:h-10 bg-white" alt="brand" />
        </a>
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-700 group"
            >
              <img
                src={dashboard}
                alt="dashboard"
                className="w-5 h-5"
                style={{ filter: "invert(1)" }}
              />
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to="/all-clients"
              className="flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-700 group"
            >
              <img
                src={clients}
                alt="clients"
                className="w-6 h-6"
                style={{ filter: "invert(1)" }}
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Clients</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
