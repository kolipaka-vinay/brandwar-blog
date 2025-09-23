import { Link, useLocation } from "react-router-dom";

export default function ClientSidebar() {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/client/home" },
    { name: "Blogs", path: "/client/blogs" },
    { name: "News", path: "/client/news" },
    { name: "Images", path: "/client/images" },
    { name: "YouTube Videos", path: "/client/videos" },
    { name: "Support", path: "/client/support" },
  ];

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-red-600 shadow-md">
      <div className="p-4">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`block p-2 rounded ${
                  location.pathname === link.path
                    ? "bg-red-600 text-white"
                    : "text-white hover:bg-red-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
