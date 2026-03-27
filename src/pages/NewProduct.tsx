import React, { useState } from "react";
import { 
  Upload, 
  X, 
  Plus, 
  ChevronRight, 
  Save, 
  Eye, 
  Trash2, 
  Info,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { cn } from "../lib/utils";

export default function NewProduct() {
  const [step, setStep] = useState(1);
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImages([...images, event.target.result as string]);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-1">Inventory Management</p>
          <h2 className="text-4xl font-black italic tracking-tighter text-on-surface uppercase">Add New Product</h2>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-lowest border border-outline-variant/20 px-6 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-surface-container-low transition-colors flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button className="premium-gradient text-white px-8 py-2 rounded-lg text-sm font-bold shadow-md flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Draft
          </button>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 shadow-sm">
        {[
          { step: 1, label: "Basic Info" },
          { step: 2, label: "Media & Specs" },
          { step: 3, label: "Pricing & Stock" },
          { step: 4, label: "Review" },
        ].map((s, i) => (
          <React.Fragment key={s.step}>
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all",
                step === s.step ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : 
                step > s.step ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"
              )}>
                {step > s.step ? <CheckCircle2 className="w-5 h-5" /> : s.step}
              </div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest whitespace-nowrap",
                step === s.step ? "text-on-surface" : "text-slate-400"
              )}>
                {s.label}
              </span>
            </div>
            {i < 3 && <div className="flex-1 h-px bg-slate-100 mx-2"></div>}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm space-y-6">
            <h3 className="text-xl font-bold italic tracking-tighter uppercase border-b border-slate-100 pb-4">General Information</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                    Product Name <span className="text-primary">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Apex Runner 2.0" 
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Category <span className="text-primary">*</span>
                  </label>
                  <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all">
                    <option>Footwear</option>
                    <option>Apparel</option>
                    <option>Accessories</option>
                    <option>Equipment</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Description
                </label>
                <textarea 
                  rows={4}
                  placeholder="Describe the elite performance features..." 
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Brand</label>
                  <input type="text" placeholder="Cohen Sport" className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">SKU</label>
                  <input type="text" placeholder="CS-APEX-001" className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Collection</label>
                  <input type="text" placeholder="Summer 2024" className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm space-y-6">
            <h3 className="text-xl font-bold italic tracking-tighter uppercase border-b border-slate-100 pb-4">Product Media</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                  <img src={img} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => removeImage(i)}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <label className="aspect-square rounded-lg border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">Add Image</span>
                <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg flex gap-3">
              <Info className="w-5 h-5 text-blue-500 shrink-0" />
              <p className="text-xs text-blue-700 leading-relaxed">
                <span className="font-bold uppercase tracking-tighter">Pro Tip:</span> High-resolution images (2000x2000px) on a clean background perform 40% better in elite performance categories.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm space-y-6">
            <h4 className="text-lg font-bold italic tracking-tighter uppercase">Visibility</h4>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-bold">Published</span>
                </div>
                <input type="radio" name="visibility" className="text-primary focus:ring-primary" defaultChecked />
              </label>
              <label className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-sm font-bold">Scheduled</span>
                </div>
                <input type="radio" name="visibility" className="text-primary focus:ring-primary" />
              </label>
              <label className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <span className="text-sm font-bold">Hidden</span>
                </div>
                <input type="radio" name="visibility" className="text-primary focus:ring-primary" />
              </label>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm space-y-4">
            <h4 className="text-lg font-bold italic tracking-tighter uppercase">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {["Running", "Elite", "Pro", "Summer", "Lightweight"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 rounded text-[10px] font-bold uppercase tracking-widest text-slate-600 flex items-center gap-2">
                  {tag}
                  <button className="hover:text-primary"><X className="w-3 h-3" /></button>
                </span>
              ))}
              <button className="px-3 py-1 border border-dashed border-slate-300 rounded text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:border-primary hover:text-primary transition-all">
                + Add Tag
              </button>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <AlertCircle className="w-5 h-5" />
              <h4 className="text-sm font-bold uppercase tracking-widest">Quality Check</h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                Missing price information
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                No stock units defined
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                Description is too short
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-slate-200">
        <button className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-on-surface transition-colors">
          Discard Changes
        </button>
        <div className="flex gap-4">
          <button 
            disabled={step === 1}
            onClick={() => setStep(s => s - 1)}
            className="px-8 py-3 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-all"
          >
            Back
          </button>
          <button 
            onClick={() => setStep(s => s < 4 ? s + 1 : s)}
            className="premium-gradient text-white px-12 py-3 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all"
          >
            {step === 4 ? "Complete Upload" : "Next Step"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
