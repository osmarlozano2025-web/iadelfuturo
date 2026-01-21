
import React from 'react';
import { AIProvider, ModelSpec, TaskRecommendation } from './types';

export const FULL_REPORT_TEXT = `
Informe Comparativo de IA 2026: Guía Definitiva de los Modelos Más Potentes.
Veredicto 2026: El mercado se ha fracturado en líderes especializados. OpenAI GPT-5.2 recupera el liderazgo en razonamiento general. Claude Sonnet 4.5 es el dominador en programación y agentes. Gemini 3 Pro es el rey de la multimodalidad.
Guía Rápida: Uso general (GPT-5.2), Código (Claude 4.5), Razonamiento científico (GPT-5.2 Pro), Multimodal (Gemini 3 Pro), Documentos largos (Gemini 2.5 Pro con 2M tokens).
Modelos Asiáticos: DeepSeek V3.2, Qwen3 y GLM-4.7 ofrecen calidad similar a GPT-5.2 por un precio 10-30 veces menor.
Agentes: La era de la IA autónoma. Arquitectura SLM-default, LLM-fallback para eficiencia de costos.
FAQ: GPT vs Claude para escribir: GPT es más creativo, Claude más técnico. Programación: Claude es líder. Suscripción: Vale la pena si ahorras +4h al mes.
`;

export const MODELS: ModelSpec[] = [
  {
    id: 'gpt-5-2',
    name: 'GPT-5.2 Pro',
    provider: AIProvider.OPENAI,
    contextWindow: '128K',
    maxOutput: '32K',
    sweBenchScore: 69.2,
    bestFor: ['Uso General', 'Razonamiento Científico', 'Voz'],
    strengths: ['Ecosistema maduro', 'Integración Sora 2', 'API de voz en tiempo real'],
    weaknesses: ['Costo elevado', 'Contexto limitado vs Gemini'],
    costPerMillion: '$15.00',
    multimodal: true,
    color: '#10a37f'
  },
  {
    id: 'claude-4-5',
    name: 'Claude Sonnet 4.5',
    provider: AIProvider.ANTHROPIC,
    contextWindow: '200K',
    maxOutput: '64K',
    sweBenchScore: 72.5,
    bestFor: ['Coding', 'Agentes Autónomos', 'Privacidad'],
    strengths: ['Líder en SWE-bench', 'Computer Use', 'Salida de 64K tokens'],
    weaknesses: ['Sin generación de video/imagen', 'Plan premium costoso'],
    costPerMillion: '$8.00',
    multimodal: false,
    color: '#d97757'
  },
  {
    id: 'gemini-3-pro',
    name: 'Gemini 3 Pro',
    provider: AIProvider.GOOGLE,
    contextWindow: '2M',
    maxOutput: '32K',
    sweBenchScore: 64.8,
    bestFor: ['Análisis Multimodal', 'Documentos Largos', 'Workspace'],
    strengths: ['Comprensión nativa de video', 'Contexto de 2M tokens', 'Deep Research Agent'],
    weaknesses: ['Dependencia de Google Workspace', 'Preview stage'],
    costPerMillion: '$5.00',
    multimodal: true,
    color: '#1a73e8'
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3.2',
    provider: AIProvider.ASIAN,
    contextWindow: '128K',
    maxOutput: '16K',
    sweBenchScore: 62.1,
    bestFor: ['Eficiencia de Costos', 'Open Weights', 'Inferencia Masiva'],
    strengths: ['Extremadamente económico', 'Rendimiento comparable a GPT-5', 'Auto-alojamiento'],
    weaknesses: ['Residencia de datos fuera de Occidente', 'Menor soporte multimodal'],
    costPerMillion: '$0.32',
    multimodal: false,
    color: '#3b82f6'
  }
];

export const TASK_RECOMMENDATIONS: TaskRecommendation[] = [
  {
    task: 'Escribir contenido',
    winner: 'GPT-5.2',
    provider: AIProvider.OPENAI,
    reason: 'Creatividad natural y versatilidad estilística superior.',
    icon: '✍️'
  },
  {
    task: 'Analizar documentos masivos',
    winner: 'Gemini 2.5 Pro',
    provider: AIProvider.GOOGLE,
    reason: 'Ventana de 2 millones de tokens insuperable.',
    icon: '📄'
  },
  {
    task: 'Programación y Debugging',
    winner: 'Claude Sonnet 4.5',
    reason: 'Máxima efectividad en SWE-bench y agentes autónomos.',
    provider: AIProvider.ANTHROPIC,
    icon: '💻'
  },
  {
    task: 'Investigación con fuentes',
    winner: 'Deep Research (Gemini)',
    reason: 'Integración nativa con Google Search y razonamiento agéntico.',
    provider: AIProvider.GOOGLE,
    icon: '🔍'
  }
];
