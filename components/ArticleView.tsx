
import React from 'react';

interface ArticleProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  onBack: () => void;
}

const ArticleView: React.FC<ArticleProps> = ({ title, subtitle, content, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al Dashboard
        </button>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">{title}</h1>
          {subtitle && <p className="text-xl text-slate-400 font-light">{subtitle}</p>}
          <div className="h-1 w-20 bg-blue-600 mt-8"></div>
        </header>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-lg leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
