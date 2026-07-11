import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { X, Send, CheckCircle, Loader2, Menu } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Delay resetting the form until modal is fully closed
      const timer = setTimeout(() => setSubmitted(false), 300);
      return () => {
        document.body.style.overflow = '';
        clearTimeout(timer);
      };
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSending(false);
    setSubmitted(true);
  };

  return (
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/projects', label: 'Projects' },
              { to: '/contact', label: 'Contact Us' }
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
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer ${isScrolled ? 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white shadow-[0_0_15px_rgba(20,184,166,0.5)]' : 'bg-white text-[#17a190] hover:bg-slate-50 shadow-[0_0_15px_rgba(255,255,255,0.3)]'}`}
            >
              Request Consultation
            </button>
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
            { to: '/projects', label: 'Projects' },
            { to: '/contact', label: 'Contact Us' }
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
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white rounded-xl font-medium transition-colors shadow-md shadow-teal-500/20 cursor-pointer"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
          
          {/* Modal */}
          <div 
            ref={modalRef}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-[modalIn_0.3s_ease-out]"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors z-10 cursor-pointer"
            >
              <X className="w-4 h-4" strokeWidth={2} />
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-8 pt-8 pb-10 text-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-2">Request a Consultation</h2>
                  <p className="text-teal-50/80 text-sm font-light">Fill in the details and we'll get back to you within 24 hours.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Abebe Kebede"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">Company</label>
                      <input 
                        type="text" 
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">Email *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">Phone</label>
                      <input 
                        type="tel" 
                        placeholder="+1 234 567 890"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">How can we help? *</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Briefly describe your project or needs..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-medium rounded-xl hover:from-teal-500 hover:to-teal-400 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" strokeWidth={1.5} />
                        Send Request
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="flex flex-col items-center text-center px-8 py-14">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-teal-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Request Submitted!</h3>
                <p className="text-sm text-slate-500 font-light max-w-xs leading-relaxed mb-8">
                  Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-500 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
