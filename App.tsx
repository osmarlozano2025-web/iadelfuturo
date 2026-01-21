
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ComparisonTable from './components/ComparisonTable';
import AIConsultant from './components/AIConsultant';
import ArticleView from './components/ArticleView';
import { TASK_RECOMMENDATIONS, MODELS, FULL_REPORT_TEXT } from './constants';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('dashboard');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  const renderDashboard = () => (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            Informe 2026 Actualizado
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            El Nuevo <span className="text-gradient">Panorama</span> de la IA
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            En 2026, la era del dominio de un único modelo ha terminado. Bienvenidos a la era de la 
            <span className="text-white font-medium italic"> especialización estratégica</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveView('vanguardia')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 active:scale-95"
            >
              Explorar Veredicto
            </button>
            <button 
              onClick={() => setActiveView('comparativa')}
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 transition-all active:scale-95"
            >
              Ver Benchmarks
            </button>
          </div>
        </div>
      </section>

      {/* Main Sections Summaries */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">Veredicto <span className="text-blue-500">2026</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                El veredicto de enero de 2026 es claro: GPT-5.2 recupera el liderazgo en razonamiento general, mientras que Claude 4.5 domina el desarrollo autónomo.
              </p>
              <div className="space-y-4">
                {['vanguardia', 'comparativa', 'agentes'].map((v) => (
                  <button 
                    key={v}
                    onClick={() => setActiveView(v)}
                    className="w-full p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex items-center justify-between hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-left"
                  >
                    <span className="font-bold uppercase tracking-widest text-sm text-slate-300">Ir a {v}</span>
                    <span className="text-blue-500">→</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6">Líderes por Especialidad</h3>
                <div className="space-y-6">
                  {MODELS.map(m => (
                    <div key={m.id} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg" style={{ backgroundColor: `${m.color}20`, color: m.color }}>
                        {m.name.charAt(0)}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-end">
                          <span className="font-bold">{m.name}</span>
                          <span className="text-xs text-slate-500">{m.sweBenchScore}% SWE-bench</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full mt-2">
                          <div className="h-full bg-current rounded-full" style={{ width: `${m.sweBenchScore}%`, color: m.color }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Selection Hub */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Selección <span className="text-blue-500">Inteligente</span></h2>
          <p className="text-slate-400">¿Qué IA deberías elegir según tu tarea?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {TASK_RECOMMENDATIONS.map((rec, i) => (
            <div 
              key={i} 
              onClick={() => setActiveView('tareas')}
              className="group p-8 rounded-3xl border border-slate-800 bg-slate-900/30 hover:bg-blue-600 hover:border-blue-500 hover:scale-105 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{rec.icon}</div>
              <h4 className="text-sm font-bold opacity-60 uppercase tracking-widest mb-2">{rec.task}</h4>
              <div className="text-xl font-black mb-4">{rec.winner}</div>
              <p className="text-sm opacity-80 leading-relaxed">Ver análisis detallado →</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'vanguardia':
        return (
          <ArticleView 
            title="Veredicto 2026: El Nuevo Panorama"
            subtitle="La era del dominio de un único modelo ha terminado."
            onBack={() => setActiveView('dashboard')}
            content={
              <>
                <p>En el hipercompetitivo mercado de la inteligencia artificial de 2026, la fragmentación no es una debilidad, sino un signo de madurez. Esto exige a los responsables de la toma de decisiones pasar de buscar un único modelo "mejor" a componer una cartera de herramientas especializadas.</p>
                <h3>El Veredicto de Enero 2026</h3>
                <ul>
                  <li><strong>OpenAI GPT-5.2:</strong> Recupera el liderazgo en razonamiento general y versatilidad.</li>
                  <li><strong>Claude Sonnet 4.5:</strong> El dominador indiscutible para el desarrollo de software y agentes autónomos.</li>
                  <li><strong>Gemini 3 Pro:</strong> El rey de la multimodalidad con comprensión sin precedentes de video.</li>
                </ul>
                <p>Equivocarse de modelo puede significar mayores costos y resultados subóptimos. Esta guía está diseñada para orientarte hacia la solución más efectiva.</p>
              </>
            }
          />
        );
      case 'comparativa':
        return (
          <div className="pt-24 min-h-screen bg-slate-950">
            <ComparisonTable />
            <div className="max-w-7xl mx-auto px-6 pb-20">
              <h3 className="text-2xl font-bold mb-6">Análisis por Ecosistema</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MODELS.filter(m => m.provider !== 'Modelos Asiáticos').map(m => (
                  <div key={m.id} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                    <h4 className="text-xl font-bold mb-4" style={{ color: m.color }}>{m.provider}</h4>
                    <p className="text-sm text-slate-400 mb-6">Fuerte en {m.bestFor.join(', ')}.</p>
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Fortalezas:</div>
                      {m.strengths.map(s => <div key={s} className="text-sm text-slate-300 flex items-center gap-2">✓ {s}</div>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'tareas':
        return (
          <ArticleView 
            title="Guía de Selección por Tareas"
            subtitle="Optimiza tu flujo de trabajo eligiendo el motor adecuado."
            onBack={() => setActiveView('dashboard')}
            content={
              <div className="space-y-12">
                {TASK_RECOMMENDATIONS.map(task => (
                  <div key={task.task} className="border-b border-slate-800 pb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{task.icon}</span>
                      <h3 className="text-2xl font-black m-0">{task.task}</h3>
                    </div>
                    <p className="text-xl text-blue-400 font-bold mb-2">Ganador: {task.winner}</p>
                    <p className="text-slate-400">{task.reason}</p>
                  </div>
                ))}
              </div>
            }
          />
        );
      case 'agentes':
        return (
          <ArticleView 
            title="La Era de los Agentes Autónomos"
            subtitle="Más allá de los chatbots: Sistemas que actúan y razonan."
            onBack={() => setActiveView('dashboard')}
            content={
              <>
                <p>Estamos presenciando un cambio de paradigma fundamental: la IA está evolucionando de ser una herramienta pasiva a un sistema "agéntico" activo. Según el informe <em>The 2026 State of AI Agents</em>, el 57% de las empresas ya despliegan agentes autónomos.</p>
                <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-3xl my-8">
                  <h4 className="text-blue-400 font-bold mb-2">Arquitectura Sugerida</h4>
                  <p className="text-sm font-bold text-white mb-4 italic">"SLM-default, LLM-fallback"</p>
                  <p className="text-sm">Utiliza modelos pequeños (SLMs) como DeepSeek o Qwen para el 90% de las tareas, reservando los potentes LLMs (GPT-5.2, Claude 4.5) solo para el razonamiento crítico.</p>
                </div>
                <h3>Hallazgos Clave</h3>
                <ul>
                  <li><strong>ROI:</strong> El 80% de los líderes técnicos reportan valor financiero medible.</li>
                  <li><strong>Liderazgo:</strong> Claude Sonnet 4.5 es el estándar de facto para flujos de trabajo de desarrollo autónomo.</li>
                </ul>
              </>
            }
          />
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <Layout activeView={activeView} onNavigate={setActiveView}>
      {renderContent()}
      <AIConsultant reportContent={FULL_REPORT_TEXT} />
    </Layout>
  );
};

export default App;
