import React from "react";
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Zap, 
  ChevronRight,
  User,
  Fingerprint
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-surface overflow-hidden">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
        <img 
          src="https://picsum.photos/seed/sprint-elite/1200/1200" 
          alt="Elite Performance" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay scale-110 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/20 to-transparent"></div>
        
        <div className="relative z-10 p-20 flex flex-col justify-between h-full">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded flex items-center justify-center text-primary font-black text-2xl italic shadow-2xl">
              CS
            </div>
            <h1 className="text-3xl font-black tracking-widest text-white leading-none uppercase font-headline italic">Cohen Sport</h1>
          </div>

          <div className="space-y-8">
            <h2 className="text-7xl font-black font-headline tracking-tighter uppercase italic text-white leading-[0.9]">
              Elite<br />Performance<br />Systems
            </h2>
            <p className="text-white/70 text-xl font-medium max-w-md leading-relaxed">
              Join the world's most advanced athletic brand management platform. Precision, speed, and elite results.
            </p>
            <div className="flex gap-8 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-white font-black text-3xl font-headline italic tracking-tighter">50k+</span>
                <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Active Athletes</span>
              </div>
              <div className="flex flex-col gap-1 border-l border-white/20 pl-8">
                <span className="text-white font-black text-3xl font-headline italic tracking-tighter">142</span>
                <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Global Hubs</span>
              </div>
              <div className="flex flex-col gap-1 border-l border-white/20 pl-8">
                <span className="text-white font-black text-3xl font-headline italic tracking-tighter">99.9%</span>
                <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">System Uptime</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
            <span>Privacy Policy</span>
            <span>Terms of Deployment</span>
            <span>© 2024 CSPS</span>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-20">
        <div className="w-full max-w-md space-y-12">
          <div className="space-y-4">
            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white font-black text-xl italic">
                CS
              </div>
              <h1 className="text-xl font-black tracking-widest text-on-surface leading-none uppercase font-headline italic">Cohen Sport</h1>
            </div>
            <h3 className="text-5xl font-black font-headline tracking-tighter uppercase italic text-on-surface">Sign In</h3>
            <p className="text-on-surface-variant font-bold text-lg">Access your elite performance dashboard.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                <Mail className="w-3 h-3" />
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="marcus@cohensport.com" 
                className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                  <Lock className="w-3 h-3" />
                  Access Key
                </label>
                <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:opacity-80 transition-colors">Forgot Key?</button>
              </div>
              <input 
                type="password" 
                placeholder="••••••••••••" 
                className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary" id="remember" />
              <label htmlFor="remember" className="text-xs font-bold text-on-surface-variant uppercase tracking-widest cursor-pointer">Remember this device</label>
            </div>

            <Link 
              to="/"
              className="w-full premium-gradient text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black font-headline uppercase tracking-widest text-lg shadow-2xl shadow-primary/20 hover:opacity-90 active:scale-95 transition-all"
            >
              Authorize Access
              <ArrowRight className="w-6 h-6" />
            </Link>
          </form>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest">
                <span className="bg-surface px-4 text-slate-400">Alternative Access</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-4 bg-surface-container-low rounded-2xl hover:bg-slate-200 transition-all group">
                <Globe className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface">SSO</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-4 bg-surface-container-low rounded-2xl hover:bg-slate-200 transition-all group">
                <Fingerprint className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Biometric</span>
              </button>
            </div>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex gap-4 items-center">
              <Zap className="w-6 h-6 text-primary animate-pulse" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">New to Cohen Sport?</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-1 hover:text-primary transition-colors">
                  Request Elite Membership <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
