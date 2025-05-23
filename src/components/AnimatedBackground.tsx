import React from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = '',
}) => {
  // Inline stiliai, kad išvengtume papildomų priklausomybių
  const styles = `
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.8; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.1); }
    }
    .bg-glow-element {
      border-radius: 50%;
      position: absolute;
      filter: blur(80px);
      animation: pulse-glow 6s ease-in-out infinite;
    }
  `;

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none ${className}`}>
      <style>{styles}</style>
      
      {/* Pagrindiniai spalvų elementai */}
      <div 
        className="bg-glow-element"
        style={{
          top: '-10%',
          left: '50%',
          width: '300px',
          height: '300px',
          backgroundColor: 'rgba(139, 92, 246, 0.2)', /* nexos-purple/20 */
          transform: 'translateX(-50%)',
          animationDelay: '0s',
        }}
      />
      
      <div 
        className="bg-glow-element"
        style={{
          bottom: '20%',
          right: '30%',
          width: '400px',
          height: '400px',
          backgroundColor: 'rgba(139, 92, 246, 0.15)', /* nexos-purple/15 */
          filter: 'blur(100px)',
          animationDelay: '1s',
        }}
      />
      
      {/* Papildomi elementai gylio efektui */}
      <div 
        className="bg-glow-element"
        style={{
          top: '30%',
          left: '-10%',
          width: '250px',
          height: '250px',
          backgroundColor: 'rgba(139, 92, 246, 0.1)', /* nexos-purple/10 */
          filter: 'blur(80px)',
          animationDelay: '0.5s',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
