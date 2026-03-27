import React from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Package,
  Calendar,
  Filter,
  Download
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { name: "MON", revenue: 4000, target: 3000 },
  { name: "TUE", revenue: 5000, target: 3500 },
  { name: "WED", revenue: 3500, target: 3200 },
  { name: "THU", revenue: 6000, target: 4500 },
  { name: "FRI", revenue: 4500, target: 3800 },
  { name: "SAT", revenue: 5500, target: 4200 },
  { name: "SUN", revenue: 3000, target: 3000 },
];

const KPICard = ({ title, value, change, icon: Icon, trend }: { title: string, value: string, change: string, icon: any, trend: "up" | "down" | "neutral" }) => (
  <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 group hover:-translate-y-1 transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-50 text-primary rounded-lg">
        <Icon className="w-5 h-5" />
      </div>
      <span className={`text-xs font-bold flex items-center gap-1 px-2 py-1 rounded-full ${
        trend === "up" ? "text-emerald-600 bg-emerald-50" : 
        trend === "down" ? "text-red-600 bg-red-50" : 
        "text-slate-600 bg-slate-50"
      }`}>
        {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {change}
      </span>
    </div>
    <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">{title}</p>
    <h3 className="text-3xl font-black text-on-surface mt-1">{value}</h3>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Title */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-1">Performance Overview</p>
          <h2 className="text-4xl font-black italic tracking-tighter text-on-surface uppercase">Dashboard</h2>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold text-slate-600 hover:bg-surface-container-low transition-colors">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="premium-gradient text-white px-6 py-2 rounded-lg text-sm font-bold shadow-md">
            Generate Report
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Total Sales" value="$142,384.00" change="+12.5%" icon={DollarSign} trend="up" />
        <KPICard title="Total Orders" value="1,284" change="+5.2%" icon={ShoppingBag} trend="up" />
        <KPICard title="Active Users" value="42,891" change="-2.1%" icon={Users} trend="down" />
        <KPICard title="Inventory Units" value="8,432" change="94% Capacity" icon={Package} trend="neutral" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sales Performance Chart */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-xl font-bold italic tracking-tighter uppercase">Sales Performance</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Target</span>
              </div>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }} 
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="target" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue" fill="#a50000" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Performance */}
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
          <h4 className="text-xl font-bold italic tracking-tighter mb-6 uppercase">Top Performance</h4>
          <div className="space-y-6">
            {[
              { name: "Apex Runner 2.0", sales: "412 Units Sold", price: "$49,440", img: "shoe" },
              { name: "Pro Chrono X", sales: "285 Units Sold", price: "$34,200", img: "watch" },
              { name: "Vanguard Duffel", sales: "194 Units Sold", price: "$18,430", img: "bag" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-surface-container-low overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${item.img}/100/100`} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-on-surface">{item.name}</p>
                  <p className="text-xs text-on-surface-variant">{item.sales}</p>
                </div>
                <p className="font-bold text-primary">{item.price}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 border border-outline-variant/20 rounded text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-low transition-colors">
            View Full Inventory
          </button>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
        <div className="p-8 flex justify-between items-center border-b border-surface-container-low">
          <h4 className="text-xl font-bold italic tracking-tighter uppercase">Recent Orders</h4>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-surface-container-low rounded text-slate-400"><Filter className="w-5 h-5" /></button>
            <button className="p-2 hover:bg-surface-container-low rounded text-slate-400"><Download className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Order ID</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Customer</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Product</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {[
                { id: "#CS-9421", customer: "Jameson Doyle", product: "Apex Runner 2.0 (Navy)", status: "Shipped", amount: "$129.00", color: "emerald" },
                { id: "#CS-9420", customer: "Ava Mitchell", product: "Compression Leggings XL", status: "Processing", amount: "$85.00", color: "amber" },
                { id: "#CS-9419", customer: "Robert Wade", product: "Vanguard Duffel (Black)", status: "Canceled", amount: "$145.00", color: "red" },
                { id: "#CS-9418", customer: "Lisa Huang", product: "Pro Chrono X Watch", status: "Delivered", amount: "$299.00", color: "emerald" },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 text-sm font-bold text-on-surface">{order.id}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-primary">
                        {order.customer.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-on-surface-variant">{order.product}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      order.color === "emerald" ? "bg-emerald-100 text-emerald-700" :
                      order.color === "amber" ? "bg-amber-100 text-amber-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-right">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-50 text-center">
          <button className="text-xs font-bold uppercase tracking-widest text-primary hover:opacity-80 transition-colors">Show All Orders</button>
        </div>
      </div>

      <footer className="text-on-surface-variant/40 text-[10px] font-bold uppercase tracking-[0.2em] text-center pt-8">
        © 2024 COHEN SPORT PERFORMANCE SYSTEMS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
