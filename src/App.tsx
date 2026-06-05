import React from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// --- Design Tokens ---

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

// --- Modal Utilities ---

const ModalWrapper = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-[#f5f2e9] rounded-lg p-10 shadow-2xl border border-[#c9a84c]/20 max-h-[90vh] overflow-y-auto"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-[#5d0925] hover:text-[#c9a84c]">✕</button>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-[#5d0925] mb-2">{title}</h2>
            <div className="w-16 h-[1px] bg-[#c9a84c] mx-auto"></div>
          </div>
          {children}
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

// --- Sections ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#story" },
    { name: "Reservations", href: "#reservations" },
    { name: "Locations", href: "#locations" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-6 md:px-8 h-20 ${
          isScrolled ? 'bg-[#f5f2e9] shadow-md h-16' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center">
          <img src="/logo.svg" alt="Bombay Bicycle Chef Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
        </div>
        
        <div className="hidden md:flex space-x-8 text-[#5d0925] font-sans font-medium uppercase text-xs tracking-[0.2em]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#c9a84c] transition-colors">{link.name}</a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenModal}
            className="hidden sm:block px-6 py-2 border border-[#c9a84c] bg-[#5d0925] text-[#faf8f3] font-sans text-xs uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#5d0925] rounded-sm transition-all duration-300"
          >
            Book a Table
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-[#5d0925] p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-[#f5f2e9] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#5d0925] p-2 text-2xl">✕</button>
            </div>
            
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#5d0925] font-serif text-3xl italic"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }}
                className="w-full py-4 bg-[#5d0925] text-[#faf8f3] font-sans text-sm uppercase tracking-widest rounded-sm mt-8"
              >
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#f5f2e9] overflow-hidden px-6 md:px-20 pt-32 pb-20">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#5d0925] leading-tight">
            From the Streets of <br />
            <span className="italic">Bombay</span> to Your Table
          </h1>
          <div className="w-32 h-[1px] bg-[#c9a84c] my-6 flex items-center justify-center mx-auto lg:mx-0 relative">
            <span className="absolute bg-[#f5f2e9] px-2 text-[#c9a84c] text-xl">❦</span>
          </div>
          <p className="text-[#5d0925] font-sans text-base md:text-lg mb-8 max-w-md italic opacity-80 mx-auto lg:mx-0">
            A culinary voyage through the heart of 1920s India, where spice meets storytelling.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button 
              onClick={onOpenModal}
              className="px-8 py-3 bg-[#5d0925] text-[#faf8f3] font-sans uppercase tracking-widest text-xs hover:bg-[#2a0d12] rounded-sm transition-colors"
            >
              Reserve a Table
            </button>
            <button className="px-8 py-3 border border-[#5d0925] text-[#5d0925] font-sans uppercase tracking-widest text-xs hover:bg-[#5d0925] hover:text-[#faf8f3] rounded-sm transition-colors">
              View Menu
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div 
            className="w-full max-w-[320px] sm:max-w-[400px] aspect-[3/4] md:h-[600px] overflow-hidden border-[8px] md:border-[12px] border-[#faf8f3] shadow-2xl"
            style={{ borderRadius: '50% 50% 0 0' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800" 
              alt="Indian Fine Dining" 
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div 
            initial={{ rotate: -15 }}
            animate={{ rotate: 15 }}
            transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
            className="absolute -bottom-6 -left-4 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#c9a84c] rounded-full flex flex-col items-center justify-center text-[#5d0925] font-serif border-4 border-[#faf8f3] shadow-lg z-0"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-tighter">Est.</span>
            <span className="text-xl sm:text-2xl font-bold">2008</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const StoryStrip = () => {
  return (
    <section className="py-20 bg-[#5d0925] text-[#faf8f3] text-center overflow-hidden relative">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[#c9a84c] opacity-30 text-8xl font-serif pointer-events-none">❝</div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-serif italic mb-16 relative z-10"
      >
        Every dish is a journey back to Bombay
      </motion.h2>
      
      <div className="grid grid-cols-3 max-w-4xl mx-auto gap-8">
        {[
          { label: 'Years of Spice', value: 15 },
          { label: 'Master Recipes', value: 120 },
          { label: 'Guests Served', value: '50k+' }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-serif text-[#c9a84c] mb-2">{stat.value}</span>
            <span className="text-xs uppercase tracking-[0.2em] opacity-70">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Mains");

  const categories = ["Starters", "Mains", "Desserts", "Drinks"];

  const dishes = {
    Starters: [
      { name: "Samosa Chaat", desc: "Crispy pastry with chickpeas & tamarind", price: "£6.95", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Seekh Kebab", desc: "Minced lamb with ginger & coriander", price: "£8.95", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Onion Bhaji", desc: "Golden fried onion fritters", price: "£5.95", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Papdi Chaat", desc: "Street-style crispy wafers with yoghurt", price: "£6.50", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" }
    ],
    Mains: [
      { name: "Chicken Tikka Masala", desc: "Tender chicken in rich tomato-cream sauce", price: "£14.95", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Lamb Rogan Josh", desc: "Slow-cooked lamb with Kashmiri spices", price: "£16.95", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Paneer Makhani", desc: "Cottage cheese in velvety butter sauce", price: "£12.95", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Dal Makhani", desc: "Black lentils slow cooked overnight", price: "£11.95", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" }
    ],
    Desserts: [
      { name: "Gulab Jamun", desc: "Soft milk dumplings in rose syrup", price: "£5.50", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Mango Kulfi", desc: "Traditional Indian ice cream", price: "£4.95", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Ras Malai", desc: "Cottage cheese in sweet saffron milk", price: "£5.95", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Gajar Halwa", desc: "Slow-cooked carrot pudding", price: "£5.50", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" }
    ],
    Drinks: [
      { name: "Mango Lassi", desc: "Yoghurt blended with Alphonso mango", price: "£4.50", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Masala Chai", desc: "Spiced Indian tea with milk", price: "£3.50", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Rose Sharbat", desc: "Chilled rose water drink", price: "£3.95", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Nimbu Pani", desc: "Fresh lime soda with mint", price: "£3.50", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400&h=300" }
    ]
  };

  return (
    <section id="menu" className="py-24 bg-[#faf8f3] px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#5d0925] mb-4">Our Heritage Menu</h2>
          <p className="text-[#c9a84c] uppercase tracking-widest text-[10px] mb-12">Crafted from the lanes of Old Bombay</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full border border-[#5d0925] text-xs font-sans uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat ? 'bg-[#5d0925] text-white' : 'bg-white text-[#5d0925] hover:bg-[#5d0925]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {dishes[activeCategory as keyof typeof dishes].map((dish) => (
              <motion.div
                key={dish.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#c9a84c]/30 rounded-sm overflow-hidden group shadow-sm hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#5d0925]/5 relative">
                  <motion.img 
                    whileHover={{ scale: 1.03 }}
                    src={dish.img} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400&h=300";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-[#5d0925] text-lg mb-1">{dish.name}</h3>
                  <p className="font-sans text-[#6b7280] text-[10px] uppercase tracking-wider truncate mb-4">{dish.desc}</p>
                  <div className="flex justify-between items-center pt-3 border-t border-[#c9a84c]/10">
                    <span className="font-sans font-bold text-[#c9a84c] text-sm">{dish.price}</span>
                    <button className="text-[#5d0925] font-sans text-[8px] uppercase tracking-widest font-bold hover:text-[#c9a84c] transition-colors">Add to Order</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-20">
           <p className="text-[#5d0925]/50 font-serif italic text-sm mb-6">Explore our full selection of over 120 traditional recipes</p>
           <button className="px-10 py-3 border border-[#5d0925] text-[#5d0925] font-sans uppercase text-[10px] tracking-[0.3em] hover:bg-[#5d0925] hover:text-white rounded-sm transition-all duration-500">
            View Full Digital Menu
           </button>
        </div>
      </div>
    </section>
  );
};

const AwardsSection = () => {
  const awards = [
    { org: "London Curry Awards", title: "Takeaway of the Year", year: "2018", img: "/2018.webp" },
    { org: "London Curry Awards", title: "Takeaway of the Year", year: "2019", img: "/2019.webp" },
    { org: "British Takeaway Awards", title: "Best Takeaway in Central London", year: "2018", img: "/british.webp" }
  ];

  return (
    <section className="py-24 bg-[#5d0925] px-8 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Award-Winning Since 2018</h2>
          <p className="text-[#c9a84c] font-sans italic mb-20 text-lg">Recognised as London's finest Indian takeaway</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-sm border border-[#c9a84c] flex flex-col items-center shadow-xl group"
            >
              <div className="h-32 w-full flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={award.img} alt={award.org} className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-sans font-bold text-[#1a0a0e] text-[10px] uppercase tracking-[0.2em] mb-3 leading-loose">
                {award.org} <br />
                <span className="text-[#5d0925]">{award.title}</span>
              </h4>
              <div className="w-12 h-[1px] bg-[#c9a84c]/30 mb-3"></div>
              <span className="text-[#c9a84c] font-bold font-serif text-lg">{award.year}</span>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-white font-serif italic text-xl opacity-90"
        >
          "Voted best Indian takeaway in London — two years running"
        </motion.p>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-[#f5f2e9] flex items-center overflow-hidden">
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto px-8 gap-20 items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="w-full h-[600px] border-[20px] border-[#faf8f3] shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="The Chef" />
          </div>
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 bg-[#5d0925] p-10 text-[#faf8f3] max-w-xs shadow-2xl">
            <p className="font-serif italic text-xl">"Spice is not just taste; it's a memory from my grandfather's kitchen in Bandra."</p>
            <p className="text-xs uppercase tracking-widest mt-4 text-[#c9a84c]">— Chef Vikram Singh</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#5d0925] mb-8">The Man Behind the Bicycle</h2>
          <div className="space-y-6 text-[#5d0925] font-sans opacity-80 leading-relaxed">
            <p>Our story began on a vintage bicycle traversing the winding lanes of Old Bombay. Chef Vikram carried more than just ingredients; he carried the secrets of a bygone era.</p>
            <p>Today, Bombay Bicycle Chef stands as a tribute to that nostalgic journey. We source spices from the same old markets and cook with the same slow, colonial-era patience that defines premium Indian hospitality.</p>
          </div>
          <button className="mt-10 px-8 py-3 bg-[#c9a84c] text-[#5d0925] font-sans uppercase text-xs tracking-widest hover:bg-[#5d0925] hover:text-[#faf8f3] rounded-sm transition-all">
            Read Full History
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const LocationsSection = () => {
  const [activeLoc, setActiveLoc] = useState(locations[0]);

  return (
    <section id="locations" className="py-24 bg-[#faf8f3] px-8 border-t border-[#5d0925]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#5d0925] mb-4">Our Heritage Spots</h2>
          <p className="text-[#c9a84c] uppercase tracking-widest text-xs">Find us across London</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            {locations.map((loc) => (
              <motion.div
                key={loc.name}
                onClick={() => setActiveLoc(loc)}
                className={`p-6 border cursor-pointer transition-all duration-300 ${
                  activeLoc.name === loc.name 
                  ? 'bg-[#5d0925] border-[#5d0925] text-[#faf8f3]' 
                  : 'bg-white border-[#5d0925]/10 text-[#5d0925] hover:border-[#5d0925]/40'
                }`}
              >
                <h3 className="font-serif text-xl mb-2">{loc.name}</h3>
                <p className="text-xs opacity-70 mb-4 font-sans">{loc.address}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-widest">{loc.phone}</span>
                  <a 
                    href={loc.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-[10px] border-b uppercase tracking-tighter ${activeLoc.name === loc.name ? 'border-[#c9a84c] text-[#c9a84c]' : 'border-[#5d0925] text-[#5d0925]'}`}
                  >
                    View Store Menu →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-2 h-[500px] bg-[#f5f2e9] border border-[#5d0925]/10 relative group grayscale-[0.3] contrast-[1.1] brightness-[0.95]">
             <iframe
              title="Location Map"
              src={activeLoc.coords}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-[#faf8f3]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reservations = () => {
  return (
    <section id="reservations" className="bg-[#2a0d12] py-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div className="text-[#faf8f3]">
          <h2 className="text-5xl font-serif mb-12">Book Your Table</h2>
          <div className="space-y-10">
            {locations.map((loc) => (
              <div key={loc.name} className="flex items-start space-x-4">
                <span className="text-[#c9a84c] text-xl mt-1">⟡</span>
                <div>
                  <h4 className="uppercase tracking-widest text-[10px] mb-2 text-[#c9a84c] font-bold">{loc.name}</h4>
                  <p className="font-serif text-lg leading-tight mb-1">{loc.address}</p>
                  <p className="font-sans text-xs opacity-60 tracking-widest uppercase">Direct: {loc.phone}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-[#faf8f3]/10">
             <h4 className="uppercase tracking-widest text-[10px] mb-2 opacity-50">Opening Hours</h4>
             <p className="font-serif text-lg">Mon - Sun: 12:00 PM - 11:30 PM</p>
          </div>
        </div>

        <div className="bg-[#1a0a0e] p-10 md:p-16 border border-[#c9a84c]/30 shadow-2xl relative overflow-hidden group">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c9a84c]/50"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c9a84c]/50"></div>
          
          <div className="relative z-10">
            <h3 className="text-white font-serif text-2xl mb-8 tracking-wide text-center">Reservation Details</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b border-[#c9a84c]/20 py-3 text-[#faf8f3] font-sans text-xs tracking-[0.2em] outline-none focus:border-[#c9a84c] transition-all" />
                  <label htmlFor="name" className="absolute left-0 top-3 text-[#faf8f3]/30 font-sans text-[10px] tracking-[0.2em] uppercase transition-all peer-focus:-top-4 peer-focus:text-[#c9a84c] peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#c9a84c] peer-[:not(:placeholder-shown)]:text-[8px]">Full Name</label>
                </div>
                <div className="relative">
                  <input type="text" id="phone" placeholder=" " className="peer w-full bg-transparent border-b border-[#c9a84c]/20 py-3 text-[#faf8f3] font-sans text-xs tracking-[0.2em] outline-none focus:border-[#c9a84c] transition-all" />
                  <label htmlFor="phone" className="absolute left-0 top-3 text-[#faf8f3]/30 font-sans text-[10px] tracking-[0.2em] uppercase transition-all peer-focus:-top-4 peer-focus:text-[#c9a84c] peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#c9a84c] peer-[:not(:placeholder-shown)]:text-[8px]">Phone Number</label>
                </div>
              </div>

              <div className="relative">
                <select className="peer w-full bg-transparent border-b border-[#c9a84c]/20 py-3 text-[#faf8f3] font-sans text-xs tracking-[0.2em] outline-none focus:border-[#c9a84c] appearance-none cursor-pointer">
                  <option className="bg-[#1a0a0e] text-[#faf8f3]/30" disabled selected>SELECT LOCATION</option>
                  {locations.map(loc => (
                    <option key={loc.name} className="bg-[#1a0a0e]">{loc.name.toUpperCase()}</option>
                  ))}
                </select>
                <div className="absolute right-0 top-4 text-[#c9a84c] pointer-events-none text-[8px]">▼</div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="relative">
                  <input type="date" className="w-full bg-transparent border-b border-[#c9a84c]/20 py-3 text-[#faf8f3] font-sans text-xs tracking-[0.2em] outline-none focus:border-[#c9a84c] [color-scheme:dark]" />
                  <span className="absolute -top-4 left-0 text-[#c9a84c] text-[8px] tracking-[0.2em] uppercase">Preferred Date</span>
                </div>
                <div className="relative">
                  <input type="time" className="w-full bg-transparent border-b border-[#c9a84c]/20 py-3 text-[#faf8f3] font-sans text-xs tracking-[0.2em] outline-none focus:border-[#c9a84c] [color-scheme:dark]" />
                  <span className="absolute -top-4 left-0 text-[#c9a84c] text-[8px] tracking-[0.2em] uppercase">Preferred Time</span>
                </div>
              </div>

              <div className="relative">
                <input type="number" id="guests" placeholder=" " className="peer w-full bg-transparent border-b border-[#c9a84c]/20 py-3 text-[#faf8f3] font-sans text-xs tracking-[0.2em] outline-none focus:border-[#c9a84c] transition-all" />
                <label htmlFor="guests" className="absolute left-0 top-3 text-[#faf8f3]/30 font-sans text-[10px] tracking-[0.2em] uppercase transition-all peer-focus:-top-4 peer-focus:text-[#c9a84c] peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#c9a84c] peer-[:not(:placeholder-shown)]:text-[8px]">Number of Guests</label>
              </div>

              <div className="relative">
                <textarea id="requests" placeholder=" " className="peer w-full bg-transparent border-b border-[#c9a84c]/20 py-3 text-[#faf8f3] font-sans text-xs tracking-[0.2em] outline-none focus:border-[#c9a84c] h-20 resize-none transition-all"></textarea>
                <label htmlFor="requests" className="absolute left-0 top-3 text-[#faf8f3]/30 font-sans text-[10px] tracking-[0.2em] uppercase transition-all peer-focus:-top-4 peer-focus:text-[#c9a84c] peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#c9a84c] peer-[:not(:placeholder-shown)]:text-[8px]">Special Requests</label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-5 bg-[#c9a84c] text-[#1a0a0e] font-sans uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-[#faf8f3] rounded-sm transition-all duration-500 shadow-lg"
              >
                Confirm Reservation
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Elide Zanardi", role: "International Traveller", text: "Amazing experience and unbelievable service. I flew all the way from Italia and this was the place I was told to go to first! Delightful food - do yourself a favour and eat here." },
    { name: "Lucy Page", role: "Local Guide", text: "The food from Bombay Bicycle Chef is honestly so delicious, I would eat it every day if I could. My boyfriend and I order from here frequently. Veg favourites: Dal Makhani, Chilli Paneer & Mutter Paneer." },
    { name: "Anita Desai", role: "Food Critic", text: "The most authentic colonial flavors in the city. The lamb is breathtaking. A true gem of Mumbai in the heart of London." }
  ];

  return (
    <section className="py-24 bg-[#f5f2e9] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-10 border border-[#5d0925]/10 bg-[#faf8f3] shadow-sm flex flex-col items-center text-center"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, j) => <span key={j} className="text-[#c9a84c]">★</span>)}
              </div>
              <p className="font-serif italic text-[#5d0925] text-lg mb-8 leading-relaxed">"{rev.text}"</p>
              <h4 className="text-[#5d0925] font-sans font-bold uppercase tracking-widest text-[10px]">{rev.name}</h4>
              <span className="text-[#c9a84c] text-[10px] uppercase tracking-widest mt-1">{rev.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Modals ---

const ReservationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-[420px] bg-[#f5f2e9] rounded-lg p-8 shadow-2xl border border-[#c9a84c]/20">
          <button onClick={onClose} className="absolute top-4 right-4 text-[#5d0925]">✕</button>
          <div className="text-center">
            <h2 className="text-2xl font-serif text-[#5d0925] mb-6">How would you like to dine?</h2>
            <div className="grid grid-cols-2 gap-4">
              <div onClick={() => { onClose(); document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' }); }} className="cursor-pointer border border-[#5d0925]/40 p-6 rounded-md hover:bg-[#5d0925]/5 transition-all">
                <span className="text-3xl block mb-2">🍽</span>
                <p className="text-[10px] uppercase tracking-widest font-bold">Reserve</p>
              </div>
              <a href="#" className="border border-[#5d0925]/40 p-6 rounded-md hover:bg-[#5d0925]/5 transition-all no-underline text-[#5d0925]">
                <span className="text-3xl block mb-2">📦</span>
                <p className="text-[10px] uppercase tracking-widest font-bold">Order Online</p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const AboutModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <ModalWrapper isOpen={isOpen} onClose={onClose} title="About Us">
    <div className="space-y-4 text-[#5d0925] font-sans text-sm leading-relaxed">
      <p>Welcome to our Indian restaurant, where we serve up a delicious blend of traditional and modern Indian dishes. Our menu features a wide variety of options, from classic curries and tandoori dishes to regional specialties and contemporary twists on favourites.</p>
      <p>We use only the freshest and highest-quality ingredients, and our skilled chefs take pride in creating flavourful and authentic dishes that will transport your taste buds straight to India. Whether you're in the mood for a quick and casual meal or a more formal dining experience, our warm and welcoming atmosphere is the perfect spot for any occasion. Come and join us for a taste of India that you won't forget!</p>
    </div>
  </ModalWrapper>
);

const CareersModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <ModalWrapper isOpen={isOpen} onClose={onClose} title="Join Our Kitchen">
    <form className="space-y-4">
      <input type="text" placeholder="FULL NAME" className="w-full bg-white border border-[#5d0925]/10 p-3 rounded-sm text-[10px] tracking-widest" />
      <input type="email" placeholder="EMAIL" className="w-full bg-white border border-[#5d0925]/10 p-3 rounded-sm text-[10px] tracking-widest" />
      <textarea placeholder="EXPERIENCE" className="w-full bg-white border border-[#5d0925]/10 p-3 rounded-sm text-[10px] tracking-widest h-32"></textarea>
      <button className="w-full py-4 bg-[#5d0925] text-white uppercase text-[10px] font-bold tracking-[0.2em] rounded-sm">Submit</button>
    </form>
  </ModalWrapper>
);

const FranchiseModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <ModalWrapper isOpen={isOpen} onClose={onClose} title="Partner With Us">
    <form className="space-y-4">
      <input type="text" placeholder="NAME / COMPANY" className="w-full bg-white border border-[#5d0925]/10 p-3 rounded-sm text-[10px] tracking-widest" />
      <input type="text" placeholder="LOCATION" className="w-full bg-white border border-[#5d0925]/10 p-3 rounded-sm text-[10px] tracking-widest" />
      <button className="w-full py-4 bg-[#c9a84c] text-[#1a0a0e] uppercase text-[10px] font-bold tracking-[0.2em] rounded-sm">Request Disclosure</button>
    </form>
  </ModalWrapper>
);

const TermsModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <ModalWrapper isOpen={isOpen} onClose={onClose} title="Terms & Conditions">
    <div className="space-y-4 text-[#5d0925] font-sans text-xs opacity-80 h-64 overflow-y-auto pr-2">
      <p>Delivery can take up to 45 mins. Min spend £10. Comp Poppadums over £15. Orders non-refundable.</p>
    </div>
  </ModalWrapper>
);

const PrivacyModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <ModalWrapper isOpen={isOpen} onClose={onClose} title="Privacy Policy">
    <div className="space-y-4 text-[#5d0925] font-sans text-xs opacity-80 h-64 overflow-y-auto pr-2">
      <p>We prioritize your privacy and collect only necessary data to process your orders.</p>
    </div>
  </ModalWrapper>
);

// --- Footer ---

const Footer = ({ onOpenModal, onOpenCareers, onOpenFranchise, onOpenTerms, onOpenPrivacy, onOpenAbout }: any) => {
  const footerLinks = [
    { title: "Links", links: ["About us", "Career", "Franchise", "Contact"] },
    { title: "Legal", links: ["Privacy Policy", "Order", "Feedback", "Terms & Condition"] },
    { title: "Locations", links: ["Battersea", "Kilburn", "Balham"] }
  ];

  return (
    <footer className="bg-[#1a0a0e] py-20 px-8 border-t border-[#c9a84c]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <img src="/logo.svg" alt="Logo" className="w-20 h-20 object-contain mb-6 brightness-0 invert opacity-80" />
            <p className="text-[#faf8f3]/50 text-[10px] uppercase tracking-widest leading-loose">A legacy of spice since 2008.</p>
          </div>
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h4 className="text-[#c9a84c] font-sans uppercase text-[10px] tracking-[0.3em] mb-6">{column.title}</h4>
              <ul className="text-[#faf8f3] space-y-3 font-sans text-[10px] uppercase tracking-widest opacity-80">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <button onClick={() => {
                      if (link === "About us") onOpenAbout();
                      else if (link === "Career") onOpenCareers();
                      else if (link === "Franchise") onOpenFranchise();
                      else if (link === "Order") onOpenModal();
                      else if (link === "Privacy Policy") onOpenPrivacy();
                      else if (link === "Terms & Condition") onOpenTerms();
                      else if (["Battersea", "Kilburn", "Balham"].includes(link)) document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
                    }} className="hover:text-[#c9a84c] transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-[#faf8f3]/10 flex flex-col md:flex-row justify-between items-center text-[#faf8f3]/30 text-[9px] uppercase tracking-[0.4em] gap-4">
          <span>© 2026 Bombay Bicycle Chef.</span>
          <span>Powered by <a href="https://digipi.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors underline underline-offset-4 decoration-[#c9a84c]/30">digipi.uk</a></span>
        </div>
      </div>
    </footer>
  );
};

// --- App ---

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="bg-[#f5f2e9] selection:bg-[#5d0925] selection:text-[#faf8f3]">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#c9a84c] z-[60] origin-left" style={{ scaleX: useScroll().scrollYProgress }} />
      
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <StoryStrip />
      <MenuSection />
      <AwardsSection />
      <StorySection />
      <LocationsSection />
      <Reservations />
      <Testimonials />
      
      <Footer 
        onOpenModal={() => setIsModalOpen(true)} 
        onOpenCareers={() => setIsCareersOpen(true)} 
        onOpenFranchise={() => setIsFranchiseOpen(true)} 
        onOpenTerms={() => setIsTermsOpen(true)} 
        onOpenPrivacy={() => setIsPrivacyOpen(true)} 
        onOpenAbout={() => setIsAboutOpen(true)} 
      />

      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <CareersModal isOpen={isCareersOpen} onClose={() => setIsCareersOpen(false)} />
      <FranchiseModal isOpen={isFranchiseOpen} onClose={() => setIsFranchiseOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
};

export default App;
