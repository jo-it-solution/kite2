import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-0' : 'bg-[#17a190] border-transparent py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo (click to go to Home) */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            {/* Fallback to text if logo.png fails to load */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="Kite Consulting Logo" width={48} height={48} className={`h-12 w-12 object-contain transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`} onError={(e) => e.currentTarget.style.display = 'none'} />
              <span className={`text-3xl font-medium tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>Kite Consulting</span>
            </div>
          </Link>

          {/* Desktop Right Side: Nav + CTA */}
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation */}
            <nav className="flex items-center gap-8">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/projects', label: 'Projects' }
              ].map((link) => {
                const isActive = link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to);
                return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={`relative inline-flex items-center gap-2 px-2 py-1 group transform transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300 visited:opacity-90 active:scale-95 hover:scale-105 hover:shadow-lg ${
                    isActive
                      ? isScrolled
                        ? 'text-teal-600 font-semibold'
                        : 'text-white font-semibold'
                      : isScrolled
                        ? 'text-slate-700 hover:text-teal-600'
                        : 'text-teal-50 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 font-medium">{link.label}</span>
                  <span className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} ${isScrolled ? 'bg-teal-600' : 'bg-white'}`} />
                </NavLink>
              )})}
            </nav>

            {/* CTA Button */}
            <Link 
              to="/contact"
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer ${isScrolled ? 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white shadow-[0_0_15px_rgba(20,184,166,0.5)]' : 'bg-white text-[#17a190] hover:bg-slate-50 shadow-[0_0_15px_rgba(255,255,255,0.3)]'}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 -mr-2 rounded-lg transition-colors cursor-pointer ${isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 origin-top overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-2">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/projects', label: 'Projects' }
          ].map((link) => {
            const isActive = link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to);
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${isActive ? 'bg-teal-50 text-teal-600' : 'text-slate-600 hover:bg-slate-50 hover:text-teal-600'}`}
              >
                {link.label}
              </NavLink>
            );
          })}
          <div className="pt-4 px-2">
            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white rounded-xl font-medium transition-colors shadow-md shadow-teal-500/20 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      </header>
    </>
  );
}
