import React from "react";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Zap, 
  Globe, 
  ArrowUpRight, 
  MoreHorizontal,
  Plus,
  BarChart3,
  PieChart as PieChartIcon,
  Search
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { cn } from "../lib/utils";

const campaignData = [
  { name: "Jan", spend: 4000, reach: 2400 },
  { name: "Feb", spend: 3000, reach: 1398 },
  { name: "Mar", spend: 2000, reach: 9800 },
  { name: "Apr", spend: 2780, reach: 3908 },
  { name: "May", spend: 1890, reach: 4800 },
  { name: "Jun", spend: 2390, reach: 3800 },
];

const segmentData = [
  { name: "Professional", value: 45, color: "#a50000" },
  { name: "Amateur", value: 30, color: "#d30000" },
  { name: "Clubs", value: 25, color: "#1a1c1c" },
];

const DealCard = ({ company, value, stage, owner, date }: { 
  company: string, 
  value: string, 
  stage: string, 
  owner: string, 
  date: string 
}) => (
  <div className="bg-white p-5 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="font-headline font-bold text-lg tracking-tight">{company}</h4>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Est. Value: <span className="text-primary">{value}</span></p>
      </div>
      <button className="text-slate-300 hover:text-on-surface transition-colors">
        <MoreHorizontal className="w-5 h-5" />
      </button>
    </div>
    
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className={cn(
          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
          stage === "Negotiation" ? "bg-amber-100 text-amber-700" :
          stage === "Proposal" ? "bg-blue-100 text-blue-700" :
          "bg-emerald-100 text-emerald-700"
        )}>
          {stage}
        </span>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{date}</span>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-black text-primary">
            {owner.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="text-xs font-bold text-on-surface-variant">{owner}</span>
        </div>
        <button className="text-primary hover:translate-x-1 transition-transform">
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

export default function Commercial() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-1">Commercial Operations</p>
          <h2 className="text-5xl font-black font-headline tracking-tighter uppercase italic text-on-surface">Commercial Hub</h2>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-outline-variant/20 shadow-sm">
            <Search className="w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search deals..." className="bg-transparent border-none focus:ring-0 text-xs font-bold uppercase tracking-widest w-32" />
          </div>
          <button className="premium-gradient text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
            <Plus className="w-4 h-4" />
            New Deal
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-8 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target className="w-32 h-32 text-white" />
          </div>
          <div className="relative z-10 space-y-4">
            <p className="text-primary font-black font-headline italic text-xs uppercase tracking-widest">Pipeline Value</p>
            <h3 className="text-4xl font-black font-headline text-white tracking-tighter">$2.4M</h3>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <TrendingUp className="w-4 h-4" />
              +18.4% vs last quarter
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
          <div className="p-3 bg-slate-50 text-primary rounded-xl w-max">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <p className="text-on-surface-variant font-bold uppercase tracking-widest text-[10px]">Active Partnerships</p>
            <h3 className="text-3xl font-black font-headline text-on-surface">42 Elite Clubs</h3>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
          <div className="p-3 bg-slate-50 text-primary rounded-xl w-max">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <p className="text-on-surface-variant font-bold uppercase tracking-widest text-[10px]">Campaign ROI</p>
            <h3 className="text-3xl font-black font-headline text-on-surface">4.8x Avg.</h3>
          </div>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img src={`https://picsum.photos/seed/athlete${i}/100/100`} alt="Athlete" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white">
              +12
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Campaign Performance */}
        <div className="lg:col-span-8 bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-2xl font-black font-headline tracking-tighter uppercase italic">Campaign Reach</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Spend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Reach</span>
              </div>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={campaignData}>
                <defs>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
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
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="reach" stroke="#e2e8f0" fill="transparent" strokeWidth={2} />
                <Area type="monotone" dataKey="spend" stroke="#a50000" fillOpacity={1} fill="url(#colorSpend)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Market Segments */}
        <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
          <h4 className="text-2xl font-black font-headline tracking-tighter uppercase italic mb-8">Market Segments</h4>
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={segmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {segmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-black font-headline text-on-surface">100%</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">Total Market</span>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            {segmentData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{item.name}</span>
                </div>
                <span className="text-sm font-black font-headline">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sales Pipeline */}
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <h4 className="text-3xl font-black font-headline tracking-tighter uppercase italic">Active Pipeline</h4>
          <button className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">View All Deals</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DealCard company="Red Bull Racing" value="$450k" stage="Negotiation" owner="Marcus Cohen" date="Exp. Apr 12" />
          <DealCard company="Manchester City" value="$820k" stage="Proposal" owner="Sarah Jenkins" date="Exp. May 05" />
          <DealCard company="Nike Global" value="$1.2M" stage="Negotiation" owner="Marcus Cohen" date="Exp. Jun 20" />
          <DealCard company="Peloton Elite" value="$280k" stage="Contracting" owner="David Vance" date="Exp. Apr 28" />
        </div>
      </div>

      <div className="bg-primary/5 p-10 rounded-3xl border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
            <Globe className="w-8 h-8" />
          </div>
          <div>
            <h5 className="text-2xl font-black font-headline tracking-tighter uppercase italic text-on-surface">Global Expansion Series</h5>
            <p className="text-on-surface-variant font-bold">New commercial opportunities in the APAC region are now live.</p>
          </div>
        </div>
        <button className="bg-on-surface text-white px-8 py-4 rounded-xl font-black font-headline uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-xl">
          Explore Opportunities
        </button>
      </div>
    </div>
  );
}
