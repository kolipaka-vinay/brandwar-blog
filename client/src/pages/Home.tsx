import {
  Users,
  // Home,
  Globe,
  FileText,
  Image,
  Video,
  Newspaper,
  TrendingUp,
  Activity,
} from "lucide-react";

// Sample data for dashboard metrics
const dashboardData = {
  totalClients: 15,
  activeWebsites: 15,
  totalContent: 247,
  activeModules: 45,
  recentActivity: [
    {
      client: "TechCorp Solutions",
      action: "Added new blog post",
      time: "2 hours ago",
    },
    {
      client: "Green Energy Co",
      action: "Uploaded 5 images",
      time: "4 hours ago",
    },
    {
      client: "Creative Studio",
      action: "Published news article",
      time: "6 hours ago",
    },
    {
      client: "Digital Marketing Pro",
      action: "Added video content",
      time: "1 day ago",
    },
  ],
  contentBreakdown: {
    blogs: 89,
    news: 45,
    images: 78,
    videos: 35,
  },
  topClients: [
    { name: "TechCorp Solutions", content: 42, modules: 4 },
    { name: "Green Energy Co", content: 38, modules: 3 },
    { name: "Creative Studio", content: 35, modules: 4 },
    { name: "Digital Marketing Pro", content: 28, modules: 3 },
    { name: "Healthcare Plus", content: 25, modules: 2 },
  ],
};

export default function SuperAdminDashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-red-600">Dashboard Home</h1>
        <p className="text-gray-600 mb-8">
          Welcome to the Super Admin dashboard!
        </p>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Total Clients
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  {dashboardData.totalClients}
                </p>
              </div>
              <Users className="text-blue-600" size={40} />
            </div>
            <div className="mt-2">
              <span className="text-green-500 text-sm">+2 this month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Active Websites
                </h3>
                <p className="text-2xl font-bold text-green-600">
                  {dashboardData.activeWebsites}
                </p>
              </div>
              <Globe className="text-green-600" size={40} />
            </div>
            <div className="mt-2">
              <span className="text-green-500 text-sm">100% uptime</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Total Content
                </h3>
                <p className="text-2xl font-bold text-purple-600">
                  {dashboardData.totalContent}
                </p>
              </div>
              <FileText className="text-purple-600" size={40} />
            </div>
            <div className="mt-2">
              <span className="text-green-500 text-sm">+15 this week</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Active Modules
                </h3>
                <p className="text-2xl font-bold text-orange-600">
                  {dashboardData.activeModules}
                </p>
              </div>
              <Activity className="text-orange-600" size={40} />
            </div>
            <div className="mt-2">
              <span className="text-blue-500 text-sm">Across all clients</span>
            </div>
          </div>
        </div>

        {/* Content Overview and Top Clients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Content Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
            <h2 className="text-xl font-semibold mb-4">Content Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="text-blue-600" size={24} />
                  <span className="font-medium">Blogs</span>
                </div>
                <span className="text-xl font-bold text-blue-600">
                  {dashboardData.contentBreakdown.blogs}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Newspaper className="text-green-600" size={24} />
                  <span className="font-medium">News</span>
                </div>
                <span className="text-xl font-bold text-green-600">
                  {dashboardData.contentBreakdown.news}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Image className="text-purple-600" size={24} />
                  <span className="font-medium">Images</span>
                </div>
                <span className="text-xl font-bold text-purple-600">
                  {dashboardData.contentBreakdown.images}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Video className="text-red-600" size={24} />
                  <span className="font-medium">Videos</span>
                </div>
                <span className="text-xl font-bold text-red-600">
                  {dashboardData.contentBreakdown.videos}
                </span>
              </div>
            </div>
          </div>

          {/* Top Clients */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
            <h2 className="text-xl font-semibold mb-4">
              Top Clients by Content
            </h2>
            <div className="space-y-4">
              {dashboardData.topClients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{client.name}</div>
                      <div className="text-sm text-gray-500">
                        {client.modules} modules active
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{client.content}</div>
                    <div className="text-sm text-gray-500">content items</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-red-600" size={24} />
            <h2 className="text-xl font-semibold">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            {dashboardData.recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg"
              >
                <div className="w-3 h-3 bg-red-600 rounded-full mt-1.5"></div>
                <div className="flex-1">
                  <div className="font-medium">{activity.client}</div>
                  <div className="text-gray-600">{activity.action}</div>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
