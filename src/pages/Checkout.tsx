import React, { useState } from "react";
import { 
  ArrowLeft, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  ChevronRight, 
  Lock, 
  CheckCircle2, 
  Package, 
  MapPin, 
  Clock, 
  Zap 
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <div className="p-8 lg:p-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <Link to="/cart" className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-4 h-4" />
              Back to Your Kit
            </Link>
            <h2 className="text-6xl font-black font-headline tracking-tighter uppercase italic text-on-surface">Checkout</h2>
            <p className="text-on-surface-variant font-bold text-lg">Finalize your elite performance deployment.</p>
          </div>
          <div className="flex items-center gap-4 bg-emerald-50 px-6 py-4 rounded-2xl border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 leading-none">Security Status</p>
              <p className="text-2xl font-black font-headline text-emerald-700 uppercase italic">Elite Secure</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Form Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Stepper */}
            <div className="flex items-center gap-4 bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-sm">
              {[
                { step: 1, label: "Shipping", icon: MapPin },
                { step: 2, label: "Delivery", icon: Truck },
                { step: 3, label: "Payment", icon: CreditCard },
              ].map((s, i) => (
                <React.Fragment key={s.step}>
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                      step === s.step ? "premium-gradient text-white scale-110 shadow-xl shadow-primary/20" : 
                      step > s.step ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"
                    )}>
                      {step > s.step ? <CheckCircle2 className="w-6 h-6" /> : <s.icon className="w-6 h-6" />}
                    </div>
                    <div className="hidden md:block">
                      <p className={cn(
                        "text-[10px] font-bold uppercase tracking-widest leading-none mb-1",
                        step === s.step ? "text-primary" : "text-slate-400"
                      )}>Step 0{s.step}</p>
                      <p className={cn(
                        "text-sm font-black font-headline uppercase italic tracking-tight",
                        step === s.step ? "text-on-surface" : "text-slate-400"
                      )}>{s.label}</p>
                    </div>
                  </div>
                  {i < 2 && <div className="flex-1 h-px bg-slate-100 mx-4"></div>}
                </React.Fragment>
              ))}
            </div>

            {/* Form Content */}
            <div className="bg-surface-container-lowest p-10 rounded-3xl border border-outline-variant/10 shadow-sm space-y-10">
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-3xl font-black font-headline tracking-tighter uppercase italic border-b border-slate-100 pb-6">Shipping Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                      <input type="text" placeholder="Marcus Cohen" className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                      <input type="email" placeholder="marcus@cohensport.com" className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Street Address</label>
                      <input type="text" placeholder="123 Elite Performance Way" className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">City</label>
                      <input type="text" placeholder="New York" className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">State</label>
                        <input type="text" placeholder="NY" className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">ZIP Code</label>
                        <input type="text" placeholder="10001" className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-3xl font-black font-headline tracking-tighter uppercase italic border-b border-slate-100 pb-6">Delivery Method</h3>
                  <div className="space-y-4">
                    {[
                      { id: "standard", name: "Standard Delivery", time: "3-5 Business Days", price: "Free", icon: Clock },
                      { id: "express", name: "Elite Express", time: "1-2 Business Days", price: "$15.00", icon: Zap, active: true },
                      { id: "overnight", name: "Next Day Deployment", time: "Tomorrow by 10AM", price: "$35.00", icon: Package },
                    ].map((method) => (
                      <label key={method.id} className={cn(
                        "flex items-center justify-between p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300",
                        method.active ? "border-primary bg-primary/5 shadow-lg shadow-primary/5" : "border-slate-100 bg-slate-50 hover:border-slate-200"
                      )}>
                        <div className="flex items-center gap-6">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                            method.active ? "bg-primary text-white" : "bg-white text-slate-400"
                          )}>
                            <method.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-lg font-black font-headline uppercase italic tracking-tight text-on-surface">{method.name}</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{method.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-black font-headline text-on-surface">{method.price}</p>
                          <input type="radio" name="delivery" className="text-primary focus:ring-primary mt-2" defaultChecked={method.active} />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-3xl font-black font-headline tracking-tighter uppercase italic border-b border-slate-100 pb-6">Payment Method</h3>
                  <div className="space-y-6">
                    <div className="p-8 bg-slate-900 rounded-3xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <CreditCard className="w-40 h-40 text-white" />
                      </div>
                      <div className="relative z-10 space-y-8">
                        <div className="flex justify-between items-start">
                          <div className="w-12 h-8 bg-amber-400/20 rounded-md border border-amber-400/30"></div>
                          <div className="text-white font-black font-headline italic text-xl tracking-widest">VISA</div>
                        </div>
                        <div className="space-y-4">
                          <input 
                            type="text" 
                            placeholder="4242 4242 4242 4242" 
                            className="w-full bg-white/10 border-none rounded-xl px-6 py-4 text-white font-black font-headline tracking-[0.2em] placeholder:text-white/20 focus:ring-2 focus:ring-white/20 transition-all" 
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="MM/YY" className="w-full bg-white/10 border-none rounded-xl px-6 py-4 text-white font-black font-headline tracking-[0.2em] placeholder:text-white/20 focus:ring-2 focus:ring-white/20 transition-all" />
                            <input type="text" placeholder="CVC" className="w-full bg-white/10 border-none rounded-xl px-6 py-4 text-white font-black font-headline tracking-[0.2em] placeholder:text-white/20 focus:ring-2 focus:ring-white/20 transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center gap-3 py-4 bg-surface-container-low rounded-2xl hover:bg-slate-200 transition-all group">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-[8px] font-black">PP</div>
                        <span className="text-xs font-bold uppercase tracking-widest text-on-surface">PayPal</span>
                      </button>
                      <button className="flex items-center justify-center gap-3 py-4 bg-surface-container-low rounded-2xl hover:bg-slate-200 transition-all group">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white">
                          <span className="text-[10px] font-black"></span>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Apple Pay</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-10 border-t border-slate-100">
                <button 
                  disabled={step === 1}
                  onClick={() => setStep(s => s - 1)}
                  className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-on-surface disabled:opacity-0 transition-all"
                >
                  Back to {step === 2 ? "Shipping" : "Delivery"}
                </button>
                <button 
                  onClick={() => setStep(s => s < 3 ? s + 1 : s)}
                  className="premium-gradient text-white px-12 py-5 rounded-2xl flex items-center justify-center gap-3 font-black font-headline uppercase tracking-widest text-lg shadow-2xl shadow-primary/20 hover:opacity-90 active:scale-95 transition-all"
                >
                  {step === 3 ? "Authorize Payment" : "Continue to " + (step === 1 ? "Delivery" : "Payment")}
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-xl space-y-8 sticky top-8">
              <h4 className="text-2xl font-black font-headline tracking-tighter uppercase italic border-b border-slate-100 pb-4">Order Summary</h4>
              
              <div className="space-y-6">
                {[
                  { name: "Kinetic Surge V2", price: "$185.00", qty: 1, img: "shoe-red" },
                  { name: "AeroLayer Pro Top", price: "$144.00", qty: 2, img: "shirt-black" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                      <img src={`https://picsum.photos/seed/${item.img}/100/100`} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-on-surface leading-tight">{item.name}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Qty: {item.qty}</p>
                    </div>
                    <p className="text-sm font-black font-headline text-on-surface">{item.price}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                  <span>Subtotal</span>
                  <span className="text-on-surface">$329.00</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                  <span>Shipping</span>
                  <span className="text-on-surface">$15.00</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                  <span>Tax</span>
                  <span className="text-on-surface">$26.32</span>
                </div>
                <div className="pt-4 flex justify-between items-end">
                  <span className="text-lg font-black font-headline uppercase italic">Total</span>
                  <span className="text-3xl font-black font-headline text-primary">$370.32</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                <Lock className="w-5 h-5 text-slate-400" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-relaxed">
                  Your data is protected by <span className="text-primary">256-bit AES encryption</span> and elite security protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
