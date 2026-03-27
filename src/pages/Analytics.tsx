import React from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Package, 
  ArrowUpRight, 
  Calendar,
  Filter,
  Download,
  Zap,
  Target
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";
import { cn } from "../lib/utils";

const revenueData = [
  { name: "Mon", revenue: 4500, target: 4000 },
  { name: "Tue", revenue: 5200, target: 4000 },
  { name: "Wed", revenue: 4800, target: 4000 },
  { name: "Thu", revenue: 6100, target: 4000 },
  { name: "Fri", revenue: 5900, target: 4000 },
  { name: "Sat", revenue: 7200, target: 4000 },
  { name: "Sun", revenue: 6800, target: 4000 },
];

const categoryData = [
  { name: "Footwear", value: 45, color: "#a50000" },
  { name: "Apparel", value: 30, color: "#d30000" },
  { name: "Equipment", value: 15, color: "#1a1c1c" },
  { name: "Accessories", value: 10, color: "#495d90" },
];

const regionalData = [
  { region: "North America", sales: 850 },
  { region: "Europe", sales: 620 },
  { region: "Asia Pacific", sales: 440 },
  { region: "Latin America", sales: 210 },
];

const growthData = [
  { month: "Jan", users: 1200 },
  { month: "Feb", users: 1900 },
  { month: "Mar", users: 2400 },
  { month: "Apr", users: 3100 },
  { month: "May", users: 4200 },
  { month: "Jun", users: 5800 },
];

const StatCard = ({ label, value, trend, isPositive, icon: Icon }: { 
  label: string, 
  value: string, 
  trend: string, 
  isPositive: boolean,
  icon: any 
}) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-slate-50 rounded-xl text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div className={cn(
        "flex items-center gap-1 text-[10px] font-black uppercase tracking-widest",
        isPositive ? "text-emerald-600" : "text-primary"
      )}>
        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {trend}
      </div>
    </div>
    <h3 className="text-2xl font-black text-slate-900 tracking-tight">{value}</h3>
    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</p>
  </div>
);

export default function Analytics() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-1">Performance Insights</p>
          <h2 className="text-5xl font-black font-headline tracking-tighter uppercase italic text-on-surface">Analytics Hub</h2>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-colors">
            <Calendar className="w-4 h-4" /> Last 7 Days
          </button>
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" /> Filters
          </button>
          <button className="premium-gradient text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg hover:opacity-90 transition-all">
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Revenue" value="$142,500" trend="+12.5%" isPositive={true} icon={DollarSign} />
        <StatCard label="Active Users" value="8,432" trend="+18.2%" isPositive={true} icon={Users} />
        <StatCard label="Conversion Rate" value="3.84%" trend="-0.4%" isPositive={false} icon={Zap} />
        <StatCard label="Avg. Order Value" value="$168.50" trend="+5.2%" isPositive={true} icon={ShoppingCart} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue Trend */}
        <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-2xl font-black font-headline tracking-tighter uppercase italic">Revenue Velocity</h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Daily performance vs target</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Target</span>
              </div>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a50000" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#a50000" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="target" stroke="#e2e8f0" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                <Area type="monotone" dataKey="revenue" stroke="#a50000" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Share */}
        <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h4 className="text-2xl font-black font-headline tracking-tighter uppercase italic mb-8">Category Share</h4>
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-black font-headline text-on-surface">100%</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">Inventory</span>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            {categoryData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">{item.name}</span>
                </div>
                <span className="text-sm font-black font-headline">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Regional Performance */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-2xl font-black font-headline tracking-tighter uppercase italic">Regional Performance</h4>
            <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">View Map</button>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionalData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f1f1" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="region" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#64748b" }}
                  width={100}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="sales" fill="#a50000" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Growth */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-2xl font-black font-headline tracking-tighter uppercase italic">Elite Network Growth</h4>
            <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
              <TrendingUp className="w-4 h-4" />
              +24% MoM
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }} 
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#a50000" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: "#a50000", strokeWidth: 2, stroke: "#fff" }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Strategic Insights */}
      <div className="bg-slate-900 p-10 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Target className="w-48 h-48 text-white" />
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/30">
              <Zap className="w-3 h-3" /> AI Strategic Insight
            </div>
            <h3 className="text-3xl font-black font-headline text-white tracking-tighter uppercase italic">Inventory Optimization Recommended</h3>
            <p className="text-slate-400 max-w-xl">Based on current velocity, "Elite Performance Footwear" is projected to stock out in 12 days. Increasing regional allocation for Asia Pacific could capture an additional 15% in untapped revenue.</p>
          </div>
          <div className="flex justify-end">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-black font-headline uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 shadow-xl">
              Apply Strategy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
