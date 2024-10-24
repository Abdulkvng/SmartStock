import React from 'react';
import { Package, BarChart3, ShoppingCart, Settings, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onNavigate: (view: string) => void;
  currentView: string;
}

function Sidebar({ isOpen, setIsOpen, onNavigate, currentView }: SidebarProps) {
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', view: 'dashboard' },
    { icon: Package, label: 'Inventory', view: 'inventory' },
    { icon: ShoppingCart, label: 'Orders', view: 'orders' },
    { icon: Settings, label: 'Settings', view: 'settings' },
  ];

  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed lg:relative lg:translate-x-0 z-30 bg-white border-r border-gray-200 w-64 h-screen transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">SmartStock</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => onNavigate(item.view)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${
                    currentView === item.view
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs text-gray-500">Store Manager</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;