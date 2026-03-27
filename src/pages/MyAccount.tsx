import React, { useState } from "react";
import { 
  Package, 
  Settings as SettingsIcon, 
  CreditCard, 
  MapPin, 
  LogOut, 
  ChevronRight,
  Clock,
  CheckCircle2,
  Truck,
  Plus,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Globe,
  Trash2,
  Edit2
} from "lucide-react";
import { cn } from "../lib/utils";

// --- Components ---

const OrderItem = ({ id, date, status, total, items }: { 
  id: string, 
  date: string, 
  status: 'Delivered' | 'Shipped' | 'Processing', 
  total: number,
  items: number
}) => (
  <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight italic">Order #{id}</h4>
          <span className={cn(
            "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full",
            status === 'Delivered' ? "bg-emerald-100 text-emerald-600" :
            status === 'Shipped' ? "bg-blue-100 text-blue-600" :
            "bg-amber-100 text-amber-600"
          )}>
            {status}
          </span>
        </div>
        <p className="text-xs text-slate-500 font-medium">Placed on {date} • {items} items</p>
      </div>
      
      <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
        <div className="text-right">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Total</p>
          <p className="text-lg font-black text-slate-900 tracking-tighter">${total.toFixed(2)}</p>
        </div>
        <button className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

const PaymentCard = ({ type, last4, expiry, isDefault }: { type: string, last4: string, expiry: string, isDefault?: boolean }) => (
  <div className={cn(
    "p-6 rounded-2xl border transition-all relative overflow-hidden group",
    isDefault ? "bg-slate-900 border-slate-900 text-white shadow-xl" : "bg-white border-slate-100 text-slate-900 hover:border-primary/30"
  )}>
    <div className="absolute top-0 right-0 p-4 opacity-10">
      <CreditCard className="w-20 h-20" />
    </div>
    <div className="relative z-10 space-y-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className={cn("w-10 h-6 rounded border", isDefault ? "bg-white/20 border-white/30" : "bg-slate-100 border-slate-200")}></div>
          <p className="text-[10px] font-black uppercase tracking-widest">{type}</p>
        </div>
        {isDefault && <span className="text-[8px] font-black uppercase tracking-widest bg-primary text-white px-2 py-0.5 rounded-full">Default</span>}
      </div>
      <div>
        <p className="text-lg font-black tracking-[0.2em]">•••• •••• •••• {last4}</p>
        <div className="flex justify-between items-end mt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Expires {expiry}</p>
          <div className="flex gap-2">
            <button className="p-1.5 hover:text-primary transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
            {!isDefault && <button className="p-1.5 hover:text-rose-500 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Component ---

export default function MyAccount() {
  const [activeTab, setActiveTab] = useState<"orders" | "profile" | "payments" | "addresses">("orders");

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-2">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-3xl font-black text-slate-900 tracking-tighter">12</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Completed Deployments</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-2">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                  <Truck className="w-5 h-5" />
                </div>
                <p className="text-3xl font-black text-slate-900 tracking-tighter">02</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Shipments</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-2">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-3xl font-black text-slate-900 tracking-tighter">01</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pending Prep</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="space-y-6">
              <div className="flex justify-between items-end px-2">
                <div>
                  <h2 className="text-2xl font-black font-headline tracking-tighter uppercase italic text-slate-900">Recent Deployments</h2>
                  <p className="text-slate-500 text-xs font-medium">Track and manage your high-performance gear orders.</p>
                </div>
                <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All History</button>
              </div>

              <div className="space-y-4">
                <OrderItem id="CS-9821" date="March 24, 2026" status="Shipped" total={245.50} items={3} />
                <OrderItem id="CS-9745" date="March 12, 2026" status="Delivered" total={189.99} items={1} />
                <OrderItem id="CS-9612" date="Feb 28, 2026" status="Delivered" total={412.00} items={5} />
                <OrderItem id="CS-9588" date="Feb 15, 2026" status="Delivered" total={85.00} items={1} />
              </div>
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
              <h2 className="text-3xl font-black font-headline tracking-tighter uppercase italic text-slate-900">Elite Profile</h2>
              <p className="text-slate-500 text-sm font-medium">Manage your personal information and performance preferences.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <User className="w-3 h-3" /> Full Name
                  </label>
                  <input type="text" defaultValue="Alex Rivera" className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Email Address
                  </label>
                  <input type="email" defaultValue="alex.rivera@elite.com" className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <Phone className="w-3 h-3" /> Phone Number
                  </label>
                  <input type="tel" defaultValue="+1 (555) 012-3456" className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <Globe className="w-3 h-3" /> Nationality
                  </label>
                  <select className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all">
                    <option>United States</option>
                    <option>Paraguay</option>
                    <option>Spain</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Last updated: March 20, 2026</p>
                <button className="bg-primary text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-105 transition-all active:scale-95">
                  Update Profile
                </button>
              </div>
            </div>

            {/* Elite Preferences */}
            <div className="space-y-6">
              <h3 className="text-xl font-black font-headline tracking-tighter uppercase italic text-slate-900">Performance Preferences</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Primary Sport", value: "Marathon Running" },
                  { label: "Shoe Size", value: "42.5 EU" },
                  { label: "Apparel Size", value: "Medium" },
                  { label: "Training Frequency", value: "5-6 days / week" },
                ].map((pref, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{pref.label}</p>
                      <p className="text-sm font-bold text-slate-900">{pref.value}</p>
                    </div>
                    <button className="text-primary hover:underline text-[10px] font-black uppercase tracking-widest">Edit</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "payments":
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <h2 className="text-3xl font-black font-headline tracking-tighter uppercase italic text-slate-900">Payment Methods</h2>
                <p className="text-slate-500 text-sm font-medium">Securely manage your elite payment deployments.</p>
              </div>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-slate-800 transition-all">
                <Plus className="w-4 h-4" /> Add New Card
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PaymentCard type="VISA" last4="4242" expiry="12/28" isDefault />
              <PaymentCard type="MASTERCARD" last4="8812" expiry="05/27" />
            </div>

            {/* Security Note */}
            <div className="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 flex gap-6 items-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-black uppercase tracking-tight italic text-emerald-900">Military-Grade Security</h4>
                <p className="text-xs text-emerald-700 leading-relaxed">Your payment data is encrypted using 256-bit AES protocols. Cohen Sport never stores your full card details on our local servers.</p>
              </div>
            </div>
          </div>
        );

      case "addresses":
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <h2 className="text-3xl font-black font-headline tracking-tighter uppercase italic text-slate-900">Shipping Addresses</h2>
                <p className="text-slate-500 text-sm font-medium">Manage your global deployment locations.</p>
              </div>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-slate-800 transition-all">
                <Plus className="w-4 h-4" /> Add New Address
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Home Base", address: "123 Elite Performance Way, Suite 400", city: "New York, NY 10001", isDefault: true },
                { label: "Training Camp", address: "456 High Altitude Road", city: "Boulder, CO 80301", isDefault: false },
              ].map((addr, i) => (
                <div key={i} className={cn(
                  "p-8 rounded-[2rem] border transition-all relative group",
                  addr.isDefault ? "bg-white border-primary/30 shadow-lg shadow-primary/5" : "bg-white border-slate-100 hover:border-slate-200"
                )}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-black uppercase tracking-tight italic text-slate-900">{addr.label}</h4>
                      {addr.isDefault && <span className="text-[8px] font-black uppercase tracking-widest bg-primary text-white px-2 py-0.5 rounded-full">Primary</span>}
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:text-primary transition-colors"><Edit2 className="w-4 h-4" /></button>
                      {!addr.isDefault && <button className="p-2 hover:text-rose-500 transition-colors"><Trash2 className="w-4 h-4" /></button>}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-600">{addr.address}</p>
                    <p className="text-sm font-bold text-slate-600">{addr.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Nav */}
        <div className="lg:col-span-3 space-y-8">
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-200 border-2 border-white shadow-sm">
              <img src="https://picsum.photos/seed/customer1/200/200" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight italic">Alex Rivera</h3>
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Elite Member</p>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { id: "orders", label: "My Orders", icon: Package },
              { id: "profile", label: "Elite Profile", icon: SettingsIcon },
              { id: "payments", label: "Payment Methods", icon: CreditCard },
              { id: "addresses", label: "Shipping Addresses", icon: MapPin },
              { id: "logout", label: "Logout", icon: LogOut, danger: true },
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => item.id !== "logout" && setActiveTab(item.id as any)}
                className={cn(
                  "w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all",
                  activeTab === item.id 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : item.danger 
                      ? "text-rose-500 hover:bg-rose-50" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-9">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
