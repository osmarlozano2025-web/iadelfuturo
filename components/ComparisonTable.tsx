
import React from 'react';
import { MODELS } from '../constants';
import { AIProvider } from '../types';

const ComparisonTable: React.FC = () => {
  return (
    <div id="comparativa" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Análisis en <span className="text-blue-500">Profundidad</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Los titanes de la IA cara a cara. Compara especificaciones técnicas y benchmarks reales.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/50 text-slate-300 text-sm uppercase tracking-wider">
                <th className="px-6 py-4 font-bold border-b border-slate-700">Modelo</th>
                <th className="px-6 py-4 font-bold border-b border-slate-700">Contexto</th>
                <th className="px-6 py-4 font-bold border-b border-slate-700">SWE-bench</th>
                <th className="px-6 py-4 font-bold border-b border-slate-700">Costo (Input/1M)</th>
                <th className="px-6 py-4 font-bold border-b border-slate-700">Multimodal</th>
                <th className="px-6 py-4 font-bold border-b border-slate-700">Especialidad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {MODELS.map((model) => (
                <tr key={model.id} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-8 rounded-full" style={{ backgroundColor: model.color }}></div>
                      <div>
                        <div className="font-bold text-white group-hover:text-blue-400 transition-colors">{model.name}</div>
                        <div className="text-xs text-slate-500 font-mono">{model.provider}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-mono text-slate-300">{model.contextWindow}</td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <div className="flex-grow bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" 
                          style={{ width: `${model.sweBenchScore}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-slate-400">{model.sweBenchScore}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-mono text-emerald-400">{model.costPerMillion}</td>
                  <td className="px-6 py-6">
                    {model.multimodal ? (
                      <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded-md uppercase">Nativo</span>
                    ) : (
                      <span className="px-2 py-1 bg-slate-800 text-slate-500 text-[10px] font-bold rounded-md uppercase">Limitado</span>
                    )}
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-wrap gap-1">
                      {model.bestFor.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] bg-blue-600/10 text-blue-400 border border-blue-600/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
