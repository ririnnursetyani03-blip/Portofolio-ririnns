
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize AI client using the provided environment variable
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY as string });
};

export const chatWithPortfolioAssistant = async (message: string, profile: any): Promise<string> => {
  const ai = getAIClient();
  const systemInstruction = `Anda adalah asisten portofolio profesional untuk ${profile.name}, yang merupakan seorang ${profile.role}. 
  Berikut adalah bio mereka: ${profile.bio}. 
  Jawablah pertanyaan tentang latar belakang, keahlian, dan proyek mereka dengan nada yang membantu dan profesional dalam Bahasa Indonesia. 
  Pastikan jawaban ringkas dan menarik.`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    // Accessing .text property directly as per guidelines
    return response.text || "Maaf, saya tidak dapat memproses permintaan tersebut saat ini.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "Asisten AI sedang beristirahat sebentar. Silakan coba lagi nanti.";
  }
};
