import { ArrowRight, Database, TrendingUp, BrainCircuit, Building2, CircleDollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Homepage() {
  const navigate = useNavigate();
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const techLogos = [
    { name: "Python",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",             fallback: "", w: 224, h: 96, showLabel: false, showSize: false },
    { name: "PyTorch",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original-wordmark.svg",           fallback: "", w: 224, h: 96, showLabel: false, showSize: false },
    { name: "TensorFlow",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg",     fallback: "", w: 224, h: 96, showLabel: false, showSize: false },
    { name: "PySpark",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original-wordmark.svg",   fallback: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apachespark.svg", w: 224, h: 96, showLabel: true,  showSize: false },
    { name: "Docker",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",             fallback: "", w: 224, h: 96, showLabel: false, showSize: false },
    { name: "Kubernetes",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain-wordmark.svg",        fallback: "", w: 224, h: 96, showLabel: false, showSize: false },
    { name: "AWS",         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", fallback: "", w: 180, h: 96, showLabel: false, showSize: false },
    { name: "Git",         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",                   fallback: "", w: 224, h: 96, showLabel: false, showSize: false },
    { name: "PostgreSQL",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",     fallback: "", w: 224, h: 96, showLabel: false, showSize: false },
    { name: "dbt",         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbt/dbt-original-wordmark.svg",                   fallback: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dbt.svg", w: 140, h: 96, showLabel: false, showSize: false },
    { name: "Airflow",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original-wordmark.svg", fallback: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apacheairflow.svg", w: 224, h: 96, showLabel: true,  showSize: false },
    { name: "Tableau",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tableau/tableau-original-wordmark.svg",           fallback: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tableau.svg", w: 224, h: 96, showLabel: false, showSize: false },
    { name: "Jira",        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg",                 fallback: "", w: 180, h: 96, showLabel: false, showSize: false },
    { name: "Slack",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original-wordmark.svg",               fallback: "", w: 224, h: 96, showLabel: false, showSize: false },
    { name: "Postman",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg",           fallback: "", w: 224, h: 96, showLabel: false, showSize: false },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />

      {/* HERO SECTION */}
      <section id="Home" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden min-h-[730px] flex items-center justify-center bg-[#17a190]">
        
        {/* Custom Consulting / Strategy Abstract Background */}
        <div className="absolute inset-0 opacity-60 pointer-events-none flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full min-w-[1200px]" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>
                {`
                  @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                  }
                  @keyframes pulse {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.3); }
                  }
                  @keyframes flow {
                    from { stroke-dashoffset: 2000; }
                    to { stroke-dashoffset: 0; }
                  }
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  @keyframes spinReverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                  }
                  .animated-path {
                    stroke-dasharray: 2000;
                    animation: flow 20s linear infinite;
                  }
                  .floating-group {
                    animation: float 8s ease-in-out infinite;
                  }
                  .floating-group-delayed {
                    animation: float 10s ease-in-out infinite 3s;
                  }
                  .node-pulse {
                    animation: pulse 4s ease-in-out infinite;
                  }
                  .node-pulse-delayed {
                    animation: pulse 5s ease-in-out infinite 2s;
                  }
                  .spinning-target {
                    animation: spin 25s linear infinite;
                  }
                  .spinning-target-reverse {
                    animation: spinReverse 35s linear infinite;
                  }
                `}
              </style>
              <linearGradient id="trendGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Subtle Grid for structure/data */}
            <g stroke="#ffffff" strokeWidth="2" opacity="0.15">
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </g>

            {/* Animated Growth / Trend Curves covering full height/width */}
            <path d="M-100,650 C300,650 500,400 800,400 C1100,400 1300,200 1800,100" fill="none" stroke="url(#trendGradient)" strokeWidth="2" className="animated-path" />
            {/* Network / Strategic Connections with Floating Animation */}
            <g stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.85">
              
              {/* Cluster 1: Top Left */}
              <g className="floating-group">
                <path d="M150,250 L280,150 L350,280 Z" fill="#ffffff" fillOpacity="0.05" />
                <path d="M280,150 L400,120 L350,280" />
                <circle cx="150" cy="250" r="7" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '150px 250px' }} />
                <circle cx="280" cy="150" r="8" fill="#ffffff" className="node-pulse-delayed" style={{ transformOrigin: '280px 150px' }} />
                <circle cx="350" cy="280" r="6" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '350px 280px' }} />
                <circle cx="400" cy="120" r="5" fill="#ffffff" />
              </g>

              {/* Cluster 2: Bottom Left */}
              <g className="floating-group-delayed">
                <path d="M200,600 L350,550 L300,700 Z" fill="#ffffff" fillOpacity="0.05" />
                <circle cx="200" cy="600" r="6" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '200px 600px' }} />
                <circle cx="350" cy="550" r="9" fill="#ffffff" className="node-pulse-delayed" style={{ transformOrigin: '350px 550px' }} />
                <circle cx="300" cy="700" r="7" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '300px 700px' }} />
                <g style={{ transformOrigin: '350px 550px' }} className="spinning-target">
                  <circle cx="350" cy="550" r="24" strokeDasharray="6 8" opacity="0.6" strokeWidth="2.5" />
                </g>
              </g>
              
              {/* Cluster 3: Center Top */}
              <g className="floating-group">
                <path d="M700,200 L850,120 L950,250 L800,300 Z" fill="#ffffff" fillOpacity="0.05" />
                <path d="M700,200 L800,300 L600,280 Z" />
                <circle cx="700" cy="200" r="7" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '700px 200px' }} />
                <circle cx="850" cy="120" r="10" fill="#ffffff" className="node-pulse-delayed" style={{ transformOrigin: '850px 120px' }} />
                <circle cx="950" cy="250" r="6" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '950px 250px' }} />
                <circle cx="800" cy="300" r="7" fill="#ffffff" className="node-pulse-delayed" style={{ transformOrigin: '800px 300px' }} />
                <circle cx="600" cy="280" r="5" fill="#ffffff" />
                <g style={{ transformOrigin: '850px 120px' }} className="spinning-target-reverse">
                  <circle cx="850" cy="120" r="28" strokeDasharray="8 6" opacity="0.7" strokeWidth="3" />
                  <circle cx="850" cy="120" r="42" strokeDasharray="4 12" opacity="0.4" strokeWidth="3" />
                </g>
              </g>

              {/* Cluster 4: Center Bottom */}
              <g className="floating-group-delayed">
                <path d="M650,650 L800,550 L900,700 Z" fill="#ffffff" fillOpacity="0.04" />
                <path d="M800,550 L1000,500 L900,700" />
                <circle cx="650" cy="650" r="6" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '650px 650px' }} />
                <circle cx="800" cy="550" r="8" fill="#ffffff" className="node-pulse-delayed" style={{ transformOrigin: '800px 550px' }} />
                <circle cx="900" cy="700" r="7" fill="#ffffff" />
                <circle cx="1000" cy="500" r="6" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '1000px 500px' }} />
              </g>

              {/* Cluster 5: Top Right */}
              <g className="floating-group-delayed">
                <path d="M1200,200 L1350,150 L1400,300 Z" fill="#ffffff" fillOpacity="0.05" />
                <path d="M1350,150 L1500,100 L1400,300" />
                <circle cx="1200" cy="200" r="6" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '1200px 200px' }} />
                <circle cx="1350" cy="150" r="9" fill="#ffffff" className="node-pulse-delayed" style={{ transformOrigin: '1350px 150px' }} />
                <circle cx="1400" cy="300" r="7" fill="#ffffff" />
                <circle cx="1500" cy="100" r="6" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '1500px 100px' }} />
              </g>

              {/* Cluster 6: Bottom Right */}
              <g className="floating-group">
                <path d="M1250,600 L1400,500 L1550,650 L1350,750 Z" fill="#ffffff" fillOpacity="0.04" />
                <circle cx="1250" cy="600" r="7" fill="#ffffff" className="node-pulse-delayed" style={{ transformOrigin: '1250px 600px' }} />
                <circle cx="1400" cy="500" r="10" fill="#ffffff" className="node-pulse" style={{ transformOrigin: '1400px 500px' }} />
                <circle cx="1550" cy="650" r="6" fill="#ffffff" className="node-pulse-delayed" style={{ transformOrigin: '1550px 650px' }} />
                <circle cx="1350" cy="750" r="8" fill="#ffffff" />
                <g style={{ transformOrigin: '1400px 500px' }} className="spinning-target">
                  <circle cx="1400" cy="500" r="26" strokeDasharray="5 8" opacity="0.6" strokeWidth="2.5" />
                  <circle cx="1400" cy="500" r="40" strokeDasharray="2 12" opacity="0.3" strokeWidth="3" />
                </g>
              </g>

            </g>
          </svg>
        </div>
        
        {/* Subtle radial gradient overlay to soften edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#17a190_80%)] pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.h1 
            variants={fadeUpVariant}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.15] tracking-tight mb-8"
          >
            A company committed to<br />
            successful execution of strategic<br />
            business solutions
          </motion.h1>
          <motion.p 
            variants={fadeUpVariant}
            className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            through deep understanding of context, stakeholder needs and<br className="hidden md:block" />
            infrastructure capabilities
          </motion.p>
          <motion.div variants={fadeUpVariant}>
            <button onClick={() => navigate('/about')} className="group relative inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-[#17a190] px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-[0_0_30px_rgba(31,157,149,0.3)] hover:shadow-[0_0_40px_rgba(31,157,149,0.5)] hover:-translate-y-0.5 overflow-hidden cursor-pointer">
              <span className="relative z-10">About us</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Custom Wave Shape Divider - Premium Design */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none transform translate-y-[1px]">
          <svg className="relative block w-full h-[60px] md:h-[120px] lg:h-[160px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d1fae5" stopOpacity="0.25" />
                <stop offset="35%" stopColor="#ccf0ee" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#a7f3d0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#99e6dd" stopOpacity="0.15" />
                <stop offset="40%" stopColor="#a7f3d0" stopOpacity="0.35" />
                <stop offset="75%" stopColor="#d1fae5" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.2" />
                <stop offset="45%" stopColor="#b3f5e8" stopOpacity="0.4" />
                <stop offset="80%" stopColor="#c7f0d8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="waveGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f0fdfa" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#f0fdfa" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
              <filter id="waveShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                <feOffset dx="0" dy="1" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.08"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Layer 1 - Subtle light teal */}
            <path fill="url(#waveGrad1)" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,165.3C672,171,768,149,864,128C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            
            {/* Layer 2 - Mid-tone emerald */}
            <path fill="url(#waveGrad2)" d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            
            {/* Layer 3 - Accent teal depth */}
            <path fill="url(#waveGrad3)" d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,197.3C672,192,768,160,864,149.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            
            {/* Layer 4 - Crisp white transition */}
            <path fill="url(#waveGrad4)" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,160C672,171,768,213,864,218.7C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white" id="services">
        {/* Decorative background orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.2] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-4 mb-7">
              <span className="h-px w-10 bg-teal-400/60" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal-600">What We Offer</span>
              <span className="h-px w-10 bg-teal-400/60" />
            </motion.div>
            <motion.h2 
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold text-slate-900 tracking-tight leading-[1.1]"
            >
              A variety of
              <br className="sm:hidden" />
              <span className="text-teal-600"> services</span>
            </motion.h2>
            <motion.p 
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed mt-6"
            >
              Extensive experience by our founding partners makes Kite your go-to for business consulting needs.
            </motion.p>
          </motion.div>
          
          {/* Service Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            {/* Top Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 - Data & Predictive Analytics */}
              <motion.div variants={fadeUpVariant} className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)] hover:border-teal-100 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/0 via-transparent to-transparent group-hover:from-teal-50/40 transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-teal-50 border border-teal-200/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                    <TrendingUp className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 tracking-tight">Data & Predictive Analytics</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">Leverage advanced algorithms to forecast trends and optimize outcomes.</p>
                </div>
              </motion.div>

              {/* Card 2 - AI & Machine Learning */}
              <motion.div variants={fadeUpVariant} className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)] hover:border-teal-100 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/0 via-transparent to-transparent group-hover:from-teal-50/40 transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-teal-50 border border-teal-200/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                    <BrainCircuit className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 tracking-tight">AI, Machine Learning</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">Develop smart systems that learn and adapt from data for automation.</p>
                </div>
              </motion.div>

              {/* Card 3 - Data Engineering */}
              <motion.div variants={fadeUpVariant} className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)] hover:border-teal-100 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/0 via-transparent to-transparent group-hover:from-teal-50/40 transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-teal-50 border border-teal-200/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                    <Database className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 tracking-tight">Data Engineering</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">Build and maintain scalable data architecture and storage.</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row - 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
              {/* Card 4 - Enterprise Business Solutions */}
              <motion.div variants={fadeUpVariant} className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)] hover:border-teal-100 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/0 via-transparent to-transparent group-hover:from-teal-50/40 transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-teal-50 border border-teal-200/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                    <Building2 className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 tracking-tight">Enterprise Business Solutions</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">Integrated, scalable software systems to streamline operations.</p>
                </div>
              </motion.div>

              {/* Card 5 - Revenue & Pricing Analytics */}
              <motion.div variants={fadeUpVariant} className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)] hover:border-teal-100 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/0 via-transparent to-transparent group-hover:from-teal-50/40 transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-teal-50 border border-teal-200/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                    <CircleDollarSign className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 tracking-tight">Revenue & Pricing Analytics</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">Analyze market data to set optimal prices and maximize profit.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/30" id="tech-stack">
        {/* Decorative background orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/20 rounded-full blur-[150px] pointer-events-none" />

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.25] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div 
              variants={fadeUpVariant} 
              className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/80 backdrop-blur-sm border border-teal-200/60 rounded-full text-teal-600 text-[13px] font-medium mb-8 shadow-[0_2px_12px_rgba(20,184,166,0.08)] hover:shadow-[0_4px_20px_rgba(20,184,166,0.15)] hover:border-teal-300/80 transition-all duration-300"
            >
              <Database className="w-4 h-4" strokeWidth={1.5} />
              Technology Stack
            </motion.div>
            <motion.h2 
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-5 text-slate-900 tracking-tight leading-[1.15]"
            >
              Powered by<br className="sm:hidden" /> industry leaders
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-base sm:text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and frameworks to deliver enterprise-grade solutions
            </motion.p>
          </motion.div>

          {/* Scrolling Tech Stack Row */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="w-full overflow-hidden relative mt-8"
          >
            {/* Gradient overlays for smooth fading edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 md:w-40 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 md:w-40 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee py-8">
              {/* First set */}
              <div className="flex items-center px-40" style={{ gap: '24px' }}>
                {techLogos.map((tech, i) => (
                  <div key={`a-${i}`} className="group flex-shrink-0 flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center" style={{ width: tech.w, height: tech.h }}>
                      <img 
                        src={tech.url} 
                        alt={tech.name}
                        width={tech.w}
                        height={tech.h}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
                        onError={(e) => { 
                          const img = e.currentTarget;
                          if (tech.fallback && img.src !== tech.fallback) {
                            img.src = tech.fallback;
                          } else {
                            img.style.display = 'none';
                          }
                        }}
                      />
                    </div>
                    {tech.showLabel && (
                      <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors duration-300">{tech.name}</span>
                    )}
                    {tech.showSize && (
                      <span className="text-[10px] font-mono text-slate-300 group-hover:text-slate-400 transition-colors duration-300">{tech.w}×{tech.h}</span>
                    )}
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center px-40" style={{ gap: '24px' }}>
                {techLogos.map((tech, i) => (
                  <div key={`b-${i}`} className="group flex-shrink-0 flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center" style={{ width: tech.w, height: tech.h }}>
                      <img 
                        src={tech.url} 
                        alt={tech.name}
                        width={tech.w}
                        height={tech.h}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
                        onError={(e) => { 
                          const img = e.currentTarget;
                          if (tech.fallback && img.src !== tech.fallback) {
                            img.src = tech.fallback;
                          } else {
                            img.style.display = 'none';
                          }
                        }}
                      />
                    </div>
                    {tech.showLabel && (
                      <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors duration-300">{tech.name}</span>
                    )}
                    {tech.showSize && (
                      <span className="text-[10px] font-mono text-slate-300 group-hover:text-slate-400 transition-colors duration-300">{tech.w}×{tech.h}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
