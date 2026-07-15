import { motion } from 'framer-motion';
import imgMentor from '../assets/images/Mentor.png';
import imgBits from '../assets/images/Bits.png';
import imgNovaCon from '../assets/images/NovaCon.png';
import {
  Building2,
  MapPin,
  Handshake,
  Lightbulb,
  Database,
  LineChart,
  Network,
  Users,
  TrendingUp,
  Tags,
  RefreshCw,
  Puzzle,
  FlaskConical
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imgHana from '../assets/images/Hana.png';
import imgTehut from '../assets/images/Tehut.png';
import imgTibebu from '../assets/images/Tibebu.png';
import imgElshadyai from '../assets/images/Elshadyai.png';

export default function About() {
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

  const partners = [
    {
      name: "Ms. Hana Gebeyehu",
      role: "Digital Public Infrastructure & Enterprise Business Solutions",
      color: "teal",
      gradient: "from-teal-500 to-emerald-500",
      ring: "ring-teal-400",
      ringHover: "group-hover:ring-teal-500",
      shadow: "group-hover:shadow-teal-500/15",
      glow: "shadow-teal-500/25",
      text: "text-teal-600",
      image: imgHana
    },
    {
      name: "Ms. Tehut Tesfaye",
      role: "Business Analytics & Pricing Strategy",
      color: "indigo",
      gradient: "from-indigo-500 to-violet-500",
      ring: "ring-indigo-400",
      ringHover: "group-hover:ring-indigo-500",
      shadow: "group-hover:shadow-indigo-500/15",
      glow: "shadow-indigo-500/25",
      text: "text-indigo-600",
      image: imgTehut
    },
    {
      name: "Mr. Tibebu Tesfaye",
      role: "AI, Machine Learning & Data Engineering",
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      ring: "ring-amber-400",
      ringHover: "group-hover:ring-amber-500",
      shadow: "group-hover:shadow-amber-500/15",
      glow: "shadow-amber-500/25",
      text: "text-amber-600",
      image: imgTibebu
    },
    {
      name: "Ms. Elshadai Tesfaye",
      role: "Software Engineering & Human Operations",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      ring: "ring-purple-400",
      ringHover: "group-hover:ring-purple-500",
      shadow: "group-hover:shadow-purple-500/15",
      glow: "shadow-purple-500/25",
      text: "text-purple-600",
      image: imgElshadyai
    }
  ];

  const pillars = [
    { icon: <Database className="w-7 h-7" strokeWidth={1.5} />, label: "Data-driven Solutions" },
    { icon: <LineChart className="w-7 h-7" strokeWidth={1.5} />, label: "Pricing Strategy & Revenue Management" },
    { icon: <Network className="w-7 h-7" strokeWidth={1.5} />, label: "Enterprise Business Solutions" }
  ];

  const focusAreas = [
    {
      title: "Enterprise Business Solutions",
      icon: <Building2 className="w-7 h-7" strokeWidth={1.5} />,
      color: "emerald",
      items: [
        { name: "Digital Public Infrastructure", desc: "Software & Web Development — Designing and Coding Applications, Systems, Databases, and Web Pages." },
        { name: "IT Infrastructure Management & Digitization", desc: "Operating and Managing Physical Computer Systems and Data Processing Facilities." },
        { name: "On-Site Technical Support", desc: "Providing Direct System Administration and Ongoing Operational Assistance." },
        { name: "Supply Chain & Logistics", desc: "Designing and Executing Tracking Software and Other Systems." }
      ]
    },
    {
      title: "Data & Predictive Analytics",
      icon: <TrendingUp className="w-7 h-7" strokeWidth={1.5} />,
      color: "teal",
      items: [
        { name: "Advanced Analytics", desc: "AI & Machine Learning, Data Mining, Business Intelligence, Dashboarding, and Business Reviews." }
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-7 h-7" strokeWidth={1.5} />,
      color: "amber",
      items: [
        { name: "Data Architecture", desc: "Data Warehousing and Data Architecture Management." }
      ]
    },
    {
      title: "Revenue & Pricing Analytics",
      icon: <Tags className="w-7 h-7" strokeWidth={1.5} />,
      color: "purple",
      items: [
        { name: "Profit Optimization", desc: "Profit Maximization, Promotional Strategies and Performance." }
      ]
    }
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; hoverBg: string; hoverBorder: string; from: string; from50_0: string; from50_30: string; barFrom: string; barTo: string }> = {
    teal:    { bg: 'bg-teal-50',    border: 'border-teal-200/50',    text: 'text-teal-600',    hoverBg: 'group-hover:bg-teal-500',    hoverBorder: 'group-hover:border-teal-500',    from: 'from-teal-50',    from50_0: 'from-teal-50/0',    from50_30: 'from-teal-50/30',    barFrom: 'from-teal-400',    barTo: 'to-emerald-400' },
    indigo:  { bg: 'bg-indigo-50',  border: 'border-indigo-200/50',  text: 'text-indigo-600',  hoverBg: 'group-hover:bg-indigo-500',  hoverBorder: 'group-hover:border-indigo-500',  from: 'from-indigo-50',  from50_0: 'from-indigo-50/0',  from50_30: 'from-indigo-50/30',  barFrom: 'from-indigo-400',  barTo: 'to-violet-400' },
    amber:   { bg: 'bg-amber-50',   border: 'border-amber-200/50',   text: 'text-amber-600',   hoverBg: 'group-hover:bg-amber-500',   hoverBorder: 'group-hover:border-amber-500',   from: 'from-amber-50',   from50_0: 'from-amber-50/0',   from50_30: 'from-amber-50/30',   barFrom: 'from-amber-400',   barTo: 'to-orange-400' },
    purple:  { bg: 'bg-purple-50',  border: 'border-purple-200/50',  text: 'text-purple-600',  hoverBg: 'group-hover:bg-purple-500',  hoverBorder: 'group-hover:border-purple-500',  from: 'from-purple-50',  from50_0: 'from-purple-50/0',  from50_30: 'from-purple-50/30',  barFrom: 'from-purple-400',  barTo: 'to-pink-400' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200/50', text: 'text-emerald-600', hoverBg: 'group-hover:bg-emerald-500', hoverBorder: 'group-hover:border-emerald-500', from: 'from-emerald-50', from50_0: 'from-emerald-50/0', from50_30: 'from-emerald-50/30', barFrom: 'from-emerald-400', barTo: 'to-teal-400' },
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
            About Kite Consulting
          </motion.h1>
          <motion.p 
            variants={fadeUpVariant}
            className="text-lg md:text-xl text-teal-50/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Integrated Thinking · Process Excellence · Business Value Acceleration
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none translate-y-[1px]">
          <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,165.3C672,171,768,149,864,128C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.15] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div variants={fadeUpVariant} className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-7">
                <span className="h-px w-10 bg-teal-400/60" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal-600">Company Overview</span>
                <span className="h-px w-10 bg-teal-400/60" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
                Who <span className="text-teal-600">we are</span>
              </h2>
            </motion.div>

            {/* Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
              {/* Left - Company Details */}
              <motion.div variants={fadeUpVariant} className="space-y-6">
                {[
                  { icon: <Building2 className="w-6 h-6" strokeWidth={1.5} />, title: "Registered Entity", text: "Registered as a private limited company in 2023", color: "teal" },
                  { icon: <MapPin className="w-6 h-6" strokeWidth={1.5} />, title: "Global Headquarters", text: "Headquartered in Sharjah, United Arab Emirates", color: "indigo" },
                  { icon: <Handshake className="w-6 h-6" strokeWidth={1.5} />, title: "Our Commitment", text: "Partnering to innovate, co-creating to transform and delivering lasting value.", color: "amber" },
                  { icon: <Lightbulb className="w-6 h-6" strokeWidth={1.5} />, title: "Our Mission", text: "Providing technology-enabled & data-driven business solutions and services.", color: "purple" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="group flex gap-5">
                    <div className={`mt-0.5 flex-shrink-0 w-12 h-12 ${colorClasses[item.color].bg} ${colorClasses[item.color].border} rounded-full flex items-center justify-center ${colorClasses[item.color].hoverBg} ${colorClasses[item.color].hoverBorder} group-hover:shadow-lg transition-all duration-300`}>
                      <span className={`${colorClasses[item.color].text} group-hover:text-white transition-colors duration-300`}>{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed font-light">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right - Core Pillars */}
              <motion.div variants={fadeUpVariant} className="bg-slate-50/80 p-8 md:p-10 rounded-3xl border border-slate-200/60">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-8 text-center">Core Business Pillars</h3>
                <div className="space-y-4">
                  {pillars.map((pillar, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 hover:border-teal-200/60 hover:shadow-sm transition-all duration-300 group">
                      <div className="w-12 h-12 bg-teal-50 border border-teal-200/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                        <span className="text-teal-600 group-hover:text-white transition-colors duration-300">{pillar.icon}</span>
                      </div>
                      <span className="font-medium text-slate-800 text-[15px]">{pillar.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOUNDING PARTNERS */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[120px] pointer-events-none" />
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
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal-600">Our Team</span>
                <span className="h-px w-10 bg-teal-400/60" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
                Founding Partners<br className="sm:hidden" /> <span className="text-teal-600">& Specializations</span>
              </h2>
            </motion.div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {partners.map((partner, index) => {
                const ringColor = partner.color === 'teal' ? 'group-hover:ring-teal-500' : partner.color === 'indigo' ? 'group-hover:ring-indigo-500' : partner.color === 'amber' ? 'group-hover:ring-amber-500' : 'group-hover:ring-purple-500';
                const hoverBg = partner.color === 'teal' ? 'group-hover:from-teal-50/40 group-hover:to-teal-50/10' : partner.color === 'indigo' ? 'group-hover:from-indigo-50/40 group-hover:to-indigo-50/10' : partner.color === 'amber' ? 'group-hover:from-amber-50/40 group-hover:to-amber-50/10' : 'group-hover:from-purple-50/40 group-hover:to-purple-50/10';
                return (
                <motion.div key={index} variants={fadeUpVariant} className={`group relative bg-white rounded-2xl p-8 pb-10 text-center border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${partner.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  {/* Subtle bg gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-transparent ${hoverBg} transition-all duration-500`} />
                  <div className="relative z-10">
                    {/* Avatar with colored ring */}
                    <div className="mb-6">
                      <div className={`w-36 h-36 mx-auto rounded-full ring-4 ring-slate-100 ${ringColor} group-hover:ring-offset-4 group-hover:ring-offset-white ring-offset-0 shadow-lg ${partner.glow} transition-all duration-500 overflow-hidden`}>
                        <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    {/* Name with colored accent dot */}
                    <div className="mb-3">
                      <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${partner.gradient} mr-2 align-middle mb-0.5`} />
                      <h3 className="inline text-lg font-bold text-slate-900 tracking-tight">{partner.name}</h3>
                    </div>
                    {/* Role */}
                    <p className="text-sm leading-relaxed font-light text-slate-400 group-hover:text-slate-500 transition-colors duration-500">{partner.role}</p>
                  </div>
                </motion.div>
              )})}
            </div>

            {/* Associates */}
            <motion.div variants={fadeUpVariant} className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-10 text-center">Associates</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* Mentor */}
                <div className="group flex flex-col items-center text-center px-6 py-6 md:py-0">
                  <div className="h-20 mb-5 px-4 rounded-xl group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all duration-300 flex items-center justify-center">
                    <img src={imgMentor} alt="Mentor Knowledge Solutions" className="h-full w-auto max-w-[200px] object-contain" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Mentor Knowledge Solutions</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">IT & Management Consulting Firm based in Addis Ababa</p>
                </div>

                {/* BITS College */}
                <div className="group flex flex-col items-center text-center px-6 py-6 md:py-0">
                  <div className="h-20 mb-5 px-4 rounded-xl group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300 flex items-center justify-center">
                    <img src={imgBits} alt="BITS College" className="h-full w-auto max-w-[200px] object-contain" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">BITS College</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">Higher Learning Institution Operating in Developing Technical Skills</p>
                </div>

                {/* NovaCon */}
                <div className="group flex flex-col items-center text-center px-6 py-6 md:py-0">
                  <div className="h-24  px-4 rounded-xl group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300 flex items-center justify-center">
                    <img src={imgNovaCon} alt="NovaCon" className="h-full w-auto max-w-[240px] object-contain scale-[1.2]" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">NovaCon</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">Sister Company in development based in Addis Ababa</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMPANY FOCUS */}
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
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal-600">Company Focus</span>
                <span className="h-px w-10 bg-teal-400/60" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
                What <span className="text-teal-600">we do</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left Column - Enterprise Business Solutions */}
              <motion.div 
                variants={fadeUpVariant}
                className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses[focusAreas[0].color].from50_0} via-transparent to-transparent ${colorClasses[focusAreas[0].color].from50_30.replace('from', 'group-hover:from')} transition-colors duration-500`} />
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${colorClasses[focusAreas[0].color].barFrom} ${colorClasses[focusAreas[0].color].barTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-7">
                    <div className={`w-12 h-12 ${colorClasses[focusAreas[0].color].bg} ${colorClasses[focusAreas[0].color].border} rounded-full flex items-center justify-center ${colorClasses[focusAreas[0].color].hoverBg} ${colorClasses[focusAreas[0].color].hoverBorder} group-hover:shadow-lg transition-all duration-300`}>
                      <span className={`${colorClasses[focusAreas[0].color].text} group-hover:text-white transition-colors duration-300`}>{focusAreas[0].icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 tracking-tight">{focusAreas[0].title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {focusAreas[0].items.map((item, idx) => (
                      <div key={idx} className="pl-5 border-l-2 border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
                        <h4 className="text-[15px] font-semibold text-slate-800 mb-1.5">{item.name}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Other Focus Areas Stacked */}
              <div className="flex flex-col gap-6">
                {focusAreas.slice(1).map((area, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeUpVariant}
                    className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses[area.color].from50_0} via-transparent to-transparent ${colorClasses[area.color].from50_30.replace('from', 'group-hover:from')} transition-colors duration-500`} />
                    <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${colorClasses[area.color].barFrom} ${colorClasses[area.color].barTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-7">
                        <div className={`w-12 h-12 ${colorClasses[area.color].bg} ${colorClasses[area.color].border} rounded-full flex items-center justify-center ${colorClasses[area.color].hoverBg} ${colorClasses[area.color].hoverBorder} group-hover:shadow-lg transition-all duration-300`}>
                          <span className={`${colorClasses[area.color].text} group-hover:text-white transition-colors duration-300`}>{area.icon}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 tracking-tight">{area.title}</h3>
                      </div>
                      
                      <div className="space-y-5">
                        {area.items.map((item, idx) => (
                          <div key={idx} className="pl-5 border-l-2 border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
                            <h4 className="text-[15px] font-semibold text-slate-800 mb-1.5">{item.name}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-24 relative bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div variants={fadeUpVariant} className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-7">
                <span className="h-px w-10 bg-teal-400/60" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal-600">Methodology</span>
                <span className="h-px w-10 bg-teal-400/60" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
                Collaborative<br className="sm:hidden" /> <span className="text-teal-600">Approach</span>
              </h2>
            </motion.div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left - Agile & Scrum */}
              <motion.div variants={fadeUpVariant}>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-teal-400 rounded-full" />
                  Agile & Scrum
                </h3>
                <div className="space-y-5">
                  {[
                    { icon: <RefreshCw className="w-6 h-6" strokeWidth={1.5} />, title: "Iterative Delivery", desc: "Delivering solutions incrementally through structured sprints and continuous feedback." },
                    { icon: <Users className="w-6 h-6" strokeWidth={1.5} />, title: "Collaboration", desc: "Working closely with clients and teams to ensure alignment and transparency." },
                    { icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />, title: "Continuous Improvement", desc: "Learning, adapting, and optimizing throughout the delivery lifecycle." },
                  ].map((item, i) => (
                    <div key={i} className="group flex gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex-shrink-0 w-11 h-11 bg-teal-50 border border-teal-200/50 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:shadow-md group-hover:shadow-teal-500/20 transition-all duration-300">
                        <span className="text-teal-600 group-hover:text-white transition-colors duration-300">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-[15px] font-semibold text-slate-900 mb-1.5">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Design Thinking */}
              <motion.div variants={fadeUpVariant}>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-indigo-400 rounded-full" />
                  Design Thinking
                </h3>
                <div className="space-y-5">
                  {[
                    { icon: <Lightbulb className="w-6 h-6" strokeWidth={1.5} />, title: "User-Centric Innovation", desc: "Understanding user needs to create meaningful and relevant solutions." },
                    { icon: <Puzzle className="w-6 h-6" strokeWidth={1.5} />, title: "Problem Solving", desc: "Identifying challenges and developing practical, impactful solutions." },
                    { icon: <FlaskConical className="w-6 h-6" strokeWidth={1.5} />, title: "Rapid Prototyping", desc: "Testing ideas quickly, gathering feedback, and refining outcomes." },
                  ].map((item, i) => (
                    <div key={i} className="group flex gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex-shrink-0 w-11 h-11 bg-indigo-50 border border-indigo-200/50 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-indigo-500 group-hover:border-indigo-500 group-hover:shadow-md group-hover:shadow-indigo-500/20 transition-all duration-300">
                        <span className="text-indigo-600 group-hover:text-white transition-colors duration-300">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-[15px] font-semibold text-slate-900 mb-1.5">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
