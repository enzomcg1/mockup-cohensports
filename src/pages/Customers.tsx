import React, { useState } from "react";
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Mail, 
  Phone, 
  MapPin, 
  TrendingUp,
  Star,
  ShieldCheck,
  Calendar
} from "lucide-react";
import { cn } from "../lib/utils";

const CUSTOMERS = [
  {
    id: "C001",
    name: "Alex Rivera",
    email: "alex.rivera@elite.com",
    phone: "+1 (555) 123-4567",
    location: "Los Angeles, CA",
    tier: "Diamond",
    totalSpent: 12450.00,
    lastOrder: "2026-03-20",
    status: "Active",
    avatar: "https://picsum.photos/seed/alex/100/100",
    type: "Pro Athlete"
  },
  {
    id: "C002",
    name: "Sarah Chen",
    email: "s.chen@proclub.org",
    phone: "+1 (555) 987-6543",
    location: "New York, NY",
    tier: "Gold",
    totalSpent: 8200.50,
    lastOrder: "2026-03-15",
    status: "Active",
    avatar: "https://picsum.photos/seed/sarah/100/100",
    type: "Club Manager"
  },
  {
    id: "C003",
    name: "Marcus Thompson",
    email: "m.thompson@varsity.edu",
    phone: "+1 (555) 456-7890",
    location: "Chicago, IL",
    tier: "Silver",
    totalSpent: 3500.25,
    lastOrder: "2026-02-28",
    status: "Inactive",
    avatar: "https://picsum.photos/seed/marcus/100/100",
    type: "Coach"
  },
  {
    id: "C004",
    name: "Elena Rodriguez",
    email: "elena.r@performance.fit",
    phone: "+1 (555) 222-3333",
    location: "Miami, FL",
    tier: "Diamond",
    totalSpent: 15700.00,
    lastOrder: "2026-03-25",
    status: "Active",
    avatar: "https://picsum.photos/seed/elena/100/100",
    type: "Pro Athlete"
  },
  {
    id: "C005",
    name: "David Wilson",
    email: "d.wilson@gym.com",
    phone: "+1 (555) 444-5555",
    location: "Austin, TX",
    tier: "Gold",
    totalSpent: 6100.00,
    lastOrder: "2026-03-10",
    status: "Active",
    avatar: "https://picsum.photos/seed/david/100/100",
    type: "Trainer"
  }
];

const TierBadge = ({ tier }: { tier: string }) => {
  const colors = {
    Diamond: "bg-blue-100 text-blue-700 border-blue-200",
    Gold: "bg-amber-100 text-amber-700 border-amber-200",
    Silver: "bg-slate-100 text-slate-700 border-slate-200"
  };
  
  return (
    <span className={cn(
      "px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border",
      colors[tier as keyof typeof colors]
    )}>
      {tier}
    </span>
  );
};

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCustomers = CUSTOMERS.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 relative">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic">Elite Network</h2>
          <p className="text-slate-500 font-medium">Managing your professional athlete and club relationships.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="premium-gradient text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg hover:opacity-90 transition-all active:scale-95"
        >
          <Plus className="w-5 h-5" />
          <span className="uppercase tracking-widest text-sm">Add New Client</span>
        </button>
      </div>

      {/* Modal Placeholder */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight italic">Register Elite Client</h3>
                <p className="text-slate-500 text-sm">Enter the professional details for the new athlete or club.</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <Plus className="w-5 h-5 rotate-45 text-slate-400" />
              </button>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="e.g. Cristiano Ronaldo" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Type</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20">
                    <option>Pro Athlete</option>
                    <option>Club Manager</option>
                    <option>Coach</option>
                    <option>Trainer</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Initial Tier</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20">
                    <option>Silver</option>
                    <option>Gold</option>
                    <option>Diamond</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="client@elite.com" required />
              </div>
              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-colors">Cancel</button>
                <button type="submit" className="flex-1 py-3 premium-gradient text-white rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:opacity-90 transition-all">Save Client</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Clients", value: "1,284", icon: Users, color: "text-blue-600" },
          { label: "Active This Month", value: "842", icon: TrendingUp, color: "text-emerald-600" },
          { label: "Diamond Tier", value: "156", icon: Star, color: "text-indigo-600" },
          { label: "Retention Rate", value: "94.2%", icon: ShieldCheck, color: "text-primary" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2 rounded-lg bg-slate-50", stat.color)}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-4 flex-1 min-w-[300px]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, email, or ID..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Sort By:</span>
          <select className="bg-slate-50 border-none rounded-xl text-sm font-bold text-slate-600 focus:ring-0 cursor-pointer">
            <option>Last Active</option>
            <option>Total Spent</option>
            <option>Tier</option>
            <option>Name</option>
          </select>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-bottom border-slate-100">
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Client</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tier</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Spent</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Order</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img 
                        src={customer.avatar} 
                        alt={customer.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-slate-900">{customer.name}</p>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-tighter bg-primary/5 px-1.5 py-0.5 rounded">
                          {customer.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{customer.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                    customer.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"
                  )}>
                    <span className={cn("w-1.5 h-1.5 rounded-full", customer.status === "Active" ? "bg-emerald-500" : "bg-slate-400")} />
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <TierBadge tier={customer.tier} />
                </td>
                <td className="px-6 py-4">
                  <p className="font-black text-slate-900 tracking-tight">
                    ${customer.totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold">{customer.lastOrder}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredCustomers.length === 0 && (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No clients found</h3>
            <p className="text-slate-500">Try adjusting your search or filters.</p>
          </div>
        )}

        <div className="bg-slate-50 px-6 py-4 flex justify-between items-center border-t border-slate-100">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Showing {filteredCustomers.length} of {CUSTOMERS.length} clients
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>

      {/* Quick Actions / Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
          <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-4">Support Hotline</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-700">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold">+1 (800) COHEN-SP</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold">vip@cohensport.com</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl md:col-span-2 flex items-center justify-between">
          <div>
            <h4 className="text-lg font-black text-white uppercase tracking-tight mb-1 italic">Loyalty Program Update</h4>
            <p className="text-slate-400 text-sm">New Diamond tier benefits are now live for all pro athletes.</p>
          </div>
          <button className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
