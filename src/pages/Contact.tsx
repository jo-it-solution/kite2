import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" strokeWidth={1.5} />,
      title: "Main Location",
      color: "teal",
      lines: [
        "Sharjah Free Zone",
        "Shams Business Center",
        "Sharjah Media City Free Zone",
        "Al Messanad, Sharjah, UAE"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" strokeWidth={1.5} />,
      title: "Phone Numbers",
      color: "indigo",
      lines: [
        "+971 58 257 4037",
        "+251 93 028 8790",
        "+251 97 003 9140",
        "+1 514 791 7749"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" strokeWidth={1.5} />,
      title: "Email",
      color: "amber",
      lines: [
        "support@kitellic.net",
        "info@kitellic.net"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" strokeWidth={1.5} />,
      title: "Website",
      color: "purple",
      lines: [
        "www.kitellic.net"
      ]
    }
  ];

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
            Get in Touch
          </motion.h1>
          <motion.p 
            variants={fadeUpVariant}
            className="text-lg md:text-xl text-teal-50/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We'd love to hear from you — reach out and let's start a conversation.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none translate-y-[1px]">
          <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,165.3C672,171,768,149,864,128C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
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
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal-600">Contact Address</span>
                <span className="h-px w-10 bg-teal-400/60" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
                How to <span className="text-teal-600">reach us</span>
              </h2>
            </motion.div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactDetails.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUpVariant}
                  className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${item.color}-50/0 via-transparent to-transparent group-hover:from-${item.color}-50/30 transition-colors duration-500`} />
                  <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-${item.color}-400 to-${item.color}-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 text-center">
                    <div className={`w-14 h-14 bg-${item.color}-50 border border-${item.color}-200/50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-${item.color}-500 group-hover:border-${item.color}-500 group-hover:shadow-lg transition-all duration-300`}>
                      <span className={`text-${item.color}-600 group-hover:text-white transition-colors duration-300`}>{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">{item.title}</h3>
                    <div className="space-y-1.5">
                      {item.lines.map((line, i) => (
                        <p key={i} className={`text-sm ${i === 0 ? 'text-slate-600' : 'text-slate-500'} font-light leading-relaxed`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAP + CONTACT FORM */}
      <section className="py-24 relative bg-slate-50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-[120px] pointer-events-none" />
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
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal-600">Find Us</span>
                <span className="h-px w-10 bg-teal-400/60" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
                Visit our <span className="text-teal-600">office</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Map */}
              <motion.div variants={fadeUpVariant} className="lg:col-span-3 group relative bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden h-[420px] lg:h-full min-h-[360px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.5210784391193!2d55.41850600000001!3d25.3540525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5be30e9c8aad%3A0x32d415021d2fe7d7!2sShams%20Business%20Center!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kite Consulting Office Location"
                  className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm border border-slate-100 flex items-center gap-2.5 z-10">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-slate-600">Shams Business Center, Sharjah</span>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={fadeUpVariant} className="lg:col-span-2 group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 bg-teal-50 border border-teal-200/50 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-teal-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Send a Message</h3>
                    <p className="text-xs text-slate-400">We'll get back within 24 hours</p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">First Name</label>
                      <input
                        type="text"
                        placeholder="abebe"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">Last Name</label>
                      <input
                        type="text"
                        placeholder="kebede"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-medium rounded-xl hover:from-teal-500 hover:to-teal-400 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" strokeWidth={1.5} />
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUSINESS HOURS + QUICK LINKS */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Business Hours */}
            <motion.div variants={fadeUpVariant} className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center hover:shadow-[0_8px_40px_rgba(0,0,0,0.05)] transition-all duration-500">
              <div className="w-12 h-12 bg-teal-50 border border-teal-200/50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:shadow-lg transition-all duration-300">
                <Clock className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Business Hours</h3>
              <p className="text-sm text-slate-500 font-light">Monday — Friday</p>
              <p className="text-sm font-semibold text-slate-700">9:00 AM — 6:00 PM (GST)</p>
              <p className="text-xs text-slate-400 mt-3 font-light">Saturday — Sunday: Closed</p>
            </motion.div>

            {/* Quick Response */}
            <motion.div variants={fadeUpVariant} className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center hover:shadow-[0_8px_40px_rgba(0,0,0,0.05)] transition-all duration-500">
              <div className="w-12 h-12 bg-indigo-50 border border-indigo-200/50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-indigo-500 group-hover:border-indigo-500 group-hover:shadow-lg transition-all duration-300">
                <Send className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Quick Response</h3>
              <p className="text-sm text-slate-500 font-light">We typically respond to inquiries</p>
              <p className="text-sm font-semibold text-slate-700">within 24 business hours</p>
              <p className="text-xs text-slate-400 mt-3 font-light">For urgent matters, please call us directly</p>
            </motion.div>

            {/* Global Reach */}
            <motion.div variants={fadeUpVariant} className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center hover:shadow-[0_8px_40px_rgba(0,0,0,0.05)] transition-all duration-500">
              <div className="w-12 h-12 bg-amber-50 border border-amber-200/50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:shadow-lg transition-all duration-300">
                <Globe className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Global Reach</h3>
              <p className="text-sm text-slate-500 font-light">Serving clients across</p>
              <p className="text-sm font-semibold text-slate-700">UAE, Ethiopia, Canada & USA</p>
              <p className="text-xs text-slate-400 mt-3 font-light">Remote consulting available worldwide</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
