import React from "react";
import { 
  Filter, 
  Download, 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  Star, 
  AlertTriangle, 
  Wind, 
  Maximize2,
  Search,
  Bell,
  Settings,
  Plus
} from "lucide-react";
import { cn } from "../lib/utils";

const ProductCard = ({ name, price, stock, label, trend, img, category, trendIcon: TrendIcon }: { 
  name: string, 
  price: string, 
  stock: string, 
  label?: string, 
  trend?: string, 
  img: string,
  category?: string,
  trendIcon?: any
}) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
    <div className="relative h-64 overflow-hidden bg-slate-50">
      <img 
        src={`https://picsum.photos/seed/${img}/600/600`} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      {label && (
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded uppercase tracking-[0.15em] shadow-lg">
            {label}
          </span>
        </div>
      )}
      <div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
        <button className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center text-white shadow-xl">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-headline font-bold text-xl tracking-tight text-on-surface leading-tight">{name}</h3>
        <p className="font-headline font-black text-primary text-xl">{price}</p>
      </div>
      <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <span className="flex items-center gap-2">
          <Package className="w-3.5 h-3.5" /> {stock} In Stock
        </span>
        {trend && (
          <span className={cn(
            "flex items-center gap-2",
            trend.includes('Low') ? 'text-primary' : 'text-blue-600'
          )}>
            {TrendIcon && <TrendIcon className="w-3.5 h-3.5" />}
            {trend}
          </span>
        )}
        {category && (
          <span className="flex items-center gap-2">
            <Maximize2 className="w-3.5 h-3.5" /> {category}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default function Catalog() {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-1">
          <h2 className="text-6xl font-black font-headline tracking-tighter uppercase italic text-on-surface leading-none">Product Catalog</h2>
          <p className="text-on-surface-variant font-bold text-lg">Managing 1,284 premium athletic units across 14 categories.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-slate-100 px-6 py-3 rounded font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-200 transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="bg-primary text-white px-6 py-3 rounded font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-10">
        {/* Product Grid */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <ProductCard 
              name="Kinetic Surge V2" 
              price="$185.00" 
              stock="42" 
              label="New Arrival" 
              trend="High Demand" 
              trendIcon={TrendingUp}
              img="shoe-red-performance" 
            />
            <ProductCard 
              name="AeroLayer Pro Top" 
              price="$72.00" 
              stock="156" 
              trend="5 Sizes" 
              trendIcon={Maximize2}
              img="athlete-compression" 
            />
            <ProductCard 
              name="Precision Chrono-X" 
              price="$120.00" 
              stock="Low Stock (8)" 
              trend="Accessories" 
              trendIcon={Star}
              img="stopwatch-elite" 
            />
            <ProductCard 
              name="IronCore Grip 10kg" 
              price="$45.00" 
              stock="84" 
              trend="Equipment" 
              trendIcon={Maximize2}
              img="dumbbells-pro" 
            />
            <ProductCard 
              name="FlexFit Leggings" 
              price="$88.00" 
              stock="212" 
              trend="Best Seller" 
              trendIcon={Star}
              img="yoga-performance" 
            />
            <ProductCard 
              name="Apex Run Shorts" 
              price="$55.00" 
              stock="98" 
              trend="Breathable" 
              trendIcon={Wind}
              img="running-shorts" 
            />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-3 space-y-10">
          {/* Sales Target Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-headline font-black uppercase tracking-tight text-2xl italic">Sales Target</h4>
              <span className="text-primary font-black font-headline text-2xl italic">72%</span>
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                  <span>Today's Goal</span>
                  <span className="text-on-surface">$12,500.00</span>
                </div>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full premium-gradient rounded-full shadow-[0_0_10px_rgba(165,0,0,0.3)]" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-50">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Sold</p>
                  <p className="text-2xl font-headline font-black text-on-surface">$9,002</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Remaining</p>
                  <p className="text-2xl font-headline font-black text-slate-300">$3,498</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Clients Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
            <h4 className="font-headline font-black uppercase tracking-tight text-2xl italic mb-8">Top Clients</h4>
            <div className="space-y-6">
              {[
                { name: "Global Athletics", time: "2h ago", amount: "$4.2k", initial: "GA" },
                { name: "Peak Fitness", time: "5h ago", amount: "$1.8k", initial: "PF" },
                { name: "Urban Runners", time: "1d ago", amount: "$0.9k", initial: "UR" },
              ].map((client, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary font-headline font-black group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {client.initial}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold font-headline text-on-surface">{client.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Last order: {client.time}</p>
                  </div>
                  <div className="text-sm font-black font-headline text-on-surface">{client.amount}</div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 border border-blue-100 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
              View All Clients
            </button>
          </div>

          {/* Seasonal Focus Ad */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group shadow-2xl">
            <img 
              src="https://picsum.photos/seed/sprint-track/800/1000" 
              alt="Promo" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end">
              <p className="text-primary font-black font-headline italic text-xs uppercase tracking-tighter mb-2">Seasonal Focus</p>
              <h5 className="text-white text-4xl font-black font-headline tracking-tighter uppercase leading-[0.9] mb-4">Summer Track Series</h5>
              <p className="text-white/60 text-xs font-medium mb-6 leading-relaxed">Wholesale bundles now available for registered clubs. Up to 25% off.</p>
              <button className="w-max bg-white text-on-background px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
