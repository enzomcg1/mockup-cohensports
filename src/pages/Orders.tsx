import React from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Download, 
  MoreVertical, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Truck,
  Package,
  ArrowUpRight,
  Eye
} from "lucide-react";
import { cn } from "../lib/utils";

const ORDERS = [
  {
    id: "ORD-9284",
    customer: "Alex Rivera",
    date: "2026-03-26",
    amount: 1240.00,
    status: "Delivered",
    items: 4,
    shipping: "Elite Express"
  },
  {
    id: "ORD-9283",
    customer: "Sarah Chen",
    date: "2026-03-25",
    amount: 850.50,
    status: "Processing",
    items: 2,
    shipping: "Standard"
  },
  {
    id: "ORD-9282",
    customer: "Elena Rodriguez",
    date: "2026-03-25",
    amount: 3200.00,
    status: "Shipped",
    items: 8,
    shipping: "Elite Express"
  },
  {
    id: "ORD-9281",
    customer: "David Wilson",
    date: "2026-03-24",
    amount: 450.00,
    status: "Delivered",
    items: 1,
    shipping: "Standard"
  },
  {
    id: "ORD-9280",
    customer: "Marcus Thompson",
    date: "2026-03-24",
    amount: 1100.25,
    status: "Cancelled",
    items: 3,
    shipping: "Elite Express"
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    Delivered: "bg-emerald-50 text-emerald-600 border-emerald-100",
    Processing: "bg-blue-50 text-blue-600 border-blue-100",
    Shipped: "bg-indigo-50 text-indigo-600 border-indigo-100",
    Cancelled: "bg-primary/5 text-primary border-primary/10"
  };
  
  const icons = {
    Delivered: CheckCircle2,
    Processing: Clock,
    Shipped: Truck,
    Cancelled: AlertCircle
  };
  
  const Icon = icons[status as keyof typeof icons];
  
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
      styles[status as keyof typeof styles]
    )}>
      <Icon className="w-3 h-3" />
      {status}
    </span>
  );
};

export default function Orders() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic">Order Deployment</h2>
          <p className="text-slate-500 font-medium">Tracking the distribution of elite performance gear globally.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="premium-gradient text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg hover:opacity-90 transition-all">
            <ShoppingCart className="w-4 h-4" /> New Order
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Orders", value: "4,281", icon: ShoppingCart, color: "text-blue-600" },
          { label: "In Transit", value: "156", icon: Truck, color: "text-indigo-600" },
          { label: "Pending Prep", value: "42", icon: Clock, color: "text-amber-600" },
          { label: "Daily Revenue", value: "$12,450", icon: ArrowUpRight, color: "text-emerald-600" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2 rounded-lg bg-slate-50", stat.color)}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-4 flex-1 min-w-[300px]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by Order ID, Customer, or Status..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-bottom border-slate-100">
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Order ID</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Customer</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Shipping</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {ORDERS.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <Link to={`/admin/orders/${order.id}`} className="block group/id">
                    <p className="font-black text-slate-900 tracking-tight group-hover/id:text-primary transition-colors">{order.id}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{order.date}</p>
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-900">{order.customer}</p>
                  <p className="text-xs text-slate-500">{order.items} items</p>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4">
                  <p className="font-black text-slate-900 tracking-tight">
                    ${order.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      order.shipping === "Elite Express" ? "bg-primary" : "bg-slate-300"
                    )} />
                    <span className="text-xs font-bold text-slate-600">{order.shipping}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link 
                      to={`/admin/orders/${order.id}`}
                      className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5" />
                    </Link>
                    <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
