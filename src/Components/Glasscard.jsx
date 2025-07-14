import React from 'react';

function GlassCard({ children, className = '', hover = false, ...props }) {
  return (
    <div
      className={`
        backdrop-blur-lg bg-glass-light border border-white/10 rounded-2xl shadow-lg
        ${hover ? 'hover:bg-glass-medium transition-all duration-300 hover:shadow-xl hover:scale-105' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export default GlassCard;
