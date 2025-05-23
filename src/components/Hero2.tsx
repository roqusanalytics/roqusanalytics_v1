import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, Database, PieChart, Play, Sparkles } from "lucide-react";

const Hero2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Futuristic mesh gradient background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradients */}
        <div className="absolute inset-0 opacity-60">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300 opacity-40"
            style={{
              backgroundSize: '400% 400%',
              animation: 'mesh-move 15s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-cyan-300 via-blue-400 to-purple-500 opacity-30"
            style={{
              backgroundSize: '300% 300%',
              animation: 'mesh-move-reverse 20s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-bl from-green-300 via-teal-400 to-blue-500 opacity-25"
            style={{
              backgroundSize: '500% 500%',
              animation: 'mesh-move 25s ease-in-out infinite'
            }}
          />
        </div>

        {/* Glassmorphism floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full animate-float-slow border border-white/20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 backdrop-blur-lg rounded-lg rotate-45 animate-float-medium border border-white/10"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 backdrop-blur-xl rounded-full animate-float-fast border border-purple-300/20"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-cyan-400/10 backdrop-blur-sm rounded-xl animate-float-slow border border-cyan-300/30"></div>

        {/* Interactive particle effect */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none transition-all duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            filter: 'blur(40px)'
          }}
        />

        {/* Neural network pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="animate-pulse-slow">
            <defs>
              <pattern id="neural-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="60" cy="60" r="2" fill="currentColor" opacity="0.4">
                  <animate attributeName="r" values="1;3;1" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.3">
                  <animate attributeName="opacity" values="0.1;0.6;0.1" dur="6s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="30" r="1" fill="currentColor" opacity="0.2">
                  <animate attributeName="r" values="0.5;2;0.5" dur="5s" repeatCount="indefinite"/>
                </circle>
                <path d="M20,20 Q60,10 100,30 T60,60" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2">
                  <animate attributeName="opacity" values="0.1;0.4;0.1" dur="7s" repeatCount="indefinite"/>
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-pattern)" className="text-purple-400"/>
          </svg>
        </div>

        {/* Geometric overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/5 rounded-3xl rotate-12 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-purple-300/10 rounded-2xl -rotate-12 animate-bounce-slow"></div>
        </div>
      </div>

      {/* Content with enhanced glassmorphism */}
      <div className="nexos-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content with enhanced glass effect */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            {/* Enhanced floating badge */}
            <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
              <Sparkles className="w-5 h-5 mr-3 text-purple-400 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                FUTURE OF DATA ANALYTICS
              </span>
            </div>
            
            <h2 className="nexos-heading mb-6">
              Transformuokite duomenis į
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                ateities įžvalgas
              </span>
            </h2>
            
            <p className="nexos-subheading mb-8 leading-relaxed">
              Naudokite dirbtinio intelekto galią ir pažangiausias vizualizacijos technologijas, 
              kad paverčiate sudėtingus duomenų masyvus į strateginius sprendimus ateities verslui.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact-sales">
                <Button className="nexos-button-primary nexos-contact-button bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full sm:w-auto group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Pradėti dabar
                </Button>
              </Link>
              <Link to="/paslaugos">
                <Button variant="outline" className="nexos-button-secondary bg-white/5 backdrop-blur-md border-white/20 hover:bg-white/10 w-full sm:w-auto">
                  <span className="nexos-shimmer-text">Sužinoti daugiau</span>
                </Button>
              </Link>
            </div>

            {/* Enhanced statistics with glassmorphism */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  AI+
                </div>
                <div className="text-sm text-gray-600">Dirbtinis intelektas</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">Patikimumas</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  Real-time
                </div>
                <div className="text-sm text-gray-600">Analitika</div>
              </div>
            </div>
          </div>

          {/* Right content - Enhanced futuristic dashboard */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <div className="relative">
              {/* Enhanced glassmorphism dashboard */}
              <div 
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Analytics AI Dashboard
                  </h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                
                {/* Animated data visualization */}
                <div className="space-y-6 mb-8">
                  <div className="relative">
                    <div className="h-4 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                    <span className="absolute right-0 top-5 text-sm text-purple-400 font-medium">AI Insights: 87%</span>
                  </div>
                  <div className="relative">
                    <div className="h-4 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-5/6 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    <span className="absolute right-0 top-5 text-sm text-blue-400 font-medium">Predictive Models: 94%</span>
                  </div>
                  <div className="relative">
                    <div className="h-4 bg-gradient-to-r from-green-200/30 to-teal-200/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-teal-400 rounded-full w-4/5 animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <span className="absolute right-0 top-5 text-sm text-green-400 font-medium">Data Processing: 91%</span>
                  </div>
                </div>
                
                {/* Enhanced metric cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-4 rounded-xl border border-purple-300/20">
                    <div className="text-2xl font-bold text-purple-400 mb-1">+156%</div>
                    <div className="text-sm text-gray-300">ROI Growth</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-4 rounded-xl border border-blue-300/20">
                    <div className="text-2xl font-bold text-blue-400 mb-1">0.3ms</div>
                    <div className="text-sm text-gray-300">Response Time</div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/20 rounded-full animate-bounce backdrop-blur-sm border border-purple-300/30"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/30 rounded-full animate-pulse backdrop-blur-sm border border-blue-300/30"></div>
              
              {/* Hover glow effect */}
              {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes for animations */}
      <style jsx>{`
        @keyframes mesh-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes mesh-move-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(50deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-10px) rotate(-8deg); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero2; 