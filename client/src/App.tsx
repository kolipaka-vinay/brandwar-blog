import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ClientSidebar from "./components/ClientSidebar";
import Home from "./pages/Home";
import Clients from "./pages/Clients.tsx";
import { Toaster } from "react-hot-toast";
import ClientLogin from "./pages/ClientLogin.tsx";
import ClientHome from "./pages/client/Home";
import ClientBlogs from "./pages/client/Blogs";
import ClientNews from "./pages/client/News";
import ClientImages from "./pages/client/Images";
import ClientVideos from "./pages/client/Videos";
import ClientSupport from "./pages/client/Support";

// Wrapper to handle sidebar logic
function AppLayout() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("Home");

  const superAdminRoutes = ["/", "/all-clients"];
  const clientRoutes = [
    "/client/home",
    "/client/blogs",
    "/client/news",
    "/client/images",
    "/client/videos",
    "/client/support",
  ];

  const hideSidebar = location.pathname === "/login";

  return (
    <div className="flex">
      {!hideSidebar && superAdminRoutes.includes(location.pathname) && (
        <Sidebar />
      )}
      {!hideSidebar && clientRoutes.includes(location.pathname) && (
        <ClientSidebar onNavigate={setActivePage} />
      )}

      <div
        className={`${
          !hideSidebar ? "ml-64" : ""
        } flex-1 bg-white min-h-screen`}
      >
        <Routes>
          {/* Superadmin routes */}
          <Route path="/" element={<Home />} />
          <Route path="/all-clients" element={<Clients />} />

          {/* Client login */}
          <Route path="/login" element={<ClientLogin />} />

          {/* Client panel routes */}

          <Route path="/client/home" element={<ClientHome />} />
          <Route path="/client/blogs" element={<ClientBlogs />} />
          <Route path="/client/news" element={<ClientNews />} />
          <Route path="/client/images" element={<ClientImages />} />
          <Route path="/client/videos" element={<ClientVideos />} />
          <Route path="/client/support" element={<ClientSupport />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <AppLayout />
    </Router>
  );
}
