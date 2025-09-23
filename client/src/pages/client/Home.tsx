import React, { useState } from "react";
import {
  FileText,
  Newspaper,
  Image,
  Youtube,
  User,
  MessageSquare,
  Calendar,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const AdminHome: React.FC = () => {
  const [stats] = useState({
    totalBlogs: 45,
    totalNews: 23,
    totalImages: 156,
    totalVideos: 12,
  });

  const adminSections = [
    {
      title: "Blogs Management",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "News Management",
      icon: <Newspaper className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      title: "Images Management",
      icon: <Image className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      title: "Videos Management",
      icon: <Youtube className="w-6 h-6" />,
      color: "bg-red-500",
    },
  ];

  const recentActivity = [
    {
      type: "blog",
      title: "Latest Tech Trends",
      date: "2024-01-15",
      status: "Published",
    },
    {
      type: "news",
      title: "Company Updates",
      date: "2024-01-14",
      status: "Draft",
    },
    {
      type: "image",
      title: "Product Gallery",
      date: "2024-01-13",
      status: "Uploaded",
    },
    {
      type: "video",
      title: "Tutorial Series",
      date: "2024-01-12",
      status: "Published",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "blog":
        return <FileText className="w-4 h-4 text-blue-500" />;
      case "news":
        return <Newspaper className="w-4 h-4 text-green-500" />;
      case "image":
        return <Image className="w-4 h-4 text-purple-500" />;
      case "video":
        return <Youtube className="w-4 h-4 text-red-500" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your content.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Blogs</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalBlogs}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+12% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total News</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalNews}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Newspaper className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+8% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Images</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalImages}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Image className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+25% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Videos</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalVideos}
              </p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <Youtube className="w-6 h-6 text-red-500" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+5% from last month</span>
          </div>
        </div>
      </div>

      {/* Available Sections */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Available Admin Sections
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {adminSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div
                className={`${section.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white`}
              >
                {section.icon}
              </div>
              <p className="font-medium text-gray-900">{section.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
