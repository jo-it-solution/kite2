import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Landmark,
  GraduationCap,
  Users,
  Database,
  Truck,
  Target,
  RefreshCw,
  BarChart3,
  ClipboardCheck,
  Lightbulb,
  Globe
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Projects() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-[#17a190]">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px]" />
        </div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold tracking-tight mb-6 leading-[1.15]"
          >
            Project Spotlight
          </motion.h1>
          <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-4 md:gap-8 text-teal-50/90 text-sm font-medium">
            <span className="px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">MKS — Mentor Knowledge Solutions</span>
            <span className="px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">BITS — Higher Learning Institution</span>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none translate-y-[1px]">
          <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,165.3C672,171,768,149,864,128C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* SECTOR PARTNERSHIPS */}
      <section className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.12] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-7">
                <span className="h-px w-10 bg-teal-400/60" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal-600">Sector Partnerships</span>
                <span className="h-px w-10 bg-teal-400/60" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
                Strategic <span className="text-teal-600">Engagements</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* eCommerce Sector */}
              <motion.div variants={fadeUpVariant} className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/0 via-transparent to-transparent group-hover:from-teal-50/30 transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Partner Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-200/50 rounded-full text-teal-700 text-xs font-medium mb-6">
                    <ShoppingCart className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Partnering with MKS
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">eCommerce Sector</h3>

                  {/* CoMee */}
                  <div className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                        <Globe className="w-5 h-5 text-teal-600" strokeWidth={1.5} />
                      </div>
                      <span className="text-lg font-bold text-slate-800">CoMee</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-light mb-5">
                      Efficiently handles the entire order lifecycle, from order creation to fulfillment, delivery, and post-sales support.
                    </p>
                    <div className="space-y-2.5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">Functions Offered</p>
                      {["Order creation and management", "Real-time tracking", "Post-sales support"].map((fn, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0" />
                          {fn}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Banking Sector */}
              <motion.div variants={fadeUpVariant} className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50/0 via-transparent to-transparent group-hover:from-indigo-50/30 transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-200/50 rounded-full text-indigo-700 text-xs font-medium mb-6">
                    <Landmark className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Partnering with BITS
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">Banking Sector</h3>

                  <div className="space-y-5">
                    {/* Training */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-indigo-600" strokeWidth={1.5} />
                        </div>
                        <span className="text-lg font-bold text-slate-800">Training</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">
                        Training and workshop on utilizing design thinking methodologies for problem solving around customer acquisition, process assessment and improvement & solution design.
                      </p>
                    </div>

                    {/* Human Operations */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                          <Users className="w-5 h-5 text-violet-600" strokeWidth={1.5} />
                        </div>
                        <span className="text-lg font-bold text-slate-800">Human Operations</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">
                        Cross-functional issue prioritization, structured team onboarding, establishing core working agreements, continuous collaboration enablement, and deploying key performance metrics to track final results.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DATA OUTSOURCING */}
      <section className="py-24 relative bg-slate-50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-7">
                <span className="h-px w-10 bg-teal-400/60" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal-600">Operations</span>
                <span className="h-px w-10 bg-teal-400/60" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
                Data <span className="text-teal-600">Outsourcing</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Main Description */}
              <div className="lg:col-span-2 group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50/0 via-transparent to-transparent group-hover:from-amber-50/30 transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-amber-50 border border-amber-200/50 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:shadow-lg transition-all duration-300">
                      <Database className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 tracking-tight">Daily Order Management</h3>
                      <p className="text-xs text-slate-400 font-medium">End-to-end data operations</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                    The data outsourcing work involves managing the daily orders of customers to meet their product needs, including creating new orders and confirming them. Along with handling request for quotations (RFQs), booking inventory, and managing product catalog and stocks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Order Creation", "RFQ Handling", "Inventory Booking", "Catalog Management", "Stock Control"].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-200/50">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Pillars */}
              <div className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/0 via-transparent to-transparent group-hover:from-teal-50/30 transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-slate-900 mb-6">Services Offered</h4>
                  <div className="space-y-4">
                    {[
                      { icon: <ClipboardCheck className="w-5 h-5" strokeWidth={1.5} />, label: "Planning" },
                      { icon: <Truck className="w-5 h-5" strokeWidth={1.5} />, label: "Transport" },
                      { icon: <Database className="w-5 h-5" strokeWidth={1.5} />, label: "Warehouse" },
                    ].map((svc, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-teal-200/60 transition-colors duration-300">
                        <div className="w-10 h-10 bg-teal-50 border border-teal-200/50 rounded-full flex items-center justify-center">
                          <span className="text-teal-600">{svc.icon}</span>
                        </div>
                        <span className="font-semibold text-slate-800 text-[15px]">{svc.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FUTURE STRATEGIC FOCUS */}
      <section className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.1] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="group relative bg-gradient-to-br from-[#17a190] to-teal-700 rounded-3xl p-10 md:p-14 text-center overflow-hidden shadow-[0_8px_40px_rgba(23,161,144,0.15)]"
          >
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <motion.div variants={fadeUpVariant} className="mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-white/15 rounded-full text-white/90 text-xs font-medium tracking-wide mb-6">
                  <Target className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Strategic Vision
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-[1.2] mb-4">
                  Future Strategic Focus
                </h2>
                <p className="text-teal-50/80 text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed">
                  Deploying Digital Public Infrastructure to modernize and empower the health, construction, banking, and education (technical training) sectors.
                </p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-3">
                {["Health", "Construction", "Banking", "Education"].map((sector, i) => (
                  <span key={i} className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors duration-300">
                    {sector}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
