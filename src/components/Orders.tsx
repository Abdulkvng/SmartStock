import React, { useState } from 'react';
import { Plus, FileText, Package, Truck } from 'lucide-react';
import DataTable from './DataTable';
import Badge from './Badge';

interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  date: string;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  items: number;
}

function Orders() {
  const [orders] = useState<Order[]>([
    {
      id: '1',
      orderNumber: 'ORD-2024-001',
      customer: 'John Smith',
      date: '2024-03-15',
      total: 299.97,
      status: 'Pending',
      items: 3,
    },
    {
      id: '2',
      orderNumber: 'ORD-2024-002',
      customer: 'Sarah Johnson',
      date: '2024-03-14',
      total: 159.99,
      status: 'Processing',
      items: 2,
    },
    {
      id: '3',
      orderNumber: 'ORD-2024-003',
      customer: 'Mike Wilson',
      date: '2024-03-14',
      total: 499.99,
      status: 'Shipped',
      items: 1,
    },
  ]);

  const columns = [
    { key: 'orderNumber', label: 'Order Number', sortable: true },
    { key: 'customer', label: 'Customer', sortable: true },
    { 
      key: 'date', 
      label: 'Date',
      sortable: true,
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    { 
      key: 'total',
      label: 'Total',
      sortable: true,
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    { key: 'items', label: 'Items', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => {
        const variants: { [key: string]: 'info' | 'warning' | 'success' | 'error' } = {
          'Pending': 'warning',
          'Processing': 'info',
          'Shipped': 'success',
          'Delivered': 'success',
        };
        return <Badge variant={variants[value]}>{value}</Badge>;
      },
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <button className="p-1 hover:bg-gray-100 rounded">
          <FileText className="h-4 w-4 text-gray-600" />
        </button>
      ),
    },
  ];

  const stats = [
    {
      label: 'New Orders',
      value: '12',
      icon: Package,
      color: 'blue',
    },
    {
      label: 'Processing',
      value: '5',
      icon: FileText,
      color: 'yellow',
    },
    {
      label: 'Shipped',
      value: '8',
      icon: Truck,
      color: 'green',
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-600">Manage and track customer orders</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          New Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`h-5 w-5 text-${stat.color}-600`} />
              </div>
              <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <DataTable
        columns={columns}
        data={orders}
        onSearch={(query) => console.log('Searching:', query)}
      />
    </div>
  );
}

export default Orders;