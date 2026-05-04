import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Code2, Brain, Rocket, Terminal, Database, Bot, 
  Layers, Cpu, ChevronRight, Github, Linkedin, Mail,
  ExternalLink, Sparkles, Zap, Globe, MessageSquare, Phone,
  Pointer, PlayCircle, Code
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const PROJECTS = [
  {
    title: "NeuroGen platform",
    description: "Advanced LLM orchestration platform built with React, Node.js, and Firebase.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "LLMs", "Firebase"],
  },
  {
    title: "SynthVision Analytics",
    description: "Real-time CV dashboard for retail analytics to generate heatmap data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["OpenCV", "Python", "WebGL"],
  },
  {
    title: "Aura Smart Assistant",
    description: "Voice-activated AI assistant for smart homes with natural language intent recognition.",
    image: "https://images.unsplash.com/photo-1583573636246-18cb2246697f?q=80&w=800&auto=format&fit=crop",
    tags: ["NLP", "Voice", "IoT"],
  },
  {
    title: "FinMatrix Predictive",
    description: "AI-driven financial forecasting dashboard with real-time market sentiment analysis.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    tags: ["FinTech", "ML", "D3.js"],
  },
  {
    title: "HoloWeb Portfolio",
    description: "Immersive 3D web experience using Three.js and WebGL for interactive storytelling.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    tags: ["Three.js", "WebGL", "Creative"],
  }
];

const SKILLS = [
  { name: "Saif Hani", level: 100, category: "Languages" },
  { name: "TypeScript", level: 95, category: "Languages" },
  { name: "Python", level: 90, category: "Languages" },
  { name: "Frontend Architecture", level: 95, category: "Frontend" },
  { name: "React & Next.js", level: 90, category: "Frontend" },
  { name: "UI/UX & 3D Motion", level: 92, category: "Frontend" },
  { name: "AI Prompt Engineering", level: 98, category: "AI" },
  { name: "LLM Orchestration", level: 88, category: "AI" },
  { name: "Firebase & Serverless", level: 85, category: "Tools" },
];

const SERVICES = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Architect",
    description: "Designing agentic workflows, LLM orchestration, and generative AI pipelines."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Frontend Engineering",
    description: "Building scalable, high-performance web applications with React and advanced state management."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "UI/UX & 3D Design",
    description: "Crafting premium user interfaces with WebGL, smooth motion, and pixel-perfect precision."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "System Optimization",
    description: "Performance tuning, caching strategies, and reducing latency for heavy visual web-apps."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Full-Stack Integrations",
    description: "Connecting complex AI backends with seamless real-time frontends using WebSockets."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Prototyping",
    description: "Turning abstract concepts into functional MVP products in record time to test market fit."
  }
];

function ScrollRocket() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0.8, 0, 0.8, 0, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  
  return (
    <motion.div 
      style={{ opacity, y, rotate, scale }}
      className="fixed top-1/4 right-5 md:right-20 w-64 h-64 md:w-96 md:h-96 z-0 pointer-events-none"
    >
      <img 
        src="https://i.postimg.cc/R0cVpmTn/download-(29)-(1).png" 
        alt="Rocket"
        className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(99,102,241,0.6)]"
      />
    </motion.div>
  );
}

function LunarBackground() {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3}px`,
      animationDuration: `${3 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: 0.1 + Math.random() * 0.5,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {stars.map(star => (
        <div 
          key={star.id} 
          className="absolute bg-white rounded-full animate-pulse" 
          style={{ 
            left: star.left, 
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay
          }}
        />
      ))}
      
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-indigo-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[60rem] h-[60rem] bg-gray-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
    </div>
  );
}

function NavBar({ activeSection }: { activeSection: string }) {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-800/40 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:scale-105 transition-transform">
            <span className="text-white text-xl font-display font-black tracking-tighter">SA</span>
          </div>
          <div className="flex flex-col">
            <span className="leading-none text-white tracking-widest text-sm font-black font-display uppercase group-hover:text-indigo-300 transition-colors">SAIF HANI</span>
            <span className="leading-none text-[10px] text-indigo-400 font-mono tracking-widest uppercase mt-1.5 opacity-80">SA Organization</span>
          </div>
        </a>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors relative hover:text-indigo-400
                ${activeSection === link.name.toLowerCase() ? 'text-indigo-400' : 'text-gray-400'}
              `}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-full glass-panel hover:bg-white/10 transition-colors text-sm font-medium uppercase tracking-wider relative overflow-hidden group">
          <span className="relative z-10 transition-colors group-hover:text-white">Hire Me</span>
          <div className="absolute inset-0 bg-indigo-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>
      </div>
    </nav>
  );
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(interval);
        }
      }, 70);
    };

    timeoutId = setTimeout(startTyping, delay);
    return () => clearTimeout(timeoutId);
  }, [text, delay]);

  return <span className="inline-block relative">
    {displayText}
    <motion.span 
      animate={{ opacity: [1, 0] }} 
      transition={{ repeat: Infinity, duration: 0.8 }}
      className="inline-block w-[0.5ch] h-[1em] bg-indigo-500 ml-1 translate-y-1"
    />
  </span>;
}

function SaifHaniTitle() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative w-full flex justify-center items-center py-4 md:py-10 z-10"
    >
      <svg viewBox="0 0 1000 300" className="w-full h-auto drop-shadow-[0_0_30px_rgba(167,139,250,0.6)] max-w-5xl mx-auto overflow-visible">
        <defs>
          <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#e0e7ff" />
            <stop offset="60%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <filter id="super-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path 
          id="text-curve"
          d="M 50,220 Q 300,100 500,180 T 950,160" 
          fill="none" stroke="none" 
        />

        <text 
          textAnchor="middle" 
          fill="url(#text-gradient)" 
          style={{ fontSize: '160px', fontFamily: "'Great Vibes', cursive", letterSpacing: '2px' }}
          filter="url(#super-glow)"
        >
          <textPath href="#text-curve" startOffset="50%">
            Saif Hani
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-indigo-500/30"
        >
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-medium tracking-wider text-indigo-200">Available for new opportunities</span>
        </motion.div>

        <SaifHaniTitle />
        
        <div className="h-24 md:h-20 mb-10 overflow-hidden mt-6">
          <p className="text-xl md:text-3xl text-gray-400 font-light font-display tracking-wide">
             Engineering the future at <br className="md:hidden" />
             <span className="font-semibold text-white/90">
               <TypewriterText text="SA Organization." delay={1000} />
             </span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform active:scale-95">
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider text-sm">
              View Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-indigo-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeading({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="h-px w-12 bg-indigo-500" />
        <span className="text-indigo-400 uppercase tracking-widest text-sm font-semibold">{subtitle}</span>
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-4xl md:text-6xl font-display font-bold tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="System Architecture." subtitle="Who I Am" />
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed"
          >
            <p>
              I am a hybrid engineer operating at the intersection of <strong className="text-white font-medium">Artificial Intelligence</strong> and <strong className="text-white font-medium">Frontend Development</strong>. 
            </p>
            <p>
              I specialize in translating complex machine learning capabilities into intuitive, pixel-perfect user interfaces. By blending advanced prompt engineering with modern web architecture, I build applications that don't just act smart, but feel seamless.
            </p>
            <p>
              My philosophy: <span className="italic text-gray-300">"The best AI is invisible, embedded perfectly into exceptional design."</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Brain />, label: "AI Strategist", delay: 0 },
              { icon: <Code2 />, label: "UI Specialist", delay: 0.1 },
              { icon: <Database />, label: "Data Flow", delay: 0.2 },
              { icon: <Rocket />, label: "Performance", delay: 0.3 }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: item.delay }}
                className="glass-panel p-6 flex flex-col items-center justify-center gap-4 text-center group hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="font-medium text-sm tracking-wide text-gray-300">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 relative z-10 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <SectionHeading title="Dynamic Showcase." subtitle="Live Output" />

        
        <div className="hidden md:grid grid-cols-12 gap-8 h-[600px] glass-panel p-6 bg-black/60 shadow-2xl">
          
          <div className="col-span-4 flex flex-col gap-4 relative overflow-hidden border-r border-white/10 pr-6">
            {PROJECTS.map((p, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`text-left p-4 rounded-xl transition-all duration-300 relative overflow-hidden ${currentIndex === idx ? 'bg-indigo-500/10 border border-indigo-500/30' : 'hover:bg-white/5 border border-transparent'}`}
              >
                {currentIndex === idx && (
                  <motion.div 
                    layoutId="active-project"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500"
                  />
                )}
                <h4 className={`font-display font-semibold text-lg mb-1 ${currentIndex === idx ? 'text-indigo-400' : 'text-gray-300'}`}>{p.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-2">{p.description}</p>
              </button>
            ))}
          </div>
          
          
          <div className="col-span-8 relative rounded-2xl overflow-hidden bg-[#050505] border border-white/5 flex flex-col group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 z-0"
              >
                 <img src={PROJECTS[currentIndex].image} alt="preview" className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 flex-grow p-10 flex flex-col justify-end">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={`content-${currentIndex}`}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.5, delay: 0.2 }}
                 >
                   <div className="flex flex-wrap gap-2 mb-4">
                     {PROJECTS[currentIndex].tags.map(tag => (
                       <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white border border-white/20 font-medium">{tag}</span>
                     ))}
                   </div>
                   <h3 className="text-5xl font-display font-bold mb-4 text-white drop-shadow-lg">{PROJECTS[currentIndex].title}</h3>
                   <p className="text-gray-300 mb-8 max-w-xl text-lg drop-shadow-md">{PROJECTS[currentIndex].description}</p>
                   
                   <div className="flex gap-4">
                     <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                       <PlayCircle className="w-5 h-5" /> Live Demo
                     </button>
                     <button className="px-6 py-3 bg-black/50 backdrop-blur-md text-white border border-white/20 font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                       <Code className="w-5 h-5" /> View Architecture
                     </button>
                   </div>
                 </motion.div>
               </AnimatePresence>
            </div>
            
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
              <motion.div 
                key={`progress-${currentIndex}`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
              />
            </div>
          </div>
        </div>

        
        <div className="md:hidden flex flex-col gap-8 relative">
           <AnimatePresence mode="wait">
             <motion.div
               key={`mobile-${currentIndex}`}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -50 }}
               transition={{ duration: 0.4 }}
               className="glass-panel overflow-hidden flex flex-col bg-black/80 border border-white/10 rounded-3xl"
             >
               <div className="relative h-64 overflow-hidden border-b border-white/10">
                 <img src={PROJECTS[currentIndex].image} className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                 <div className="absolute bottom-4 left-4 flex gap-2 overflow-x-auto pr-4 scrollbar-hide w-[90%]">
                   {PROJECTS[currentIndex].tags.map(tag => (
                     <span key={tag} className="whitespace-nowrap px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white border border-white/20">{tag}</span>
                   ))}
                 </div>
               </div>
               <div className="p-6 flex flex-col gap-4">
                 <h3 className="text-2xl font-display font-bold">{PROJECTS[currentIndex].title}</h3>
                 <p className="text-sm text-gray-400">{PROJECTS[currentIndex].description}</p>
                 <div className="flex flex-col gap-3 mt-2">
                    <button className="w-full py-4 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                       <PlayCircle className="w-4 h-4" /> Live Demo
                    </button>
                    <button className="w-full py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl flex items-center justify-center gap-2">
                       <Code className="w-4 h-4" /> Code Architecture
                    </button>
                 </div>
               </div>
               <div className="h-1 w-full bg-white/5">
                 <motion.div 
                   key={`progress-mobile-${currentIndex}`}
                   initial={{ width: '0%' }}
                   animate={{ width: '100%' }}
                   transition={{ duration: 6, ease: 'linear' }}
                   className="h-full bg-indigo-500"
                 />
               </div>
             </motion.div>
           </AnimatePresence>
           
           
           <div className="flex justify-center gap-2 mt-2">
             {PROJECTS.map((_, idx) => (
               <div 
                 key={idx} 
                 onClick={() => setCurrentIndex(idx)}
                 className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-indigo-500' : 'w-2 bg-white/20'}`}
               />
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Technical Arsenal." subtitle="Skills" />

        <div className="grid md:grid-cols-2 gap-16">
          {['Frontend', 'AI', 'Tools'].map((category) => (
             <motion.div 
               key={category} 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, margin: "-100px" }}
               className="space-y-8"
             >
               <h3 className="text-2xl font-display font-semibold text-white/80 border-b border-white/10 pb-4">{category}</h3>
               <div className="space-y-6">
                 {SKILLS.filter(s => s.category === category).map((skill, index) => (
                   <div key={skill.name}>
                     <div className="flex justify-between items-center mb-2">
                       <span className="text-sm font-medium text-gray-300 tracking-wide">{skill.name}</span>
                       <span className="text-xs text-indigo-400 font-mono">{skill.level}%</span>
                     </div>
                     <div className="h-2 w-full bg-black border border-white/10 rounded-full overflow-hidden shadow-inner">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${skill.level}%` }}
                         viewport={{ once: false }}
                         transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                         className="h-full bg-gradient-to-r from-indigo-600 to-violet-400 relative"
                       >
                         <div className="absolute inset-0 bg-white/20 w-1/3 animate-pulse" />
                       </motion.div>
                     </div>
                   </div>
                 ))}
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="capabilities" className="py-20 md:py-32 relative bg-black/80 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Capabilities." subtitle="Services" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ perspective: 1000 }}
              className="glass-panel p-8 md:p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 bg-black/60 shadow-xl"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-indigo-500/20 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-white/90 group-hover:text-indigo-300 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel p-10 md:p-20 relative overflow-hidden border border-white/10 bg-[#050505] shadow-2xl rounded-[3rem]">
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gray-800/20 rounded-full blur-[80px]" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
          
          <div className="grid xl:grid-cols-2 gap-16 relative z-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono mb-6 uppercase tracking-widest"
              >
                Establish Connection : Lunar Base
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
                Initiate Link.
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-md font-light leading-relaxed">
                Looking to build the next generation of web applications? Let's connect and discuss your vision beyond the atmosphere.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                 {[
                   { icon: Mail, label: 'Email', value: 'hello@saifhani.com' },
                   { icon: Github, label: 'GitHub', value: '@saif-hani' },
                   { icon: Linkedin, label: 'LinkedIn', value: 'in/saif-hani' },
                 ].map((item, i) => (
                   <a key={i} href="#" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all hover:bg-white/10 group">
                     <div className="text-gray-400 group-hover:text-white transition-colors"><item.icon className="w-5 h-5" /></div>
                     <div>
                       <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-1">{item.label}</div>
                       <div className="text-sm font-mono text-gray-200">{item.value}</div>
                     </div>
                   </a>
                 ))}
                 <a href="#" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all hover:bg-white/10 group">
                   <div className="text-gray-400 group-hover:text-white transition-colors"><MessageSquare className="w-5 h-5" /></div>
                   <div>
                     <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-1">Consulting</div>
                     <div className="text-sm font-mono text-gray-200">Book a Call</div>
                   </div>
                 </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group w-full max-w-md h-32 rounded-3xl overflow-hidden bg-black border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] cursor-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
                  <div className="flex items-center gap-3 text-white">
                    <Rocket className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-xl font-display font-bold tracking-widest uppercase">Launch Sequence</span>
                  </div>
                  <span className="text-xs text-indigo-300 font-mono tracking-widest">TRANSMIT_TO_SA_ORG</span>
                </div>
                
                <div className="absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </motion.button>
              
              <div className="mt-8 flex items-center gap-3 text-gray-500 text-xs font-mono">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                SYSTEMS NOMINAL. READY TO RECEIVE.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
           className="w-24 h-24 border border-indigo-500/20 border-t-indigo-500 rounded-full mb-8"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4">
          <Bot className="w-8 h-8 text-white" />
        </div>
        <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          />
        </div>
        <div className="mt-4 text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
          Initializing System <span className="animate-pulse">...</span>
        </div>
      </div>
    </motion.div>
  );
}

function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const [isMouseVisible, setIsMouseVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, input, textarea'));
      if (!isMouseVisible) setIsMouseVisible(true);
    };
    const handleMouseLeave = () => setIsMouseVisible(false);
    const handleMouseEnter = () => setIsMouseVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMouseVisible]);

  if (!isMouseVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] hidden md:flex items-center justify-center text-white origin-top-left"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isClicking ? 0.8 : (isHovering ? 1.1 : 1),
        rotate: isClicking ? -20 : (isHovering ? -10 : 0)
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.1
      }}
    >
      <Pointer 
        className={`w-8 h-8 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-colors duration-200 ${isHovering ? 'text-indigo-400' : 'text-white'}`} 
        style={{ fill: 'currentColor' }} 
      />
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#000] text-white min-h-screen selection:bg-indigo-500/30 font-sans cursor-none overflow-x-hidden relative">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Cursor />
      <LunarBackground />
      <ScrollRocket />

      
      <motion.div 
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-violet-400 origin-left z-[100]"
      />

      <NavBar activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 text-center px-6 relative z-10 bg-black overflow-hidden flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
          <span className="text-indigo-400 font-display font-black text-2xl tracking-tighter">SA</span>
        </div>
        <p className="text-gray-400 text-sm flex flex-col md:flex-row items-center justify-center gap-4 font-mono tracking-wide">
          <span>&copy; {new Date().getFullYear()} SA Organization</span>
          <span className="hidden md:inline-block w-1.5 h-1.5 bg-indigo-500 rounded-full" />
          <span>Saif Hani</span>
          <span className="hidden md:inline-block w-1.5 h-1.5 bg-indigo-500 rounded-full" />
          <span className="text-gray-500">Global Space-Age UI Frameworks</span>
        </p>
      </footer>
    </div>
  );
}
