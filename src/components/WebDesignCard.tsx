
import React, { useEffect, useRef, useState } from 'react';
import { Code, Layout, Layers, Monitor } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Card } from './ui/card';

interface CodeSnippetProps {
  delay: number;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const snippetRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);
  
  return (
    <div 
      ref={snippetRef}
      className={`transition-all duration-700 ease-in-out overflow-hidden ${isVisible ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}
    >
      <pre className="text-xs md:text-sm overflow-x-auto p-2 rounded-md">
        <code className="text-neon-cyan">
          <span className="text-neon-purple">const</span> <span className="text-white">Component</span> <span className="text-white">=</span> <span className="text-neon-purple">{"() => {"}</span><br />
          &nbsp;&nbsp;<span className="text-neon-purple">const</span> <span className="text-white">[hover, setHover]</span> <span className="text-white">=</span> <span className="text-neon-purple">useState</span><span className="text-white">(</span><span className="text-neon-purple">false</span><span className="text-white">);</span><br />
          <br />
          &nbsp;&nbsp;<span className="text-neon-purple">return</span> <span className="text-white">(</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">&lt;</span><span className="text-neon-cyan">div</span> <span className="text-neon-purple">className</span><span className="text-white">=</span><span className="text-white">"glass-card"</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neon-purple">onMouseEnter</span><span className="text-white">{"={() => "}</span><span className="text-neon-purple">setHover</span><span className="text-white">(</span><span className="text-neon-purple">true</span><span className="text-white">){"}"}</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neon-purple">onMouseLeave</span><span className="text-white">{"={() => "}</span><span className="text-neon-purple">setHover</span><span className="text-white">(</span><span className="text-neon-purple">false</span><span className="text-white">){"}"}</span><span className="text-white">&gt;</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">{"{"}</span>hover ? &lt;GlowEffect /&gt; : null{"}"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">&lt;/</span><span className="text-neon-cyan">div</span><span className="text-white">&gt;</span><br />
          &nbsp;&nbsp;<span className="text-white">);</span><br />
          <span className="text-neon-purple">{"};"}</span><br />
        </code>
      </pre>
    </div>
  );
};

// Design Preview Component
const DesignPreview: React.FC = () => {
  return (
    <motion.div 
      className="relative w-full h-48 md:h-64 bg-gradient-to-br from-background/80 to-background/50 rounded-lg overflow-hidden border border-white/10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-muted/30 flex items-center px-3">
        <div className="flex space-x-1.5">
          <div className="w-2 h-2 rounded-full bg-neon-cyan/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="pt-8 px-4 grid grid-cols-3 gap-2 h-full">
        <div className="col-span-1">
          <motion.div 
            className="h-5 w-full bg-white/10 rounded-md mb-2"
            initial={{ width: '70%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div 
            className="h-20 w-full bg-white/5 rounded-md"
            initial={{ height: '5rem' }}
            animate={{ height: '5.5rem' }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>
        <div className="col-span-2">
          <div className="h-28 w-full bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 rounded-md border border-white/5"></div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="h-8 bg-white/5 rounded-md"></div>
            <div className="h-8 bg-neon-cyan/10 rounded-md"></div>
          </div>
        </div>
      </div>
      
      {/* Animated cursor */}
      <motion.div 
        className="absolute w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_10px_2px_rgba(0,255,255,0.5)]"
        animate={{ 
          x: [40, 180, 220, 100, 40],
          y: [30, 80, 140, 180, 30],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    </motion.div>
  );
};

// Stack Preview Component
const StackPreview: React.FC = () => {
  return (
    <motion.div 
      className="w-full h-48 md:h-64 p-4 flex flex-col justify-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {[
        { name: 'React', color: 'from-[#61dafb]/20 to-[#61dafb]/5', icon: '⚛️' },
        { name: 'Tailwind CSS', color: 'from-[#38bdf8]/20 to-[#38bdf8]/5', icon: '🌊' },
        { name: 'Framer Motion', color: 'from-[#ff69b4]/20 to-[#ff69b4]/5', icon: '🔄' },
        { name: 'TypeScript', color: 'from-[#3178c6]/20 to-[#3178c6]/5', icon: '📘' },
      ].map((tech, index) => (
        <motion.div 
          key={tech.name}
          className={`flex items-center w-full p-2 rounded-md bg-gradient-to-r ${tech.color} border border-white/5`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.15 }}
        >
          <span className="text-lg mr-3">{tech.icon}</span>
          <span className="text-sm font-medium">{tech.name}</span>
          <div className="ml-auto h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-neon"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.2 * index }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const WebDesignCard: React.FC = () => {
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  const interfaceRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  // Handle 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    setMousePosition({ x, y });
  };
  
  const resetTilt = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  const tabs = [
    { icon: <Code size={16} />, name: 'Code' },
    { icon: <Layout size={16} />, name: 'Design' },
    { icon: <Layers size={16} />, name: 'Stack' },
  ];
  
  return (
    <motion.div 
      ref={cardRef}
      className="glass-card relative overflow-hidden p-6 md:p-8 rounded-2xl transition-all duration-500 group h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Mouse follow gradient */}
      <div 
        className="absolute pointer-events-none w-[30%] h-[30%] bg-gradient-radial from-neon-cyan/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ 
          left: `${mousePosition.x - 100}px`,
          top: `${mousePosition.y - 100}px`,
          transform: 'translateZ(20px)'
        }}
      />
      
      {/* Background glow effects */}
      <div className="absolute -inset-0.5 bg-gradient-neon opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-700 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 z-0"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [
                `${Math.random() * 100}%`, 
                `${Math.random() * 100}%`, 
                `${Math.random() * 100}%`
              ],
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(40px)' }}>
        {/* Icon and title */}
        <motion.div 
          className="flex items-center mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.3)]">
            <Monitor size={24} className="text-background" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Web Design</h3>
            <div className="h-1 w-12 bg-gradient-neon rounded-full mt-1"></div>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-foreground/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Creating stunning, responsive websites with modern frameworks and cutting-edge design principles.
        </motion.p>
        
        {/* Interactive interface */}
        <motion.div 
          ref={interfaceRef}
          className="mt-auto bg-muted/30 rounded-lg backdrop-blur-sm overflow-hidden border border-white/10 shadow-[0_5px_30px_-15px_rgba(0,255,255,0.15)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Tabs */}
          <div className="flex border-b border-white/5">
            {tabs.map((tab, index) => (
              <button 
                key={index}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-colors ${activeTab === index ? 'bg-white/5 text-white' : 'text-white/60 hover:text-white/80'}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.icon}
                {tab.name}
                {activeTab === index && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-neon"
                    layoutId="activeTab"
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="p-4">
            {activeTab === 0 && (
              <div className="space-y-2">
                <CodeSnippet delay={200} />
                <CodeSnippet delay={700} />
                <CodeSnippet delay={1200} />
              </div>
            )}
            
            {activeTab === 1 && <DesignPreview />}
            {activeTab === 2 && <StackPreview />}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WebDesignCard;
