"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Coffee, MapPin, Phone, Star, Clock, UtensilsCrossed, Navigation, ArrowRight, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

// Content Data
const MENU_ITEMS = [
  { name: "Shahi Chai", description: "Our signature royal tea, brewed to perfection", price: "₹20", img: "seed/tea" },
  { name: "Adrak Chai & Fries", description: "The classic combo: crispy fries with ginger tea", price: "₹90", img: "seed/fries" },
  { name: "Bell Cafe Special Maggie", description: "A unique twist on everyone's favorite comfort food", price: "₹60", img: "seed/noodles" },
  { name: "Paneer Manchurian", description: "Crispy paneer tossed in tangy sauces", price: "₹120", img: "seed/paneer" },
  { name: "Cold Coffee", description: "Thick, creamy, and refreshing", price: "₹80", img: "seed/coldcoffee" },
  { name: "Veg Biryani", description: "Aromatic basmati rice cooked with fresh veggies and spices", price: "₹150", img: "seed/biryani" },
  { name: "Chai and Bun", description: "The ultimate classic snack for any time of the day", price: "₹30", img: "seed/bun" },
  { name: "KitKat Shake", description: "Rich chocolate shake blended with crunchy KitKat", price: "₹100", img: "seed/milkshake" },
];

const REVIEWS = [
  { text: "Taste & Hygiene To The Fullest , I had fries , Veg Cheese Grilled Sanwhiches... amazing presentation, amazing taste.. A Must TRY from my Side.", author: "Partha Varma", rating: 5, date: "4 years ago" },
  { text: "My favourite spot must try ginger tea. The shop owner is so nice and gentle man, you will get the home like treatment", author: "Saumya Pandey", rating: 5, date: "3 months ago" },
  { text: "I only have the photo of chai but overall service and food is very delicious and tasty. The owners are very kind and polite.", author: "Shikhar Srivastava", rating: 5, date: "2 years ago" },
  { text: "Nice ambience A good place to visit toh have chai and mini breakfast menus", author: "Local Guide", rating: 5, date: "Recent" },
  { text: "Behaviour of Owner and other staff is very nice.", author: "Visitor", rating: 5, date: "Recent" },
];

// Reusable Components
function Button({ children, variant = "primary", className = "", ...props }: any) {
  const baseStyle = "inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-200 border-2 border-[#1A1A1A] rounded-none";
  const variants = {
    primary: "bg-[#D97706] text-white hover:bg-[#1A1A1A] px-8 py-4",
    outline: "bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-8 py-4",
    ghost: "border-none text-[#1A1A1A] hover:bg-black/5 px-4 py-2",
  };
  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans selection:bg-[#D97706] selection:text-white border-[12px] border-[#1A1A1A] bg-[#F9F7F2] text-[#1A1A1A] relative flex flex-col min-h-screen">
      
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 transition-all duration-300 bg-[#F9F7F2] border-b-4 border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="bg-[#1A1A1A] text-white p-2">
                <Coffee size={24} />
              </div>
              <span className="font-sans text-3xl font-black tracking-tighter uppercase text-[#1A1A1A]">Bell Cafe</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[#1A1A1A] hover:text-[#D97706] font-bold uppercase tracking-widest text-sm transition-colors">About</a>
              <a href="#menu" className="text-[#1A1A1A] hover:text-[#D97706] font-bold uppercase tracking-widest text-sm transition-colors">Menu</a>
              <a href="#reviews" className="text-[#1A1A1A] hover:text-[#D97706] font-bold uppercase tracking-widest text-sm transition-colors">Reviews</a>
              <a href="#location" className="text-[#1A1A1A] hover:text-[#D97706] font-bold uppercase tracking-widest text-sm transition-colors">Location</a>
              <Button onClick={() => window.location.href='tel:08090938373'} className="shadow-[4px_4px_0px_#1A1A1A] !py-3">
                <Phone size={18} className="mr-2" /> 080909 38373
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white p-2 border-2 border-transparent transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#F9F7F2] border-b-4 border-[#1A1A1A]"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-bold uppercase tracking-widest text-sm border-2 border-transparent">About</a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-bold uppercase tracking-widest text-sm border-2 border-transparent">Menu</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-bold uppercase tracking-widest text-sm border-2 border-transparent">Reviews</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-bold uppercase tracking-widest text-sm border-2 border-transparent">Location</a>
              <div className="pt-4 px-4">
                <Button className="w-full" onClick={() => window.location.href='tel:08090938373'}>
                  <Phone size={18} className="mr-2" /> 080909 38373
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden border-b-4 border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] font-bold uppercase tracking-widest text-xs mb-6 shadow-[4px_4px_0px_#1A1A1A]">
                <Star size={16} className="fill-[#D97706] text-[#D97706]" />
                <span>4.6 • 191 Reviews on Maps</span>
              </div>
              <h1 className="font-sans text-6xl lg:text-[110px] font-black uppercase text-[#1A1A1A] leading-[0.85] tracking-tighter mb-6">
                Crunch Meets <br /> Comfort
                <span className="text-[#D97706] font-serif italic text-3xl lg:text-5xl tracking-normal mt-4 block">& Tradition Meets Taste</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#1A1A1A]/80 font-medium mb-8 max-w-xl leading-relaxed">
                Experience home-like treatment and the finest Shahi Chai in Lucknow. From classic Bell Cafe Special Maggie to crispy French Fries with our signature Adrak Chai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Menu
                </Button>
                <Button variant="outline" onClick={() => window.open('https://maps.google.com/?q=Bell+Cafe+Rajajipuram+Lucknow', '_blank')}>
                  <Navigation size={18} className="mr-2" /> Get Directions
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-[#1A1A1A] font-bold uppercase tracking-widest flex-wrap">
                <div className="flex items-center gap-2 border-2 border-[#1A1A1A] bg-white px-4 py-2 shadow-[2px_2px_0px_#1A1A1A]">
                  <Clock size={16} className="text-[#D97706]" />
                  <span className="text-xs">10 AM - 10 PM</span>
                </div>
                <div className="flex items-center gap-2 border-2 border-[#1A1A1A] bg-white px-4 py-2 shadow-[2px_2px_0px_#1A1A1A]">
                  <UtensilsCrossed size={16} className="text-[#D97706]" />
                  <span className="text-xs">Dine-in / Takeaway / Delivery</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative lg:h-[600px] h-[400px] w-full border-4 border-[#1A1A1A] overflow-hidden shadow-[12px_12px_0px_#1A1A1A] bg-white"
            >
              <Image 
                src="https://picsum.photos/seed/cafe/1200/1600" 
                alt="Cozy atmosphere at Bell Cafe"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About/Vibe Section */}
      <section id="about" className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden border-b-4 border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-sans text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-8 bg-[#D97706] inline-block px-4 py-2 border-4 border-white shadow-[8px_8px_0px_white]">More Than <br /> Just a Cafe</h2>
            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed mb-16 border-l-8 border-[#D97706] pl-6 text-left">
              &quot;My favourite spot. The shop owner is so nice and gentle man, you will get the home like treatment.&quot;
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              <div className="bg-[#F9F7F2] p-8 border-4 border-[#1A1A1A] text-[#1A1A1A] shadow-[8px_8px_0px_#D97706]">
                <Coffee className="text-[#1A1A1A] mb-6" size={48} />
                <h3 className="font-black text-2xl uppercase tracking-tighter mb-4">Finest Brews</h3>
                <p className="text-[#1A1A1A]/80 font-bold">From our signature Shahi Chai to refreshing Cold Coffee, crafted with love.</p>
              </div>
              <div className="bg-[#F9F7F2] p-8 border-4 border-[#1A1A1A] text-[#1A1A1A] shadow-[8px_8px_0px_#D97706]">
                <UtensilsCrossed className="text-[#1A1A1A] mb-6" size={48} />
                <h3 className="font-black text-2xl uppercase tracking-tighter mb-4">Comfort Food</h3>
                <p className="text-[#1A1A1A]/80 font-bold">Special Maggie, Veg Biryani, and Paneer Manchurian to satisfy your cravings.</p>
              </div>
              <div className="bg-[#F9F7F2] p-8 border-4 border-[#1A1A1A] text-[#1A1A1A] shadow-[8px_8px_0px_#D97706]">
                <Star className="text-[#1A1A1A] mb-6" size={48} />
                <h3 className="font-black text-2xl uppercase tracking-tighter mb-4">Great Ambience</h3>
                <p className="text-[#1A1A1A]/80 font-bold">A perfect, hygienic spot to hang out, relax. Rated 4.6 by 190+ happy guests.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#F9F7F2] border-b-4 border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-5xl md:text-7xl font-black uppercase text-[#1A1A1A] tracking-tighter mb-4">Popular Menu</h2>
            <p className="text-[#1A1A1A]/70 font-bold text-xl max-w-2xl mx-auto uppercase tracking-widest">
              Discover our most loved dishes and beverages. Handpicked favorites from our regular guests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MENU_ITEMS.map((item, idx) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white border-4 border-[#1A1A1A] shadow-[8px_8px_0px_#1A1A1A] hover:translate-y-1 hover:shadow-[4px_4px_0px_#1A1A1A] transition-all duration-200"
              >
                <div className="relative h-48 w-full overflow-hidden border-b-4 border-[#1A1A1A]">
                  <Image 
                    src={`https://picsum.photos/${item.img}/800/600`}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-[#D97706] text-white border-2 border-[#1A1A1A] px-4 py-1 font-black text-lg">
                    {item.price}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-black uppercase text-xl text-[#1A1A1A] mb-2">{item.name}</h3>
                  <p className="text-[#1A1A1A]/80 font-bold text-sm line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button variant="outline" className="shadow-[8px_8px_0px_#1A1A1A]">
               View Full Menu <ArrowRight size={20} className="ml-2" />
             </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-[#1A1A1A] text-white border-b-4 border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 flex flex-col items-center">
             <h2 className="font-sans text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-4">Loved by Lucknow</h2>
             <div className="flex items-center justify-center gap-2 bg-[#F9F7F2] text-[#1A1A1A] border-4 border-[#D97706] px-6 py-2 mt-4 shadow-[8px_8px_0px_#D97706]">
                <Star className="fill-[#D97706] text-[#D97706]" size={36} />
                <span className="font-black text-4xl">4.6</span>
             </div>
             <p className="text-white/70 font-bold uppercase tracking-widest mt-6">Based on 191+ reviews</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#F9F7F2] text-[#1A1A1A] p-8 border-4 border-[#1A1A1A] shadow-[8px_8px_0px_white] flex flex-col"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="fill-[#1A1A1A] text-[#1A1A1A]" size={20} />
                  ))}
                </div>
                <p className="text-[#1A1A1A] font-bold text-lg leading-relaxed mb-6">&quot;{review.text}&quot;</p>
                <div className="mt-auto flex items-center justify-between border-t-4 border-[#1A1A1A] pt-4">
                  <p className="font-black uppercase">{review.author}</p>
                  <p className="text-sm font-bold opacity-60 uppercase">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Footer */}
      <footer id="location" className="bg-[#F9F7F2] text-[#1A1A1A] pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#1A1A1A] text-white p-2">
                  <Coffee size={24} />
                </div>
                <span className="font-sans font-black uppercase tracking-tighter text-3xl">Bell Cafe</span>
              </div>
              <p className="text-[#1A1A1A]/80 font-bold mb-6">
                Where Crunch Meets Comfort and Tradition Meets Taste. Your cozy neighborhood cafe in Lucknow.
              </p>
              <div className="flex gap-4">
                <p className="px-3 py-1 bg-[#1A1A1A] text-white font-bold uppercase text-xs tracking-widest">₹1–200 per person</p>
              </div>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-tighter text-2xl mb-6">Contact Us</h4>
              <div className="space-y-4 text-[#1A1A1A] font-bold">
                <p className="flex items-start gap-3">
                  <MapPin className="top-1 relative flex-shrink-0 text-[#D97706]" size={20} />
                  <span>S83, 16, Block D, Rajajipuram,<br />Lucknow, Uttar Pradesh 226017</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-[#D97706]" size={20} />
                  <span>080909 38373</span>
                </p>
                <p className="flex items-center gap-3 mt-6">
                  <Clock className="text-[#D97706]" size={20} />
                  <span>Open today: 10 am - 10 pm</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-tighter text-2xl mb-6">Find Us</h4>
              <div className="w-full h-48 bg-black border-4 border-[#1A1A1A] shadow-[8px_8px_0px_#D97706] relative">
                {/* Visual Map Placeholder, user can link to actual map */}
                <Image 
                  src="https://picsum.photos/seed/map/600/400"
                  alt="Map Location"
                  fill
                  className="object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="primary" className="shadow-[4px_4px_0px_#1A1A1A] border-4 border-[#1A1A1A] !py-3" onClick={() => window.open('https://maps.google.com/?q=Bell+Cafe+Rajajipuram+Lucknow', '_blank')}>
                    Open in Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t-4 border-[#1A1A1A] pt-8 flex flex-col md:flex-row items-center justify-between text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/80">
            <p>© {new Date().getFullYear()} Bell Cafe. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#D97706] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D97706] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
