// src/components/ClientSidebar.jsx
import { Link } from "react-router-dom";
import logo from "../assets/brandwar.png";

interface SidebarProps {
  onNavigate: (page: string) => void;
}

export default function ClientSidebar({ onNavigate }: SidebarProps) {
  return (
    <aside
      id="client-sidebar"
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
              to="/client/home"
              className="flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-700 group"
            >
              <span className="ms-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/client/blogs"
              className="flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-700 group"
            >
              <span className="ms-3">Blogs</span>
            </Link>
          </li>
          <li>
            <Link
              to="/client/news"
              className="flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-700 group"
            >
              <span className="ms-3">News</span>
            </Link>
          </li>
          <li>
            <Link
              to="/client/images"
              className="flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-700 group"
            >
              <span className="ms-3">Images</span>
            </Link>
          </li>
          <li>
            <Link
              to="/client/videos"
              className="flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-700 group"
            >
              <span className="ms-3">YouTube Videos</span>
            </Link>
          </li>
          <li>
            <Link
              to="/client/support"
              className="flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-700 group"
            >
              <span className="ms-3">Support</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
