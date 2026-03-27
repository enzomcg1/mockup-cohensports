import React from "react";
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  CreditCard, 
  Zap, 
  Smartphone,
  Mail,
  Lock,
  Eye,
  ChevronRight
} from "lucide-react";
import { cn } from "../lib/utils";

const SettingItem = ({ icon: Icon, label, description, hasToggle = false, isActive = false }: { 
  icon: any, 
  label: string, 
  description: string, 
  hasToggle?: boolean,
  isActive?: boolean 
}) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className="p-2 bg-slate-50 rounded-xl text-slate-500 group-hover:text-primary transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight italic">{label}</h4>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
    </div>
    {hasToggle ? (
      <div className={cn(
        "w-10 h-5 rounded-full relative transition-colors duration-200",
        isActive ? "bg-primary" : "bg-slate-200"
      )}>
        <div className={cn(
          "absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-200",
          isActive ? "left-6" : "left-1"
        )} />
      </div>
    ) : (
      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
    )}
  </div>
);

export default function Settings() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic">System Configuration</h2>
          <p className="text-slate-500 font-medium">Managing your elite performance environment settings.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar Nav */}
        <div className="md:col-span-4 space-y-2">
          {[
            { label: "Profile", icon: User, active: true },
            { label: "Notifications", icon: Bell },
            { label: "Security", icon: Shield },
            { label: "Integrations", icon: Zap },
            { label: "Billing", icon: CreditCard },
            { label: "Localization", icon: Globe },
          ].map((item, i) => (
            <button 
              key={i} 
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all",
                item.active 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-slate-500 hover:bg-slate-100"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-8 space-y-8">
          {/* Profile Section */}
          <section className="space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] px-2">Personal Deployment</h3>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200">
                  <img 
                    src="https://picsum.photos/seed/marcus/200/200" 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button className="absolute -bottom-2 -right-2 p-1.5 bg-primary text-white rounded-lg shadow-lg hover:scale-110 transition-transform">
                  <Smartphone className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black text-slate-900 tracking-tight italic uppercase">Marcus Cohen</h4>
                <p className="text-sm text-slate-500 mb-4">Elite System Administrator</p>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-colors">Change Photo</button>
                  <button className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors">Remove</button>
                </div>
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] px-2">Operational Preferences</h3>
            <div className="space-y-3">
              <SettingItem 
                icon={Bell} 
                label="Elite Notifications" 
                description="Receive real-time alerts for inventory stock-outs and high-value orders." 
                hasToggle={true} 
                isActive={true} 
              />
              <SettingItem 
                icon={Zap} 
                label="AI Strategic Insights" 
                description="Enable automated performance recommendations based on market velocity." 
                hasToggle={true} 
                isActive={true} 
              />
              <SettingItem 
                icon={Lock} 
                label="Two-Factor Deployment" 
                description="Secure your elite workspace with biometric or SMS verification." 
                hasToggle={true} 
                isActive={false} 
              />
            </div>
          </section>

          {/* Security Section */}
          <section className="space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] px-2">Access Control</h3>
            <div className="space-y-3">
              <SettingItem 
                icon={Mail} 
                label="Email Configuration" 
                description="Update your primary communication channel for system reports." 
              />
              <SettingItem 
                icon={Eye} 
                label="Privacy Protocol" 
                description="Manage data visibility and elite network sharing preferences." 
              />
            </div>
          </section>

          <div className="pt-4 flex justify-end gap-4">
            <button className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-colors">Reset Defaults</button>
            <button className="px-8 py-3 premium-gradient text-white rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:opacity-90 transition-all">Save Configuration</button>
          </div>
        </div>
      </div>
    </div>
  );
}
