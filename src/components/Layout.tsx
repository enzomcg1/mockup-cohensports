import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package as Inventory, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Plus,
  Search,
  Bell,
  User,
  Briefcase,
  Grid,
  Store
} from "lucide-react";
import { cn } from "../lib/utils";

const SidebarLink = ({ to, icon: Icon, label }: { to: string, icon: any, label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
        isActive 
          ? "bg-white text-primary font-bold shadow-sm" 
          : "text-slate-600 hover:bg-slate-200 hover:translate-x-1"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="text-xs uppercase tracking-widest font-bold">{label}</span>
    </Link>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      {/* Sidebar */}
      <aside className="w-64 fixed left-0 top-0 h-full bg-slate-100 flex flex-col p-4 z-40">
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center p-1">
            <img 
              src="https://picsum.photos/seed/cohensport-logo/200/200" 
              alt="Cohen Sport Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-widest text-slate-900 leading-none uppercase">Cohen Sport</h1>
            <p className="text-[10px] font-bold uppercase tracking-tighter text-primary">Elite Performance</p>
          </div>
        </div>

        <Link
          to="/new-product"
          className="premium-gradient text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 mb-6 font-bold shadow-lg hover:opacity-90 transition-all active:scale-95"
        >
          <Plus className="w-5 h-5" />
          <span className="uppercase tracking-wider text-sm">New Product</span>
        </Link>

        <nav className="flex-1 flex flex-col gap-1">
          <SidebarLink to="/" icon={LayoutDashboard} label="Dashboard" />
          <SidebarLink to="/catalog" icon={Grid} label="Catalog" />
          <SidebarLink to="/commercial" icon={Briefcase} label="Commercial" />
          <SidebarLink to="/customers" icon={Users} label="Customers" />
          <SidebarLink to="/analytics" icon={BarChart3} label="Analytics" />
          <SidebarLink to="/orders" icon={ShoppingCart} label="Orders" />
          <SidebarLink to="/settings" icon={Settings} label="Settings" />
        </nav>

        <div className="mt-auto border-t border-slate-200 pt-4 flex flex-col gap-1">
          <SidebarLink to="/support" icon={HelpCircle} label="Support" />
          <SidebarLink to="/login" icon={LogOut} label="Logout" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 h-screen overflow-y-auto">
        {/* Top Bar */}
        <header className="bg-white/80 backdrop-blur-xl flex justify-between items-center px-8 py-4 sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-full w-96">
            <Search className="w-5 h-5 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Search elite gear, orders, customers..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <Link 
              to="/store" 
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all border border-slate-200"
            >
              <Store className="w-4 h-4" />
              Storefront
            </Link>
            <button className="text-slate-500 hover:text-primary transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
            </button>
            <button className="text-slate-500 hover:text-primary transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
              <div className="text-right">
                <p className="text-sm font-bold text-on-surface leading-none">Marcus Cohen</p>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tight">System Admin</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-slate-200 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/marcus/100/100" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
