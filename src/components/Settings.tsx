import React from 'react';
import { User, Building, Bell, Lock, CreditCard, Globe } from 'lucide-react';

function Settings() {
  const sections = [
    {
      icon: User,
      title: 'Profile Settings',
      description: 'Update your personal information and preferences',
    },
    {
      icon: Building,
      title: 'Company Information',
      description: 'Manage your business details and location',
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure your notification preferences',
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Manage your password and security settings',
    },
    {
      icon: CreditCard,
      title: 'Billing',
      description: 'View and manage your subscription and billing details',
    },
    {
      icon: Globe,
      title: 'Preferences',
      description: 'Set your language and regional preferences',
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;