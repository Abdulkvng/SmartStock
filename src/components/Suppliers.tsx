import React, { useState } from 'react';
import { Plus, Phone, Mail, MapPin } from 'lucide-react';
import DataTable from './DataTable';
import Badge from './Badge';

interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  location: string;
  status: 'Active' | 'Inactive';
  products: number;
}

function Suppliers() {
  const [suppliers] = useState<Supplier[]>([
    {
      id: '1',
      name: 'Tech Distributors Inc.',
      contact: 'Alice Brown',
      email: 'alice@techdist.com',
      phone: '(555) 123-4567',
      location: 'New York, NY',
      status: 'Active',
      products: 156,
    },
    {
      id: '2',
      name: 'Global Electronics Ltd.',
      contact: 'Bob Wilson',
      email: 'bob@globalelec.com',
      phone: '(555) 234-5678',
      location: 'Los Angeles, CA',
      status: 'Active',
      products: 89,
    },
    {
      id: '3',
      name: 'Smart Supplies Co.',
      contact: 'Carol Davis',
      email: 'carol@smartsup.com',
      phone: '(555) 345-6789',
      location: 'Chicago, IL',
      status: 'Inactive',
      products: 45,
    },
  ]);

  const columns = [
    { key: 'name', label: 'Company Name', sortable: true },
    { key: 'contact', label: 'Contact Person', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'phone', label: 'Phone', sortable: true },
    { key: 'location', label: 'Location', sortable: true },
    { key: 'products', label: 'Products', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Active' ? 'success' : 'error'}>{value}</Badge>
      ),
    },
    {
      key: 'actions',
      label: 'Contact',
      render: (_: any, row: Supplier) => (
        <div className="flex items-center gap-2">
          <a href={`mailto:${row.email}`} className="p-1 hover:bg-gray-100 rounded">
            <Mail className="h-4 w-4 text-gray-600" />
          </a>
          <a href={`tel:${row.phone}`} className="p-1 hover:bg-gray-100 rounded">
            <Phone className="h-4 w-4 text-gray-600" />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Suppliers</h1>
          <p className="text-gray-600">Manage your supplier relationships</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          Add Supplier
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-100">
              <MapPin className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-sm font-medium text-gray-500">Total Suppliers</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">24</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-100">
              <Mail className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-sm font-medium text-gray-500">Active Suppliers</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">18</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-yellow-100">
              <Phone className="h-5 w-5 text-yellow-600" />
            </div>
            <h3 className="text-sm font-medium text-gray-500">Pending Orders</h3>
          </div>
          <p className="text-2xl font-bold text-yellow-600">7</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={suppliers}
        onSearch={(query) => console.log('Searching:', query)}
      />
    </div>
  );
}

export default Suppliers;