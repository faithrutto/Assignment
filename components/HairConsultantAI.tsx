
import React, { useState, useRef, useEffect } from 'react';
import { getHairAdvice } from '../services/geminiService';
import { Message } from '../types';

const HairConsultantAI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your AI Hair Consultant. Tell me about your hair concerns or ask anything about hair growth!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const advice = await getHairAdvice(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
      <div className="p-4 bg-stone-900 text-white flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
          <i className="fa-solid fa-robot"></i>
        </div>
        <div>
          <h3 className="font-semibold leading-none">Expert AI Consultant</h3>
          <span className="text-xs text-stone-400">Powered by Gemini</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl p-4 ${
              m.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-stone-100 text-stone-800 rounded-tl-none'
            }`}>
              <p className="text-sm leading-relaxed">{m.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-stone-100 p-4 rounded-2xl rounded-tl-none flex gap-1">
              <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-stone-100 bg-stone-50">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about breakage, growth, products..."
            className="w-full pl-4 pr-12 py-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all shadow-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-lg hover:bg-stone-800 disabled:bg-stone-300 transition-colors"
          >
            <i className="fa-solid fa-paper-plane text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HairConsultantAI;
