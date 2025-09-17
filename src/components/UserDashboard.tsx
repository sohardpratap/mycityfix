import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  User, 
  FileText, 
  MapPin, 
  Users, 
  Share2, 
  Settings,
  Building2,
  Zap,
  Globe,
  X
} from 'lucide-react';

interface UserDashboardProps {
  user: { name: string; email: string } | null;
  onLogout: () => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ user, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const departments = [
    {
      id: 1,
      name: 'Municipal Corporation',
      logo: '🏛️',
      description: 'Waste management, Street lights, Road Amenities, (Association with PWD Department Requirement)',
      services: ['Waste management', 'Street lights', 'Road Amenities', 'Association with PWD']
    },
    {
      id: 2,
      name: 'Residents Welfare Association',
      logo: '🏘️',
      description: 'An RWA is a collective body of residents from a specific locality, society, or neighbourhood. They work together to address common interests and maintain the welfare and quality of life in their area.',
      services: ['Community welfare', 'Local issues', 'Neighbourhood watch', 'Common facilities']
    },
    {
      id: 3,
      name: 'Ministry of Housing and Urban Affairs',
      logo: '🏢',
      description: 'This is a central government ministry that formulates policies and supports programs for housing and urban development across the country. It aims to create sustainable, inclusive, and well-planned urban spaces for all citizens.',
      services: ['Housing policies', 'Urban development', 'Smart cities', 'Infrastructure']
    },
    {
      id: 4,
      name: 'State Electricity Board',
      logo: '⚡',
      description: 'Responsible for electricity generation, transmission, and distribution in the state.',
      services: ['Power supply', 'Electricity billing', 'Grid maintenance', 'New connections']
    },
    {
      id: 5,
      name: 'Urban Development Authority',
      logo: '🏗️',
      description: 'Plans and oversees urban development projects and infrastructure.',
      services: ['Urban planning', 'Development permits', 'Infrastructure projects', 'Zoning']
    },
    {
      id: 6,
      name: 'Water Supply Department',
      logo: '💧',
      description: 'Manages water supply, treatment, and distribution systems.',
      services: ['Water supply', 'Quality testing', 'Pipeline maintenance', 'New connections']
    }
  ];

  const sidebarItems = [
    { icon: FileText, label: 'Complaint Register', active: false },
    { icon: MapPin, label: 'Track Complaint', active: false },
    { icon: Users, label: 'Complaint Around Me', active: false },
    { icon: Share2, label: 'Social media', active: false },
    { icon: Settings, label: 'Settings', active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-blue-50 to-green-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-400 to-green-400 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-medium">{user?.name}</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-white/30 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          <button
            onClick={onLogout}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/90 backdrop-blur-sm shadow-xl transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
            <span className="font-semibold text-gray-800">Menu</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800">{user?.name}</div>
                <div className="text-sm text-gray-600">{user?.email}</div>
              </div>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    item.active 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 lg:ml-0">
          {/* Background Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <div className="text-center">
              <div className="w-96 h-96 rounded-full border-8 border-green-500 flex items-center justify-center mb-8">
                <div className="text-9xl">🏛️</div>
                <div className="absolute bottom-8 right-8">
                  <MapPin className="w-16 h-16 text-orange-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Department Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-white/50"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4 text-2xl">
                  {dept.logo}
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">{dept.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{dept.description}</p>
                <div className="space-y-1">
                  {dept.services.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-500">
                      <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Registration Footer */}
          <div className="text-center py-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-gray-700 font-medium">
                Register Your Complaint Here - XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default UserDashboard;