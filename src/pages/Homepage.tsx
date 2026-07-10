import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  BrainCircuit, 
  Database, 
  Tags, 
  Building2,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';

export default function Homepage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* HEADER */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-0' : 'bg-[#17a190] border-transparent py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              {/* Fallback to text if logo.png fails to load */}
              <div className="flex items-center gap-2">
                <img src={logo} alt="Kite Consulting Logo" className={`h-12 w-12 object-contain transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`} onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className={`text-3xl font-medium tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>Kite Consulting</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#Home" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-teal-600' : 'text-teal-50 hover:text-white'}`}>Home</a>
              <a href="#about" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-teal-600' : 'text-teal-50 hover:text-white'}`}>About</a>
              <a href="#projects" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-teal-600' : 'text-teal-50 hover:text-white'}`}>Projects</a>
              <a href="#contact" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-teal-600' : 'text-teal-50 hover:text-white'}`}>Contact Us</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${isScrolled ? 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white shadow-[0_0_15px_rgba(20,184,166,0.5)]' : 'bg-white text-[#17a190] hover:bg-slate-50 shadow-[0_0_15px_rgba(255,255,255,0.3)]'}`}>
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden min-h-[600px] flex items-center justify-center bg-[#17a190]">
        
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
            <path d="M-100,650 C300,650 500,400 800,400 C1100,400 1300,200 1800,100" fill="none" stroke="url(#trendGradient)" strokeWidth="6" className="animated-path" />
            <path d="M-100,200 C300,350 600,200 900,350 C1200,500 1400,150 1800,250" fill="none" stroke="url(#glowGradient)" strokeWidth="4" className="animated-path" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
            <path d="M-100,750 C300,800 700,550 1000,700 C1300,850 1500,500 1800,650" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.3" className="animated-path" style={{ animationDuration: '30s' }} />
            <path d="M-100,100 C400,-50 800,250 1200,100 C1500,0 1600,300 1800,200" fill="none" stroke="#ffffff" strokeWidth="5" opacity="0.2" className="animated-path" style={{ animationDirection: 'reverse', animationDuration: '35s' }} />

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
            <button className="group relative inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-[#17a190] px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-[0_0_30px_rgba(31,157,149,0.3)] hover:shadow-[0_0_40px_rgba(31,157,149,0.5)] hover:-translate-y-0.5 overflow-hidden">
              <span className="relative z-10">About us</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Custom Wave Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none transform translate-y-[1px]">
          <svg className="relative block w-full h-[60px] md:h-[120px] lg:h-[160px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <defs>
              <style>
                {`
                  @keyframes wave1 {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  @keyframes wave2 {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                  }
                `}
              </style>
            </defs>
            <path fill="#f8fafc" fillOpacity="0.3" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,165.3C672,171,768,149,864,128C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fill="#f8fafc" fillOpacity="0.5" d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fill="#f8fafc" fillOpacity="0.7" d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,197.3C672,192,768,160,864,149.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fill="#f8fafc" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,160C672,171,768,213,864,218.7C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-28 bg-slate-50/50 relative" id="services">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* New Header Area */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <motion.h2 
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight"
            >
              A variety of services offered
            </motion.h2>
            <motion.p 
              variants={fadeUpVariant}
              className="text-lg text-slate-600 font-light leading-relaxed"
            >
              extensive and variation of experience by our founding partners makes it so that Kite is your go to for your business consulting needs.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <motion.div variants={fadeUpVariant} className="group bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-teal-500 transition-colors duration-300">
                  <TrendingUp className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Data & Predictive Analytics</h3>
                <p className="text-slate-500 leading-relaxed font-light">Leverage advanced algorithms to forecast trends and optimize outcomes.</p>
              </motion.div>

              {/* Service Card 2 */}
              <motion.div variants={fadeUpVariant} className="group bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-teal-500 transition-colors duration-300">
                  <BrainCircuit className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">AI, Machine Learning</h3>
                <p className="text-slate-500 leading-relaxed font-light">Develop smart systems that learn and adapt from data for automation.</p>
              </motion.div>

              {/* Service Card 3 */}
              <motion.div variants={fadeUpVariant} className="group bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-teal-500 transition-colors duration-300">
                  <Database className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Data Engineering</h3>
                <p className="text-slate-500 leading-relaxed font-light">Build and maintain scalable data architecture and storage.</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
              {/* Service Card 4 */}
              <motion.div variants={fadeUpVariant} className="group bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-teal-500 transition-colors duration-300">
                  <Tags className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Revenue & Pricing Analytics</h3>
                <p className="text-slate-500 leading-relaxed font-light">Analyze market data to set optimal prices and maximize profit.</p>
              </motion.div>

              {/* Service Card 5 */}
              <motion.div variants={fadeUpVariant} className="group bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-teal-500 transition-colors duration-300">
                  <Building2 className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Enterprise Business Solutions</h3>
                <p className="text-slate-500 leading-relaxed font-light">Integrated, scalable software systems to streamline operations.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="py-24 relative overflow-hidden" id="tech-stack">
        {/* Decorative background elements */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeUpVariant}
              className="text-3xl md:text-4xl font-serif mb-4 text-slate-900 tracking-tight"
            >
              Our Technical Stack Capability
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-slate-500 font-light">
              Powered by industry-leading technologies and frameworks
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 md:gap-6 items-center max-w-5xl mx-auto"
          >
            {[
              "Python", "PostgreSQL", "PyTorch", "TensorFlow", "Docker",
              "Kubernetes", "Git", "AWS", "Tableau", "Postman",
              "dbt", "Apache Airflow", "PySpark", "Jira", "Slack"
            ].map((tech) => (
              <motion.div 
                key={tech} 
                variants={fadeUpVariant}
                className="px-6 py-3 bg-white border border-slate-100 shadow-sm rounded-full text-slate-600 font-medium hover:text-teal-600 hover:border-teal-100 hover:shadow-md hover:shadow-teal-500/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1f24] text-slate-300 pt-16 pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            {/* Footer Left */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Kite LLC Logo" className="h-10 w-10 brightness-0 invert opacity-90" onError={(e) => e.currentTarget.style.display = 'none'} />
                <div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide">kiteLLC</h3>
                  <p className="text-sm text-slate-400 mt-1">Innovate. Connect. Secure.</p>
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Right */}
            <div className="flex gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <span className="text-slate-600">|</span>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <span className="text-slate-600">|</span>
              <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Glow Line & Bottom Bar */}
          <div className="relative pt-6 mt-8">
            {/* Glow effect */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
              <p>© 2024 kiteLLC. All rights reserved.</p>
              <div className="flex gap-3 mt-4 md:mt-0">
                <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                <span>|</span>
                <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
