import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  ArrowRight, 
  Filter, 
  ChevronDown,
  Zap,
  ShieldCheck,
  Truck
} from "lucide-react";
import { cn } from "../lib/utils";

const PRODUCTS = [
  {
    id: "P001",
    name: "Elite Performance Runner X1",
    price: 189.99,
    category: "Footwear",
    image: "https://picsum.photos/seed/shoe1/600/600",
    rating: 4.9,
    reviews: 128,
    isNew: true,
    tag: "Best Seller"
  },
  {
    id: "P002",
    name: "Aero-Tech Compression Shirt",
    price: 59.99,
    category: "Apparel",
    image: "https://picsum.photos/seed/shirt1/600/600",
    rating: 4.8,
    reviews: 85,
    isNew: false,
    tag: "Elite Tech"
  },
  {
    id: "P003",
    name: "Carbon-Fiber Training Shorts",
    price: 45.00,
    category: "Apparel",
    image: "https://picsum.photos/seed/shorts1/600/600",
    rating: 4.7,
    reviews: 210,
    isNew: true,
    tag: "Lightweight"
  },
  {
    id: "P004",
    name: "Pro-Grip Basketball Z",
    price: 155.50,
    category: "Footwear",
    image: "https://picsum.photos/seed/shoe2/600/600",
    rating: 4.9,
    reviews: 342,
    isNew: false,
    tag: "Pro Series"
  },
  {
    id: "P005",
    name: "Elite Training Backpack",
    price: 85.00,
    category: "Accessories",
    image: "https://picsum.photos/seed/bag1/600/600",
    rating: 4.6,
    reviews: 56,
    isNew: false,
    tag: "Durable"
  },
  {
    id: "P006",
    name: "Titanium-Core Jump Rope",
    price: 29.99,
    category: "Equipment",
    image: "https://picsum.photos/seed/rope1/600/600",
    rating: 4.8,
    reviews: 112,
    isNew: true,
    tag: "High Speed"
  }
];

const ProductCard: React.FC<{ product: typeof PRODUCTS[0] }> = ({ product }) => (
  <div className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
    {/* Image Container */}
    <div className="aspect-square overflow-hidden relative bg-slate-50">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      
      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">New</span>
        )}
        {product.tag && (
          <span className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">{product.tag}</span>
        )}
      </div>

      {/* Quick Actions */}
      <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all shadow-xl">
          <Heart className="w-5 h-5" />
        </button>
        <Link to="/cart" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all shadow-xl">
          <ShoppingCart className="w-5 h-5" />
        </Link>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 space-y-3">
      <div className="flex justify-between items-start">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{product.category}</p>
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="w-3 h-3 fill-current" />
          <span className="text-[10px] font-bold text-slate-600">{product.rating}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase italic leading-tight group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      
      <div className="flex justify-between items-center pt-2">
        <p className="text-xl font-black text-slate-900 tracking-tighter">${product.price.toFixed(2)}</p>
        <button className="text-xs font-black uppercase tracking-widest text-primary hover:underline flex items-center gap-1">
          Details <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
);

export default function Store() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-slate-900 overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/elite-athlete/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-primary/30 backdrop-blur-md">
              <Zap className="w-4 h-4" /> New Season Drop
            </div>
            <h1 className="text-7xl md:text-8xl font-black font-headline text-white tracking-tighter uppercase italic leading-[0.85]">
              Elite <br />
              <span className="text-primary">Performance</span> <br />
              Gear
            </h1>
            <p className="text-xl text-slate-300 font-medium max-w-lg leading-relaxed">
              Engineered for the world's most demanding athletes. Push your limits with the new Cohen Sport Elite collection.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="premium-gradient text-white px-10 py-5 rounded-xl font-black font-headline uppercase tracking-widest text-lg shadow-2xl hover:scale-105 transition-all active:scale-95">
                Shop Collection
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-black font-headline uppercase tracking-widest text-lg hover:bg-white/20 transition-all">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-slate-50 border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-tight italic">Elite Express</h4>
              <p className="text-xs text-slate-500">Free priority shipping on orders over $150</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-tight italic">Secure Deployment</h4>
              <p className="text-xs text-slate-500">Military-grade encryption for all payments</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-tight italic">Performance Guarantee</h4>
              <p className="text-xs text-slate-500">30-day elite trial on all performance gear</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl font-black font-headline tracking-tighter uppercase italic text-slate-900">Featured Gear</h2>
            <p className="text-slate-500 font-medium">The latest innovations in sports performance.</p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {["All", "Footwear", "Apparel", "Equipment", "Accessories"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-lg" 
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.filter(p => activeCategory === "All" || p.category === activeCategory).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <button className="bg-slate-900 text-white px-12 py-4 rounded-xl font-black font-headline uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-xl">
            View All Products
          </button>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <img src="https://picsum.photos/seed/texture/800/800" alt="Texture" className="w-full h-full object-cover mix-blend-overlay" />
          </div>
          
          <div className="relative z-10 space-y-6 text-center md:text-left">
            <h3 className="text-5xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase italic leading-none">
              Join the <br />
              Elite Network
            </h3>
            <p className="text-white/80 text-lg font-medium max-w-md">
              Get 15% off your first elite deployment when you sign up for our performance updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <input type="email" placeholder="Enter your email" className="bg-white/20 border border-white/30 rounded-xl px-6 py-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/40 w-full sm:w-80 backdrop-blur-md" />
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-black font-headline uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl">
                Sign Up
              </button>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
            <img src="https://picsum.photos/seed/athlete2/600/600" alt="Athlete" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </div>
  );
}
