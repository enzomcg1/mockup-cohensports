import React, { useState } from "react";
import { 
  Trash2, 
  Minus, 
  Plus, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  CreditCard,
  ChevronRight,
  Package,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const CartItem = ({ id, name, price, qty, img, size, color }: { 
  id: number, 
  name: string, 
  price: number, 
  qty: number, 
  img: string,
  size: string,
  color: string
}) => (
  <div className="flex gap-6 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm group hover:shadow-md transition-all duration-300">
    <div className="w-32 h-32 bg-slate-100 rounded-xl overflow-hidden shrink-0">
      <img 
        src={`https://picsum.photos/seed/${img}/200/200`} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold font-headline tracking-tight text-on-surface">{name}</h3>
          <div className="flex gap-4 mt-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Size: <span className="text-on-surface">{size}</span></p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Color: <span className="text-on-surface">{color}</span></p>
          </div>
        </div>
        <p className="text-xl font-black font-headline text-primary">${price.toFixed(2)}</p>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center bg-slate-100 rounded-lg p-1">
          <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-primary transition-colors"><Minus className="w-4 h-4" /></button>
          <span className="w-10 text-center text-sm font-bold">{qty}</span>
          <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-primary transition-colors"><Plus className="w-4 h-4" /></button>
        </div>
        <button className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
          <Trash2 className="w-4 h-4" />
          Remove
        </button>
      </div>
    </div>
  </div>
);

export default function Cart() {
  const [items] = useState([
    { id: 1, name: "Kinetic Surge V2", price: 185.00, qty: 1, img: "shoe-red", size: "42", color: "Elite Red" },
    { id: 2, name: "AeroLayer Pro Top", price: 72.00, qty: 2, img: "shirt-black", size: "XL", color: "Stealth Black" },
    { id: 3, name: "Vanguard Duffel", price: 145.00, qty: 1, img: "bag", size: "45L", color: "Midnight" },
  ]);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="p-8 lg:p-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <Link to="/store" className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-4 h-4" />
              Back to Store
            </Link>
            <h2 className="text-6xl font-black font-headline tracking-tighter uppercase italic text-on-surface">Your Kit</h2>
            <p className="text-on-surface-variant font-bold text-lg">Review your elite performance selection before deployment.</p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low px-6 py-4 rounded-2xl border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none">Total Items</p>
              <p className="text-2xl font-black font-headline text-on-surface">{items.length} Units</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            {items.map(item => (
              <CartItem key={item.id} {...item} />
            ))}

            {/* Recommendations */}
            <div className="pt-12 space-y-6">
              <h4 className="text-2xl font-black font-headline tracking-tighter uppercase italic">Complete the set</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Pro Chrono X", price: "$299", img: "watch" },
                  { name: "Compression Socks", price: "$25", img: "socks" },
                ].map((rec, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/5 group cursor-pointer hover:bg-white transition-all">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-200">
                      <img src={`https://picsum.photos/seed/${rec.img}/100/100`} alt={rec.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">{rec.name}</p>
                      <p className="text-xs text-primary font-black">{rec.price}</p>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-xl space-y-8 sticky top-8">
              <h4 className="text-2xl font-black font-headline tracking-tighter uppercase italic border-b border-slate-100 pb-4">Order Summary</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-slate-500">
                  <span>Subtotal</span>
                  <span className="text-on-surface">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-slate-500">
                  <span>Elite Shipping</span>
                  <span className="text-on-surface">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-slate-500">
                  <span>Estimated Tax</span>
                  <span className="text-on-surface">${tax.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                  <span className="text-lg font-black font-headline uppercase italic">Total</span>
                  <span className="text-4xl font-black font-headline text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <Truck className="w-4 h-4 text-primary" />
                    Free Express for Elite Members
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    2-Year Performance Warranty
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <CreditCard className="w-4 h-4 text-primary" />
                    Secure Encrypted Checkout
                  </div>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="w-full premium-gradient text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black font-headline uppercase tracking-widest text-lg shadow-2xl shadow-primary/20 hover:opacity-90 active:scale-95 transition-all"
              >
                Proceed to Checkout
                <ChevronRight className="w-6 h-6" />
              </Link>

              <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                Trusted by 50,000+ Elite Athletes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
