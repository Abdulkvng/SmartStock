import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import DataTable from './DataTable';
import Badge from './Badge';

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

function Inventory() {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Wireless Earbuds',
      sku: 'WE-001',
      category: 'Electronics',
      price: 99.99,
      stock: 45,
      status: 'In Stock',
    },
    {
      id: '2',
      name: 'Smart Watch',
      sku: 'SW-002',
      category: 'Electronics',
      price: 199.99,
      stock: 5,
      status: 'Low Stock',
    },
    {
      id: '3',
      name: 'Bluetooth Speaker',
      sku: 'BS-003',
      category: 'Electronics',
      price: 79.99,
      stock: 0,
      status: 'Out of Stock',
    },
  ]);

  const columns = [
    { key: 'name', label: 'Product Name', sortable: true },
    { key: 'sku', label: 'SKU', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    {
      key: 'price',
      label: 'Price',
      sortable: true,
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    { key: 'stock', label: 'Stock', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => {
        const variants: { [key: string]: 'success' | 'warning' | 'error' } = {
          'In Stock': 'success',
          'Low Stock': 'warning',
          'Out of Stock': 'error',
        };
        return <Badge variant={variants[value]}>{value}</Badge>;
      },
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Edit2 className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Trash2 className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600">Manage your products and stock levels</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Total Products</h3>
          <p className="text-2xl font-bold text-gray-900">2,847</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Low Stock Items</h3>
          <p className="text-2xl font-bold text-yellow-600">24</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Out of Stock</h3>
          <p className="text-2xl font-bold text-red-600">12</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={products}
        onSearch={(query) => console.log('Searching:', query)}
      />
    </div>
  );
}

export default Inventory;