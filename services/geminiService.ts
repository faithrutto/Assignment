
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHairAdvice = async (history: Message[], userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: "You are an expert trichologist (hair and scalp specialist). Provide scientifically backed, professional advice on hair growth and care. Be encouraging, precise, and keep responses concise (under 150 words).",
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate advice at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "There was an error connecting to the expert system. Please try again later.";
  }
};
