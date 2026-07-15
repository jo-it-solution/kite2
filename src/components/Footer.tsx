import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#1a1f24] text-slate-300 pt-10 pb-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
          {/* Footer Left */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Kite LLC Logo" 
              width={64}
              height={64}
              className="h-16 w-16 object-contain" 
              onError={(e) => e.currentTarget.style.display = 'none'} 
            />
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-semibold text-white tracking-wide">kiteLLC</h3>
              <p className="text-xs text-slate-400 mt-0.5">Design. Strategize. Execute.</p>
              <div className="flex gap-3 mt-2">
                <a href="https://www.linkedin.com/company/kite-consulting-llc/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Right */}
          <div className="flex gap-4 text-sm font-medium text-slate-300">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <span className="text-slate-600">|</span>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>

        {/* Glow Line & Bottom Bar */}
        <div className="relative pt-4 mt-6">
          {/* Glow effect */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
          
          <div className="text-center text-xs text-slate-400 flex flex-wrap justify-center items-center gap-2 mt-2">
            <p>© 2024 kiteLLC. All rights reserved.</p>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
