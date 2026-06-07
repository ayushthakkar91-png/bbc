import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { menuData } from './data/menu';
import { takeawayMenuData } from './data/takeawayMenu';

// --- Data ---
const locations = [
  {
    name: "Battersea",
    address: "28 Queenstown Road, London SW8 3RX",
    phone: "020 7720 0500",
    link: "https://battersea.bombaybicyclechef.uk/menu",
    coords: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.733475710087!2d-0.1504354!3d51.4813583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760503f169f41b%3A0x63a3d24249071424!2s28%20Queenstown%20Rd%2C%20London%20SW8%203RX!5e0!3m2!1sen!2suk!4v1717580000000!5m2!1sen!2suk"
  },
  {
    name: "Kilburn",
    address: "24 Willesden Lane, London NW6 7ST",
    phone: "020 7624 0300",
    link: "https://kilburn.bombaybicyclechef.uk/menu",
    coords: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.564556108!2d-0.1983!3d51.5398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876107865c69707%3A0x5e2365e47c1a84f3!2s24%20Willesden%20Ln%2C%20London%20NW6%207ST!5e0!3m2!1sen!2suk!4v1717580000000!5m2!1sen!2suk"
  },
  {
    name: "Balham",
    address: "88 Balham High Road, SW12 9AG",
    phone: "020 8772 3222",
    link: "https://balham.bombaybicyclechef.uk/menu",
    coords: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.9!2d-0.15!3d51.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605d898a88a03%3A0x4a09a5a5a5a5a5a5!2s88%20Balham%20High%20Rd%2C%20London%20SW12%209AG!5e0!3m2!1sen!2suk!4v1717580000000!5m2!1sen!2suk"
  }
];

// --- Shared Components ---

function AnnouncementBar({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="bg-[#c9a84c] py-2.5 px-4 relative z-[70] flex items-center justify-center border-b border-[#5d0925]/30">
      <p className="text-[#1a0a0e] font-sans text-xs md:text-sm font-bold text-center pr-8 uppercase tracking-widest leading-tight">
        🎉 20% OFF your first online order — Use code <span className="underline decoration-[#1a0a0e]/50 font-bold">BBC20</span>
      </p>
      <button onClick={onDismiss} className="absolute right-4 text-[#1a0a0e] hover:opacity-60 transition-opacity p-1 font-bold">✕</button>
    </div>
  );
}

function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Our Story", href: "/#story" },
    { name: "Reservations", href: "/#reservations" },
    { name: "Locations", href: "/#locations" },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.includes('#')) {
      const id = href.split('#')[1];
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <motion.nav
      className={`w-full transition-all duration-500 flex items-center justify-between px-6 md:px-12 bg-[#f5f2e9] ${
        isScrolled ? 'shadow-md h-16' : 'h-20'
      }`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.svg" alt="BBC Logo" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
        </Link>
      </div>
      
      <div className="hidden md:flex space-x-10 text-[#5d0925] font-sans font-bold uppercase text-[10px] tracking-[0.2em]">
        {navLinks.map((link) => (
          link.href.startsWith('/#') ? (
            <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }} className="hover:text-[#c9a84c] transition-colors cursor-pointer">{link.name}</a>
          ) : (
            <Link key={link.name} to={link.href} className="hover:text-[#c9a84c] transition-colors">{link.name}</Link>
          )
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <button onClick={onOpenModal} className="hidden sm:block px-6 py-2 border border-[#c9a84c] bg-[#5d0925] text-[#faf8f3] font-sans text-[10px] uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#5d0925] rounded-sm transition-all duration-300 font-bold">
          Order Now
        </button>
        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-[#5d0925] p-2">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.4 }} className="fixed inset-0 z-[100] bg-[#f5f2e9] flex flex-col p-8">
            <div className="flex justify-between items-center mb-12">
              <img src="/logo.svg" alt="Logo" className="w-16 h-16" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#5d0925] p-2 text-3xl font-bold">✕</button>
            </div>
            <div className="flex flex-col space-y-8 text-left">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }} className="text-[#5d0925] font-serif text-4xl italic font-bold">{link.name}</a>
                ) : (
                  <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[#5d0925] font-serif text-4xl italic font-bold">{link.name}</Link>
                )
              ))}
              <button onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }} className="w-full py-4 bg-[#5d0925] text-[#faf8f3] font-sans text-sm uppercase tracking-widest rounded-sm mt-8 font-bold shadow-xl">Order Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function ModalWrapper({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-2xl bg-[#f5f2e9] rounded-lg p-10 shadow-2xl border border-[#c9a84c]/20 max-h-[90vh] overflow-y-auto">
            <button onClick={onClose} className="absolute top-6 right-6 text-[#5d0925] hover:text-[#c9a84c] z-50 text-xl font-bold">✕</button>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif text-[#5d0925] mb-2 font-bold">{title}</h2>
              <div className="w-16 h-[1px] bg-[#c9a84c] mx-auto"></div>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function AboutModal({ isOpen, onClose }: any) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="About Us">
      <div className="space-y-4 text-sm leading-relaxed text-[#5d0925] font-medium text-left">
        <p>Welcome to Bombay Bicycle Chef, where we serve up a delicious blend of traditional and modern Indian dishes. Our menu features a wide variety of options, from classic curries and tandoori dishes to regional specialties and contemporary twists on favourites.</p>
        <p>We use only the freshest and highest-quality ingredients, and our skilled chefs take pride in creating flavourful and authentic dishes that will transport your taste buds straight to India. Whether you're in the mood for a quick and casual meal or a more formal dining experience, our warm and welcoming atmosphere is the perfect spot for any occasion.</p>
      </div>
    </ModalWrapper>
  );
}

function FeedbackModal({ isOpen, onClose }: any) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Your Feedback">
      <div className="space-y-6">
        <p className="text-[#5d0925]/70 font-sans text-center text-sm font-bold">We genuinely value your experience. Tell us what you loved or how we can improve.</p>
        <form className="space-y-4 font-bold">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="NAME" className="w-full bg-white border border-[#5d0925]/10 p-3 rounded-sm text-[10px] outline-none focus:border-[#5d0925] font-bold tracking-widest" />
            <input type="email" placeholder="EMAIL" className="w-full bg-white border border-[#5d0925]/10 p-3 rounded-sm text-[10px] outline-none focus:border-[#5d0925] font-bold tracking-widest" />
          </div>
          <select className="w-full bg-white border border-[#5d0925]/10 p-3 rounded-sm text-[10px] outline-none appearance-none font-bold tracking-widest cursor-pointer text-left uppercase">
            <option>FOOD QUALITY</option>
            <option>SERVICE</option>
            <option>DELIVERY</option>
            <option>OTHER</option>
          </select>
          <textarea placeholder="MESSAGE" className="w-full bg-white border border-[#5d0925]/10 p-3 rounded-sm text-[10px] h-32 outline-none focus:border-[#5d0925] font-bold tracking-widest"></textarea>
          <button className="w-full py-4 bg-[#5d0925] text-white uppercase text-[10px] font-bold rounded-sm hover:bg-[#2a0d12] transition-all tracking-widest shadow-xl">Send Feedback</button>
        </form>
      </div>
    </ModalWrapper>
  );
}

function TermsModal({ isOpen, onClose }: any) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Terms & Conditions">
      <div className="space-y-6 text-[#5d0925] font-sans text-sm leading-relaxed overflow-y-auto pr-4 max-h-[60vh] font-bold text-left uppercase">
        <section>
          <h4 className="font-serif text-lg mb-2 font-bold tracking-tight">Delivery & Orders</h4>
          <ul className="list-disc pl-5 space-y-1 opacity-80 font-medium">
            <li>Delivery time can take up to 45 minutes (longer in busy hours).</li>
            <li>Minimum spend for free delivery is £10.00.</li>
            <li>Complimentary Poppadum and Chutney for orders over £15.00.</li>
            <li>Our delivery drivers only carry up to £10.00 in change.</li>
          </ul>
        </section>
        <section>
          <h4 className="font-serif text-lg mb-2 font-bold tracking-tight">Policies</h4>
          <p className="opacity-80 font-medium leading-relaxed">Refunds and cancellations are only permitted in exceptional circumstances. Online orders are strictly non-refundable.</p>
        </section>
      </div>
    </ModalWrapper>
  );
}

function PrivacyModal({ isOpen, onClose }: any) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="space-y-6 text-[#5d0925] font-sans text-sm leading-relaxed overflow-y-auto pr-4 max-h-[60vh] font-bold text-left uppercase">
        <p className="font-medium leading-relaxed">At Bombay Bicycle Chef, we prioritize the privacy of our visitors. This policy outlines the types of information we collect and how it is used to improve your experience.</p>
      </div>
    </ModalWrapper>
  );
}

function InstagramMarquee() {
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1545247181-516773cae754?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1589114471223-dec0d8d572c6?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=400&h=400&fit=crop"
  ];
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-[#5d0925]/5 font-bold">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-[#5d0925] mb-2 font-bold tracking-tight text-center">Follow the Flavour</h2>
        <p className="text-[#c9a84c] font-sans italic text-lg font-bold opacity-80 text-center uppercase">@bombaybicyclechef</p>
      </div>
      <div className="flex overflow-hidden relative group">
        <motion.div animate={{ x: [0, -1600] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex whitespace-nowrap">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0 overflow-hidden relative border-r-4 border-white">
              <img src={img} alt="Insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer grayscale-[0.2] hover:grayscale-0" onClick={() => window.open('https://instagram.com/bombaybicyclechef', '_blank')} />
              <div className="absolute inset-0 bg-[#5d0925]/10 group-hover:opacity-0 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer({ onOpenAbout, onOpenFeedback, onOpenTerms, onOpenPrivacy }: any) {
  return (
    <footer className="bg-[#1a0a0e] py-24 px-8 border-t border-[#c9a84c]/10 text-white font-bold">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 text-center md:text-left">
        <div>
          <img src="/logo.svg" alt="Logo" className="w-24 mb-8 brightness-0 invert mx-auto md:mx-0" />
          <p className="text-[10px] opacity-40 uppercase tracking-widest leading-loose font-bold max-w-[200px] mx-auto md:mx-0">A legacy of spice, cycles, and storytelling since 2008.</p>
        </div>
        <div>
          <h4 className="text-[#c9a84c] text-[10px] uppercase mb-8 tracking-widest font-bold opacity-60">Corporate</h4>
          <ul className="space-y-4 text-[11px] uppercase opacity-80 font-bold tracking-widest">
            <li><button onClick={onOpenAbout} className="hover:text-[#c9a84c] transition-colors">About Us</button></li>
            <li><button onClick={onOpenFeedback} className="hover:text-[#c9a84c] transition-colors">Feedback</button></li>
            <li><Link to="/careers" className="hover:text-[#c9a84c] transition-colors">Join the Team</Link></li>
            <li><Link to="/franchise" className="hover:text-[#c9a84c] transition-colors">Franchising</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#c9a84c] text-[10px] uppercase mb-8 tracking-widest font-bold opacity-60">Legal</h4>
          <ul className="space-y-4 text-[11px] uppercase opacity-80 font-bold tracking-widest">
            <li><button onClick={onOpenPrivacy} className="hover:text-[#c9a84c]">Privacy Policy</button></li>
            <li><button onClick={onOpenTerms} className="hover:text-[#c9a84c]">Terms & Conditions</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#c9a84c] text-[10px] uppercase mb-8 tracking-widest font-bold opacity-60">Heritage Spots</h4>
          <ul className="space-y-4 text-[11px] uppercase opacity-80 font-bold tracking-widest">
            {["Battersea", "Kilburn", "Balham"].map(loc => (
              <li key={loc}><a href="/#locations" className="hover:text-[#c9a84c] transition-colors font-bold text-left">{loc}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-12 mt-20 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
        <span>© 2026 Bombay Bicycle Chef. Powered by <a href="https://digipi.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-8 decoration-[#c9a84c]/40 font-bold uppercase">digipi.uk</a></span>
      </div>
    </footer>
  );
}

// --- Sections ---

function AwardsSection() {
  return (
    <section className="py-24 bg-[#5d0925] px-8 text-center overflow-hidden border-y border-white/5 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 font-bold tracking-tight text-center">Award-Winning Since 2018</h2>
        <p className="text-[#c9a84c] font-sans italic mb-20 text-lg font-bold opacity-90 text-center uppercase tracking-widest">Recognised as London's finest Indian takeaway</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {[
            { year: "2018 Win", img: "/2018.webp", org: "London Curry Awards" },
            { year: "2019 Win", img: "/2019.webp", org: "London Curry Awards" },
            { year: "British Awards", img: "/british.webp", org: "British Takeaway Awards" }
          ].map((award, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.8 }} className="bg-white p-12 border-2 border-[#c9a84c]/30 rounded-sm shadow-xl flex flex-col items-center hover:scale-105 transition-transform duration-500 group">
              <div className="h-32 mb-8 relative"><img src={award.img} alt="Award" className="h-full object-contain group-hover:brightness-110 transition-all" /></div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5d0925] mb-2">{award.org}</h4>
              <span className="text-[#c9a84c] font-bold font-serif text-xl tracking-tighter italic">{award.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="py-32 bg-[#f5f2e9] overflow-hidden px-8 border-t border-[#5d0925]/5">
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-24 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
          <div className="w-full h-[500px] md:h-[650px] border-[24px] border-white shadow-2xl overflow-hidden rounded-sm ring-1 ring-[#5d0925]/10">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000" alt="Chef" />
          </div>
          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-[#5d0925] p-6 md:p-10 text-white max-w-xs shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-[#c9a84c]/20">
            <p className="font-serif italic text-lg md:text-xl font-bold leading-snug">"Spice is not just taste; it's a memory."</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="font-bold text-left">
          <h2 className="text-4xl md:text-5xl font-serif text-[#5d0925] mb-8 font-bold tracking-tight text-left">The Man Behind the Bicycle</h2>
          <p className="text-[#5d0925] font-sans opacity-80 leading-relaxed mb-6 font-bold text-lg text-left">Our story began on a vintage bicycle traversing the winding lanes of Old Bombay. Chef Vikram carries more than just ingredients; he carries the secrets of a bygone era.</p>
          <button className="px-8 py-3 bg-[#c9a84c] text-[#1a0a0e] uppercase text-[10px] rounded-sm font-bold tracking-widest shadow-md hover:bg-[#5d0925] hover:text-white transition-all scale-105 active:scale-100">Discover Our History</button>
        </motion.div>
      </div>
    </section>
  );
}

function LocationsSection() {
  const [activeLoc, setActiveLoc] = useState(locations[0]);
  return (
    <section id="locations" className="py-32 bg-[#faf8f3] px-8 border-y border-[#5d0925]/5">
      <div className="max-w-7xl mx-auto text-center font-bold">
        <h2 className="text-5xl font-serif text-[#5d0925] mb-20 font-bold tracking-tight text-center">Our Heritage Spots</h2>
        <div className="grid lg:grid-cols-3 gap-16 text-left font-bold items-start">
          <div className="space-y-8">
            {locations.map(loc => (
              <div key={loc.name} onClick={() => setActiveLoc(loc)} className={`p-10 border-2 cursor-pointer transition-all duration-500 rounded-sm relative overflow-hidden ${activeLoc.name === loc.name ? 'bg-[#5d0925] text-white border-[#5d0925] shadow-2xl translate-x-4' : 'bg-white border-[#5d0925]/10 text-[#5d0925] hover:border-[#5d0925]/40 hover:bg-[#f5f2e9]'}`}>
                <h3 className="font-serif text-3xl mb-3 font-bold tracking-tight">{loc.name}</h3>
                <p className="text-sm opacity-70 mb-8 font-medium leading-relaxed max-w-[200px] uppercase">{loc.address}</p>
                <div className="flex justify-between items-center border-t border-current pt-6">
                  <span className="text-[11px] font-bold tracking-[0.2em]">{loc.phone}</span>
                  <Link to="/menu" className="text-[10px] font-bold uppercase tracking-tighter italic hover:text-[#c9a84c] transition-colors">View Menu →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 h-[500px] md:h-[650px] border-[12px] border-white shadow-2xl relative overflow-hidden rounded-sm group bg-[#5d0925]/5">
            <iframe title="Map" src={activeLoc.coords} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            <div className="absolute inset-0 pointer-events-none border-[1px] border-[#5d0925]/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reservations() {
  return (
    <section id="reservations" className="bg-[#2a0d12] py-32 px-8 font-bold relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-[#c9a84c]"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 relative z-10">
        <div className="text-white text-center md:text-left">
          <h2 className="text-6xl md:text-7xl font-serif mb-16 font-bold tracking-tight leading-none text-[#faf8f3] text-left">Book Your <br /><span className="italic text-[#c9a84c]">Table</span></h2>
          <div className="space-y-16">
            {locations.map(loc => (
              <div key={loc.name} className="group text-center md:text-left border-l-2 border-[#c9a84c]/30 pl-10 hover:border-[#c9a84c] transition-colors text-left">
                <h4 className="text-[#c9a84c] text-xs uppercase font-bold mb-3 tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">Heritage Site: {loc.name}</h4>
                <p className="font-serif text-2xl leading-tight mb-3 text-[#faf8f3] tracking-wide">{loc.address}</p>
                <p className="text-sm opacity-40 font-bold tracking-widest uppercase">Dial: {loc.phone}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 pt-10 border-t border-white/10 flex items-center gap-10 text-left">
            <div className="w-12 h-12 rounded-full border border-[#c9a84c]/50 flex items-center justify-center text-[#c9a84c]">🕒</div>
            <div>
              <h4 className="text-[#c9a84c] text-[10px] uppercase font-bold mb-2 tracking-[0.2em] opacity-60">House Hours</h4>
              <p className="font-serif text-2xl font-bold">Mon — Sun: 12:00 PM — 11:30 PM</p>
            </div>
          </div>
        </div>
        <div className="bg-[#1a0a0e] p-10 md:p-20 border border-[#c9a84c]/30 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative rounded-sm group overflow-hidden border-t-8 border-t-[#c9a84c]">
          <h3 className="text-white font-serif text-3xl mb-12 text-center font-bold tracking-tight leading-none">Your Details</h3>
          <form className="space-y-10 font-bold text-left">
            <div className="relative"><input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white outline-none focus:border-[#c9a84c] text-[10px] tracking-[0.3em] transition-all font-bold placeholder:opacity-30 uppercase" /></div>
            <div className="relative"><input type="text" placeholder="PHONE NUMBER" className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white outline-none focus:border-[#c9a84c] text-[10px] tracking-[0.3em] transition-all font-bold placeholder:opacity-30 uppercase" /></div>
            <button className="w-full py-6 bg-[#c9a84c] text-black font-bold uppercase tracking-[0.4em] text-[11px] rounded-sm hover:bg-white transition-all shadow-xl font-bold scale-105 active:scale-100 uppercase">Establish Booking</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Elide Zanardi", text: "Amazing service and food! I flew all the way from Italia and this was the place I was told to go to first!" },
    { name: "Lucy Page", text: "The food is honestly so delicious, I would eat it every day if I could. Veg favourites are incredible." },
    { name: "Anita Desai", text: "Authentic colonial flavors. The lamb is breathtaking. A true gem of Mumbai." }
  ];
  return (
    <div className="grid md:grid-cols-3 gap-10 text-center font-bold">
      {reviews.map((rev, i) => (
        <div key={i} className="p-12 border border-[#5d0925]/10 bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          <div className="flex justify-center gap-1 mb-8 text-[#c9a84c] text-xl">★★★★★</div>
          <p className="font-serif italic text-xl mb-10 text-[#5d0925] leading-relaxed">"{rev.text}"</p>
          <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#5d0925] opacity-60">{rev.name}</h4>
        </div>
      ))}
    </div>
  );
}

function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative mt-[120px] min-h-[calc(100vh-120px)] flex items-center bg-[#f5f2e9] overflow-hidden px-6 md:px-20 py-12 font-bold">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex flex-col gap-4 text-center lg:text-left font-bold">
          <h1 className="text-4xl lg:text-5xl font-serif text-[#5d0925] leading-tight lg:leading-[1.1] tracking-tight text-center lg:text-left">From the Streets of <br /><span className="italic text-[#5d0925]">Bombay</span> to Your Table</h1>
          <div className="w-32 h-[1px] bg-[#c9a84c] flex items-center justify-center mx-auto lg:mx-0 relative">
            <span className="absolute bg-[#f5f2e9] px-2 text-[#c9a84c] text-xl">❦</span>
          </div>
          <p className="text-[#5d0925] font-sans text-base md:text-lg max-w-md italic opacity-90 mx-auto lg:mx-0 leading-relaxed font-bold text-center lg:text-left">A culinary voyage through the heart of 1920s India, where spice meets storytelling.</p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 uppercase tracking-widest text-[10px] font-bold">
            <button onClick={onOpenModal} className="px-10 py-4 bg-[#5d0925] text-[#faf8f3] rounded-sm hover:bg-[#2a0d12] transition-colors shadow-lg font-bold">RESERVE A TABLE</button>
            <Link to="/menu" className="px-10 py-4 border-2 border-[#5d0925] text-[#5d0925] rounded-sm hover:bg-[#5d0925] hover:text-[#faf8f3] transition-all shadow-sm inline-block font-bold">VIEW MENU</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[350px]">
            <div className="w-full aspect-[3/4] overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl" style={{ borderRadius: '50% 50% 0 0' }}>
              <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800" alt="Hero" className="w-full h-full object-cover" />
            </div>
            <motion.div initial={{ rotate: -15 }} animate={{ rotate: 15 }} transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }} className="absolute bottom-4 -left-4 sm:-left-8 w-20 h-20 sm:w-28 sm:h-28 bg-[#c9a84c] rounded-full flex flex-col items-center justify-center text-[#5d0925] font-serif border-4 border-white shadow-lg z-10">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-tighter font-bold">Est.</span>
              <span className="text-lg sm:text-2xl font-bold">2008</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StoryStrip() {
  return (
    <section className="py-24 bg-[#5d0925] text-[#faf8f3] text-center overflow-hidden relative font-bold">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[#c9a84c] opacity-10 text-[160px] font-serif pointer-events-none select-none">❝</div>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-serif italic mb-20 relative z-10 px-8 font-bold tracking-tight leading-snug max-w-4xl mx-auto text-center">Every dish is a journey back to Bombay</motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto gap-16 md:gap-24">
        {[{ label: 'Years of Spice', value: 15 }, { label: 'Master Recipes', value: 120 }, { label: 'Guests Served', value: '50k+' }].map((stat, i) => (
          <div key={i} className="flex flex-col items-center group">
            <span className="text-5xl md:text-8xl font-serif text-[#c9a84c] mb-3 font-bold group-hover:scale-110 transition-transform duration-500">{stat.value}</span>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 font-bold">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Pages ---

function HomePage({ onOpenModal }: { onOpenModal: () => void }) {
  const showcase = [
    { name: "Chicken Tikka Masala", desc: "Tender chicken in rich tomato-cream sauce", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop" },
    { name: "Lamb Rogan Josh", desc: "Slow-cooked lamb with Kashmiri spices", img: "https://images.unsplash.com/photo-1545247181-516773cae754?w=400&h=300&fit=crop" },
    { name: "Paneer Makhani", desc: "Cottage cheese in velvety butter sauce", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop" }
  ];
  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      <StoryStrip />
      <section id="menu" className="py-24 bg-[#faf8f3] px-8 font-bold border-y border-[#5d0925]/5 shadow-inner">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-[#5d0925] mb-6 font-bold tracking-tight leading-none text-center">Our Heritage Menu</h2>
          <p className="text-[#c9a84c] uppercase tracking-[0.4em] text-[11px] mb-20 font-bold italic text-center">A Curated Journey Through Spice</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-24 text-left">
            {showcase.map(dish => (
              <div key={dish.name} className="bg-white border-2 border-[#c9a84c]/10 rounded-sm overflow-hidden group shadow-sm hover:shadow-[0_40px_80px_rgba(93,9,37,0.15)] transition-all duration-700 hover:-translate-y-4 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#5d0925] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="aspect-[4/3] overflow-hidden relative"><img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" /><div className="absolute inset-0 bg-[#5d0925]/5 group-hover:bg-transparent transition-colors"></div></div>
                <div className="p-12">
                  <h3 className="font-serif text-[#5d0925] text-3xl mb-5 font-bold tracking-tight">{dish.name}</h3>
                  <p className="font-sans text-[#6b7280] text-sm normal-case leading-relaxed font-bold italic opacity-80 mb-6">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/menu" className="inline-block px-14 py-6 border-2 border-[#5d0925] text-[#5d0925] font-sans uppercase text-[10px] tracking-[0.5em] hover:bg-[#5d0925] hover:text-white transition-all rounded-sm font-bold shadow-xl scale-110 uppercase">View Full Menu ❦</Link>
        </div>
      </section>
      <AwardsSection />
      <StorySection />
      <LocationsSection />
      <Reservations />
      <section className="py-32 bg-[#f5f2e9] text-center px-8 border-t border-[#5d0925]/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-[#5d0925] mb-4 font-bold tracking-tight text-center">What Our Guests Say</h2>
          <p className="text-[#c9a84c] font-sans italic text-2xl mb-16 font-bold opacity-80 text-center uppercase tracking-widest">Voices from the dining room</p>
          <div className="w-32 h-[1px] bg-[#c9a84c] mx-auto mb-24 opacity-40"></div>
          <Testimonials />
        </div>
      </section>
    </>
  );
}

function MenuPage({ showPromo = false }: { showPromo?: boolean }) {
  const [activeTab, setActiveTab] = useState("DINE IN");
  
  // Choose dataset based on active tab
  const currentDataset = activeTab === "DINE IN" ? menuData : takeawayMenuData;
  
  // Default to the first category of the active dataset
  const [activeCat, setActiveCategory] = useState(currentDataset[0].category);

  // When switching tabs, reset the active category to the first category of the new tab
  useEffect(() => {
    setActiveCategory(currentDataset[0].category);
  }, [activeTab, currentDataset]);

  const currentCategoryData = currentDataset.find((c: any) => c.category === activeCat) || currentDataset[0];

  return (
    <div className="bg-[#f5f2e9] min-h-screen pt-32 pb-24 px-6 font-bold">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-serif text-[#5d0925] text-center mb-16 font-bold tracking-tight leading-none">Our Heritage Menu</h1>
        <div className="flex justify-center space-x-6 mb-20 font-bold">
          {["DINE IN MENU", "TAKEAWAY MENU"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab.includes("DINE") ? "DINE IN" : "TAKEAWAY")} className={`px-12 py-4 rounded-full text-[10px] tracking-[0.3em] transition-all font-bold shadow-md ${activeTab === (tab.includes("DINE") ? "DINE IN" : "TAKEAWAY") ? 'bg-[#5d0925] text-white shadow-2xl scale-110' : 'bg-white text-[#5d0925] border border-[#5d0925]/20 hover:border-[#5d0925]/50'}`}>{tab}</button>
          ))}
        </div>

        {activeTab === "TAKEAWAY" && (
          <div className="mb-16 bg-white text-center p-8 border-y-4 border-[#c9a84c] shadow-lg flex flex-col items-center">
            <span className="text-[#c9a84c] text-3xl mb-4">🏆</span>
            <h3 className="text-[#5d0925] font-serif text-2xl italic mb-2">Takeaway of the Year</h3>
            <p className="text-[#c9a84c] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Celebrating the nation's best takeaways</p>
            <span className="bg-[#5d0925] text-white px-6 py-2 text-[10px] uppercase tracking-widest font-bold">Best Takeaway in Central London 2018</span>
          </div>
        )}

        <div className={`sticky ${showPromo ? 'top-[104px]' : 'top-16'} z-40 bg-[#f5f2e9]/95 backdrop-blur-md py-8 mb-20 border-y border-[#5d0925]/10 overflow-x-auto flex no-scrollbar whitespace-nowrap gap-6 px-6 shadow-sm`}>
          {currentDataset.map((cat: any) => (
            <button key={cat.category} onClick={() => setActiveCategory(cat.category)} className={`px-10 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] transition-all shadow-sm flex-shrink-0 ${activeCat === cat.category ? 'bg-[#5d0925] text-white' : 'bg-white/80 text-[#5d0925] border border-[#5d0925]/10 hover:bg-white'}`}>{cat.category.toUpperCase()}</button>
          ))}
        </div>

        <div className="space-y-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {currentCategoryData.items.map((item: any, i: number) => (
                <div key={i} className="flex justify-between items-start pb-12 border-b border-[#e5e0d5] last:border-0 group hover:bg-[#5d0925]/[0.01] transition-all px-8 -mx-8 rounded-sm">
                  <div className="flex-1 pr-12 text-left">
                    <div className="flex items-center gap-6 mb-3">
                      <h3 className="text-3xl font-serif text-[#5d0925] font-bold tracking-tight group-hover:text-[#c9a84c] transition-colors duration-300">{item.name}</h3>
                    </div>
                    <span className="text-[#c9a84c] font-bold text-xl block mb-4 font-serif italic tracking-wide">{item.price}</span>
                    {item.desc && <p className="text-[#6b7280] text-base leading-relaxed font-bold font-sans normal-case opacity-80">{item.desc}</p>}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function CareersPage() {
  return (
    <div className="bg-[#f5f2e9] min-h-screen pt-32 pb-24 px-8 font-bold">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-serif text-[#5d0925] mb-6 font-bold tracking-tight leading-none text-center uppercase">Join Our Kitchen</h1>
        <p className="text-[#c9a84c] font-sans italic text-xl mb-24 font-bold opacity-80 text-center uppercase">Be part of London's award-winning Indian kitchen</p>
        <div className="grid md:grid-cols-2 gap-10 mb-32 text-left">
          {["Head Chef", "Sous Chef", "Front of House", "Delivery Driver"].map(role => (
            <div key={role} className="bg-white p-12 border border-[#c9a84c]/20 rounded-sm shadow-sm group hover:shadow-2xl transition-all border-l-8 border-l-[#5d0925] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#5d0925]/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
              <h3 className="text-3xl font-serif text-[#5d0925] mb-4 font-bold tracking-tight uppercase">{role}</h3>
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#6b7280] mb-10 uppercase opacity-60">London · Premium Role</p>
              <button className="w-full py-4 bg-white border-2 border-[#5d0925] text-[#5d0925] text-[10px] font-bold tracking-[0.3em] hover:bg-[#5d0925] hover:text-white transition-all uppercase rounded-sm shadow-md font-bold">Apply Now</button>
            </div>
          ))}
        </div>
        <div className="bg-white p-12 md:p-24 border border-[#c9a84c]/30 shadow-2xl text-left rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-3 h-full bg-[#5d0925]"></div>
          <h2 className="text-4xl font-serif text-[#5d0925] mb-16 text-center font-bold tracking-tight leading-none text-center uppercase">Expression of Interest</h2>
          <form className="space-y-12 font-bold text-left">
            <div className="grid grid-cols-2 gap-12 text-left">
              <div className="relative group text-left">
                <input type="text" placeholder="FULL NAME" className="border-b-2 border-[#5d0925]/10 py-5 outline-none focus:border-[#5d0925] text-[11px] tracking-[0.2em] w-full bg-transparent transition-colors font-bold placeholder:opacity-30 uppercase" />
              </div>
              <div className="relative group text-left">
                <input type="email" placeholder="EMAIL ADDRESS" className="border-b-2 border-[#5d0925]/10 py-5 outline-none focus:border-[#5d0925] text-[11px] tracking-[0.2em] w-full bg-transparent transition-colors font-bold placeholder:opacity-30 uppercase" />
              </div>
            </div>
            <div className="flex items-center gap-12 bg-[#f5f2e9]/50 p-8 border-2 border-dashed border-[#5d0925]/20 rounded-sm group hover:border-[#5d0925]/40 transition-colors text-left">
              <input type="file" className="text-[10px] cursor-pointer uppercase" />
              <span className="text-[9px] opacity-60 uppercase tracking-[0.2em] font-bold">Upload Professional CV (PDF)</span>
            </div>
            <textarea placeholder="TELL US ABOUT YOUR CULINARY JOURNEY" className="w-full border-b-2 border-[#5d0925]/10 py-5 h-48 outline-none focus:border-[#5d0925] text-[11px] tracking-[0.2em] bg-transparent resize-none leading-relaxed transition-colors font-bold placeholder:opacity-30 uppercase"></textarea>
            <button className="w-full py-7 bg-[#5d0925] text-white font-bold uppercase tracking-[0.4em] text-[11px] rounded-sm shadow-2xl hover:bg-[#2a0d12] transition-all scale-[1.01] hover:scale-[1.02] font-bold shadow-xl uppercase">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function FranchisePage() {
  return (
    <div className="bg-[#f5f2e9] min-h-screen pt-32 pb-24 px-8 font-bold">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl font-serif text-[#5d0925] mb-6 font-bold tracking-tight leading-none text-center uppercase">Partner With Us</h1>
        <p className="text-[#c9a84c] font-sans italic text-xl mb-24 font-bold opacity-80 text-center uppercase">Bring the taste of Bombay to your neighbourhood</p>
        <div className="grid md:grid-cols-3 gap-12 mb-40 text-center">
          {["Proven Brand", "Full Support", "Award-Winning Menu"].map(benefit => (
            <div key={benefit} className="bg-white p-16 border-2 border-[#c9a84c]/10 shadow-2xl rounded-sm group hover:-translate-y-3 transition-all duration-500 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#5d0925]"></div>
              <div className="w-16 h-16 bg-[#5d0925]/5 rounded-full flex items-center justify-center mx-auto mb-8 text-[#5d0925] text-3xl group-hover:bg-[#5d0925] group-hover:text-white transition-colors duration-500">⟡</div>
              <h3 className="font-serif text-3xl text-[#5d0925] font-bold mb-6 tracking-tight leading-none text-center uppercase">{benefit}</h3>
              <p className="text-[10px] opacity-40 tracking-[0.3em] uppercase font-bold text-center">Legacy of Excellence</p>
            </div>
          ))}
        </div>
        <div className="bg-[#1a0a0e] p-12 md:p-24 border border-[#c9a84c]/30 shadow-2xl text-left rounded-sm relative">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full -mb-32 -mr-32 pointer-events-none"></div>
          <h2 className="text-5xl font-serif text-white mb-16 text-center font-bold tracking-tight leading-none text-center uppercase">Franchise Enquiry</h2>
          <form className="space-y-12 font-bold relative z-10 text-left">
            <input type="text" placeholder="NAME / COMPANY ENTITY" className="w-full border-b-2 border-white/10 py-5 outline-none focus:border-[#c9a84c] text-[11px] tracking-[0.3em] bg-transparent text-white transition-colors font-bold placeholder:opacity-20 uppercase" />
            <div className="grid grid-cols-2 gap-12 text-left">
              <input type="email" placeholder="EMAIL ADDRESS" className="border-b-2 border-white/10 py-5 outline-none focus:border-[#c9a84c] text-[11px] tracking-[0.3em] w-full bg-transparent text-white transition-colors font-bold placeholder:opacity-20 uppercase" />
              <div className="relative group text-left">
                <select className="border-b-2 border-white/10 py-5 outline-none focus:border-[#c9a84c] text-[11px] tracking-[0.3em] w-full bg-transparent text-white appearance-none cursor-pointer font-bold text-left uppercase"><option className="bg-[#1a0a0e]">INVESTMENT: £100K - £250K</option><option className="bg-[#1a0a0e]">£250K - £500K</option><option className="bg-[#1a0a0e]">£500K+</option></select>
                <div className="absolute right-0 top-6 text-[#c9a84c] text-xs pointer-events-none font-bold uppercase">▼</div>
              </div>
            </div>
            <button className="w-full py-8 bg-[#c9a84c] text-[#1a0a0e] font-bold uppercase tracking-[0.6em] text-[11px] rounded-sm shadow-2xl hover:bg-white transition-all scale-[1.01] hover:scale-[1.02] font-bold uppercase">Request Disclosure Package</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// --- App ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  return (
    <Router>
      <div className="bg-[#f5f2e9] min-h-screen flex flex-col selection:bg-[#5d0925] selection:text-white font-bold">
        <header className="fixed top-0 left-0 w-full z-[80]">
          {showPromo && <AnnouncementBar onDismiss={() => setShowPromo(false)} />}
          <Navbar onOpenModal={() => setIsModalOpen(true)} />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenModal={() => setIsModalOpen(true)} />} />
            <Route path="/menu" element={<MenuPage showPromo={showPromo} />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
          </Routes>
        </main>
        <InstagramMarquee />
        <Footer 
          onOpenAbout={() => setIsAboutOpen(true)} 
          onOpenFeedback={() => setIsFeedbackOpen(true)}
          onOpenTerms={() => setIsTermsOpen(true)}
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-[420px] bg-[#f5f2e9] rounded-lg p-12 shadow-[0_40px_80px_rgba(0,0,0,0.4)] border-t-8 border-t-[#c9a84c]">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-[#5d0925] text-2xl font-bold hover:text-[#c9a84c] transition-colors">✕</button>
                <div className="text-center">
                  <h2 className="text-3xl font-serif text-[#5d0925] mb-12 tracking-tight font-bold leading-tight text-center uppercase">How would you like <br />to dine?</h2>
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div onClick={() => { setIsModalOpen(false); document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' }); }} className="cursor-pointer border border-[#5d0925]/20 p-10 rounded-sm hover:border-[#5d0925] hover:bg-[#5d0925]/5 transition-all text-[#5d0925] font-bold uppercase shadow-sm group font-bold tracking-widest text-center"><span className="text-5xl block mb-6 group-hover:scale-110 transition-transform">🍽</span><p className="text-[10px]">Reserve</p></div>
                    <a href="https://www.bombaybicyclechef.uk/locator" target="_blank" rel="noopener noreferrer" className="border border-[#5d0925]/20 p-10 rounded-sm hover:border-[#5d0925] hover:bg-[#5d0925]/5 transition-all no-underline text-[#5d0925] font-bold uppercase shadow-sm group font-bold tracking-widest text-center"><span className="text-4xl block mb-6 group-hover:scale-110 transition-transform">📦</span><p className="text-[10px]">Order</p></a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
        <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
        <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      </div>
    </Router>
  );
}
