import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  Heart, 
  Package,
  LogOut,
  ChevronDown,
  LayoutDashboard
} from "lucide-react";
import { cn } from "../lib/utils";

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-white font-body text-on-surface flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/store" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white border-2 border-slate-100 shadow-sm flex items-center justify-center p-1 group-hover:border-primary transition-colors">
                <img 
                  src="https://picsum.photos/seed/cohensport-logo/200/200" 
                  alt="Cohen Sport Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="text-lg font-black tracking-tighter text-slate-900 leading-none uppercase italic">Cohen Sport</h1>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-primary">Elite Storefront</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/store" className={cn("text-xs font-black uppercase tracking-widest hover:text-primary transition-colors", location.pathname === '/store' ? 'text-primary' : 'text-slate-600')}>Shop</Link>
              <Link to="/store/apparel" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-primary transition-colors">Apparel</Link>
              <Link to="/store/footwear" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-primary transition-colors">Footwear</Link>
              <Link to="/store/equipment" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-primary transition-colors">Equipment</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <Search className="w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search elite gear..." 
                  className="bg-transparent border-none focus:ring-0 text-xs w-40"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <Link to="/cart" className="relative text-slate-600 hover:text-primary transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg">3</span>
                </Link>
                <Link to="/my-account" className="text-slate-600 hover:text-primary transition-colors">
                  <User className="w-5 h-5" />
                </Link>
                <Link 
                  to="/admin" 
                  className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg shadow-slate-200"
                >
                  <LayoutDashboard className="w-3 h-3" />
                  Admin
                </Link>
                <button className="md:hidden text-slate-600">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-1">
                <img src="https://picsum.photos/seed/cohensport-logo/200/200" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <h2 className="text-xl font-black tracking-tighter uppercase italic">Cohen Sport</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Equipping the world's most elite athletes with high-performance gear designed for victory.</p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-primary">Shop</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/store/footwear" className="hover:text-white transition-colors">Footwear</Link></li>
              <li><Link to="/store/apparel" className="hover:text-white transition-colors">Apparel</Link></li>
              <li><Link to="/store/equipment" className="hover:text-white transition-colors">Equipment</Link></li>
              <li><Link to="/store/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-primary">Support</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="#" className="hover:text-white transition-colors">Order Status</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-primary">Elite Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Get early access to drops and exclusive performance tips.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary" />
              <button className="bg-primary px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>© 2026 Cohen Sport Elite Performance. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
