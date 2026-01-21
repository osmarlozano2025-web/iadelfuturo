
import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeView: string;
  onNavigate: (view: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, onNavigate }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert("Informe completo generado y descargado (simulación).");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30">
      <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => onNavigate('dashboard')}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              AI
            </div>
            <span className="text-xl font-black tracking-tighter text-white">IA<span className="text-blue-500">2026</span></span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            {['vanguardia', 'comparativa', 'tareas', 'agentes'].map((item) => (
              <button 
                key={item}
                onClick={() => onNavigate(item)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  activeView === item ? 'text-blue-500' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className={`bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-2 ${isDownloading ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Generando...
                </>
              ) : 'Descargar Informe'}
            </button>
          </div>
        </div>
      </nav>
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">AI</div>
              <span className="text-lg font-bold">IA 2026 Reports</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              La guía definitiva para navegar el complejo ecosistema de la inteligencia artificial. Analizamos datos, benchmarks y casos de uso reales para potenciar tu decisión estratégica.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Secciones</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><button onClick={() => onNavigate('comparativa')} className="hover:text-blue-400">Modelos 2026</button></li>
              <li><button onClick={() => onNavigate('agentes')} className="hover:text-blue-400">Costo vs Rendimiento</button></li>
              <li><button onClick={() => onNavigate('tareas')} className="hover:text-blue-400">Guía de Selección</button></li>
              <li><button onClick={() => onNavigate('vanguardia')} className="hover:text-blue-400">Veredicto</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-400">Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-400">Metodología</a></li>
              <li><a href="#" className="hover:text-blue-400">Fuentes</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © 2026 AI Comparative Reports Inc. Todos los derechos reservados. Basado en el Reporte Global de Enero 2026.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
