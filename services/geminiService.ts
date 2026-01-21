
import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

export const askConsultant = async (query: string, reportContext: string) => {
  if (!apiKey) return "API Key no configurada.";

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `CONTEXTO DEL REPORTE IA 2026:\n${reportContext}\n\nPREGUNTA DEL USUARIO: ${query}`,
      config: {
        systemInstruction: `Eres un consultor de IA experto que SOLO responde basándose en el 'Informe Comparativo de IA 2026' proporcionado. 
        - Si la información no está en el reporte, di honestamente que no dispones de esos datos específicos en el informe actual.
        - Sé conciso, profesional y usa un tono de analista estratégico. 
        - Cita datos específicos como 'el 57% de las empresas' o '2 millones de tokens' cuando sea relevante.`,
        temperature: 0.1, // Low temperature for high factual accuracy based on context
      }
    });
    return response.text || "Lo siento, no pude procesar tu consulta.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error de conexión con el consultor inteligente.";
  }
};
