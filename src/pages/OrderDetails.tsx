import React from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Package, 
  Truck, 
  CreditCard, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Download,
  Printer,
  ExternalLink
} from "lucide-react";
import { cn } from "../lib/utils";

// Mock data for a single order
const ORDER_DATA = {
  id: "ORD-9284",
  date: "March 26, 2026",
  time: "14:32 PM",
  status: "Delivered",
  customer: {
    name: "Alex Rivera",
    email: "alex.rivera@elite.com",
    phone: "+1 (555) 012-3456"
  },
  shipping: {
    method: "Elite Express",
    address: "123 Elite Performance Way, Suite 400",
    city: "New York, NY 10001",
    tracking: "CS-TRK-882910"
  },
  payment: {
    method: "Visa ending in 4242",
    status: "Paid",
    transactionId: "TXN-7721-B9"
  },
  items: [
    { id: 1, name: "Elite Performance Runner X1", price: 189.99, qty: 2, img: "shoe1", size: "42.5", color: "Elite Red" },
    { id: 2, name: "Aero-Tech Compression Shirt", price: 59.99, qty: 1, img: "shirt1", size: "M", color: "Stealth Black" },
    { id: 3, name: "Carbon-Fiber Training Shorts", price: 45.00, qty: 1, img: "shorts1", size: "M", color: "Slate" }
  ],
  summary: {
    subtotal: 484.97,
    shipping: 15.00,
    tax: 38.80,
    total: 538.77
  }
};

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    Delivered: "bg-emerald-50 text-emerald-600 border-emerald-100",
    Processing: "bg-blue-50 text-blue-600 border-blue-100",
    Shipped: "bg-indigo-50 text-indigo-600 border-indigo-100",
    Cancelled: "bg-primary/5 text-primary border-primary/10"
  };
  
  const icons = {
    Delivered: CheckCircle2,
    Processing: Clock,
    Shipped: Truck,
    Cancelled: AlertCircle
  };
  
  const Icon = icons[status as keyof typeof icons];
  
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
      styles[status as keyof typeof styles]
    )}>
      <Icon className="w-3.5 h-3.5" />
      {status}
    </span>
  );
};

export default function OrderDetails() {
  const { orderId } = useParams();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <Link to="/admin/orders" className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] hover:-translate-x-1 transition-transform">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Orders
          </Link>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic">Order {orderId || ORDER_DATA.id}</h2>
            <StatusBadge status={ORDER_DATA.status} />
          </div>
          <p className="text-slate-500 font-medium">Placed on {ORDER_DATA.date} at {ORDER_DATA.time}</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 p-2.5 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
            <Printer className="w-5 h-5" />
          </button>
          <button className="bg-white border border-slate-200 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
            <Download className="w-4 h-4" /> Export Invoice
          </button>
          <button className="premium-gradient text-white px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg hover:opacity-90 transition-all">
            Update Status
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Items & Timeline */}
        <div className="lg:col-span-8 space-y-8">
          {/* Items Table */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center">
              <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tight">Deployment Items</h3>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{ORDER_DATA.items.length} Items</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Product</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Details</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Qty</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Price</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {ORDER_DATA.items.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/30 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-slate-100 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                            <img 
                              src={`https://picsum.photos/seed/${item.img}/200/200`} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <p className="font-black text-slate-900 tracking-tight leading-tight max-w-[180px]">{item.name}</p>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Size: <span className="text-slate-900">{item.size}</span></p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Color: <span className="text-slate-900">{item.color}</span></p>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="font-bold text-slate-900">x{item.qty}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <span className="font-bold text-slate-600">${item.price.toFixed(2)}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <span className="font-black text-slate-900 tracking-tight">${(item.price * item.qty).toFixed(2)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Summary in Table Footer */}
            <div className="bg-slate-50/50 px-8 py-8 border-t border-slate-100">
              <div className="flex justify-end">
                <div className="w-full max-w-xs space-y-3">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span>Subtotal</span>
                    <span className="text-slate-900">${ORDER_DATA.summary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span>Shipping</span>
                    <span className="text-slate-900">${ORDER_DATA.summary.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span>Tax</span>
                    <span className="text-slate-900">${ORDER_DATA.summary.tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex justify-between items-end">
                    <span className="text-lg font-black uppercase italic tracking-tight">Total</span>
                    <span className="text-3xl font-black text-primary tracking-tighter">${ORDER_DATA.summary.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline / Activity */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tight">Deployment Timeline</h3>
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
              {[
                { status: "Delivered", date: "March 26, 2026", time: "14:32 PM", desc: "Package delivered to front door.", active: true },
                { status: "Out for Delivery", date: "March 26, 2026", time: "09:15 AM", desc: "Elite Express courier is in transit." },
                { status: "Arrived at Facility", date: "March 25, 2026", time: "22:40 PM", desc: "New York Distribution Hub." },
                { status: "Order Processed", date: "March 24, 2026", time: "15:10 PM", desc: "Payment verified and items packed." },
              ].map((event, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 z-10 shadow-sm",
                    i === 0 ? "bg-emerald-500 text-white" : "bg-white border border-slate-100 text-slate-400"
                  )}>
                    {i === 0 ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <p className={cn("font-black uppercase tracking-tight italic", i === 0 ? "text-slate-900" : "text-slate-500")}>{event.status}</p>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{event.date} • {event.time}</span>
                    </div>
                    <p className="text-sm text-slate-500">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Customer & Logistics */}
        <div className="lg:col-span-4 space-y-8">
          {/* Customer Info */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Package className="w-5 h-5" />
              <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tight">Customer Profile</h3>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-200 border-2 border-white shadow-sm">
                <img src="https://picsum.photos/seed/customer1/200/200" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase tracking-tight italic">{ORDER_DATA.customer.name}</h4>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Elite Member</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-bold text-slate-900">{ORDER_DATA.customer.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</p>
                  <p className="text-sm font-bold text-slate-900">{ORDER_DATA.customer.phone}</p>
                </div>
              </div>
            </div>
            <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              View Full Profile <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          {/* Logistics Info */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Truck className="w-5 h-5" />
              <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tight">Logistics</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Shipping Address</p>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-slate-300 shrink-0" />
                  <div className="text-sm font-bold text-slate-900 leading-relaxed">
                    {ORDER_DATA.shipping.address}<br />
                    {ORDER_DATA.shipping.city}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tracking Number</p>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xs font-black text-slate-900 tracking-widest">{ORDER_DATA.shipping.tracking}</span>
                  <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Track</button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <CreditCard className="w-5 h-5" />
              <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tight">Payment</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 bg-slate-100 rounded border border-slate-200"></div>
                  <p className="text-sm font-bold text-slate-900">{ORDER_DATA.payment.method}</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  {ORDER_DATA.payment.status}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction ID</p>
                <p className="text-xs font-bold text-slate-900">{ORDER_DATA.payment.transactionId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
