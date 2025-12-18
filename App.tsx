
import React, { useState } from 'react';
import { HairType, ConsultationFormData } from './types';
import { HAIR_ROUTINES, DAILY_TIPS, CARE_STEP_BY_STEP } from './constants';
import Modal from './components/Modal';
import HairConsultantAI from './components/HairConsultantAI';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'info' | 'routines' | 'form'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    hairType: HairType.NORMAL,
    concern: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.concern) {
      alert(`Thank you, ${formData.name}! Your consultation request for ${formData.hairType} hair has been received. We will analyze your concern: "${formData.concern}"`);
      setFormData({ name: '', hairType: HairType.NORMAL, concern: '' });
    }
  };

  const NavItem = ({ section, label }: { section: typeof activeSection, label: string }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`px-4 py-2 rounded-lg transition-all ${
        activeSection === section 
          ? 'bg-stone-900 text-white shadow-lg' 
          : 'text-stone-600 hover:bg-stone-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center text-white rotate-12 shadow-md">
            <i className="fa-solid fa-spa text-xl"></i>
          </div>
          <h1 className="text-2xl font-serif font-bold tracking-tight">LushLocks</h1>
        </div>
        <nav className="flex gap-2">
          <NavItem section="home" label="Home" />
          <NavItem section="info" label="Growth" />
          <NavItem section="routines" label="Routines" />
          <NavItem section="form" label="Consult" />
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 space-y-24">
        
        {/* Hero Section */}
        {activeSection === 'home' && (
          <section className="animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
                  Welcome to Hair Wellness
                </span>
                <h2 className="text-5xl md:text-6xl font-serif leading-tight text-stone-900">
                  Unlock the Science of <span className="text-emerald-700 italic">Healthy Hair</span>
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed max-w-xl">
                  Healthy hair isn't just about the products you use; it's a reflection of your lifestyle, nutrition, and understanding of your unique hair cycle. Explore our comprehensive guide to revitalize your locks.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setActiveSection('info')}
                    className="px-8 py-4 bg-stone-900 text-white rounded-xl font-medium shadow-xl hover:bg-stone-800 transition-all hover:-translate-y-1"
                  >
                    Explore Science
                  </button>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-xl font-medium shadow-md hover:bg-stone-50 transition-all"
                  >
                    Quick Tips
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
                <img 
                  src="https://picsum.photos/seed/hair/800/800" 
                  alt="Beautiful healthy hair" 
                  className="relative w-full aspect-square object-cover rounded-[2rem] shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            <div className="mt-24 grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-2xl border border-stone-100 shadow-sm">
                <i className="fa-solid fa-dna text-3xl text-emerald-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Genetic Insights</h3>
                <p className="text-stone-500">Learn how heredity affects your hair density and growth speed.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-stone-100 shadow-sm">
                <i className="fa-solid fa-carrot text-3xl text-emerald-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Nutrition Guide</h3>
                <p className="text-stone-500">Discover the vitamins and minerals that fuel follicular strength.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-stone-100 shadow-sm">
                <i className="fa-solid fa-flask text-3xl text-emerald-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Proven Methods</h3>
                <p className="text-stone-500">Scientific approach to routine building for every hair type.</p>
              </div>
            </div>
          </section>
        )}

        {/* Info Section */}
        {activeSection === 'info' && (
          <section className="space-y-16 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-serif font-bold mb-6">The Hair Growth Cycle</h2>
              <div className="space-y-6 text-lg text-stone-600">
                <div className="p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl">
                  <h4 className="font-bold text-emerald-800 mb-1">1. Anagen (Growth Phase)</h4>
                  <p>The active phase where cells in the root divide rapidly. Can last from 2 to 7 years.</p>
                </div>
                <div className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                  <h4 className="font-bold text-amber-800 mb-1">2. Catagen (Transition Phase)</h4>
                  <p>A short phase that lasts about 2-3 weeks where the hair stops growing and detaches from the blood supply.</p>
                </div>
                <div className="p-6 bg-rose-50 border-l-4 border-rose-500 rounded-r-xl">
                  <h4 className="font-bold text-rose-800 mb-1">3. Telogen (Resting Phase)</h4>
                  <p>Lasting around 3 months, this is when hairs are released and fall out, making way for new growth.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-star text-emerald-500"></i> Daily Excellence
                </h3>
                <ul className="space-y-4">
                  {DAILY_TIPS.map((tip, idx) => (
                    <li key={idx} className="flex gap-4 items-start group">
                      <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex-shrink-0 flex items-center justify-center text-xs font-bold group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <span className="text-stone-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone-900 p-8 rounded-3xl shadow-xl text-white">
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-list-check text-emerald-400"></i> Standard Routine
                </h3>
                <ol className="space-y-6">
                  {CARE_STEP_BY_STEP.map((step, idx) => {
                    const [title, desc] = step.split(': ');
                    return (
                      <li key={idx} className="flex gap-4 items-start">
                        <div className="text-emerald-400 font-serif italic text-3xl opacity-50">0{idx + 1}</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{title}</h4>
                          <p className="text-stone-400 text-sm">{desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* Routines Table Section */}
        {activeSection === 'routines' && (
          <section className="space-y-12 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-4xl font-serif font-bold">Recommended Regimens</h2>
              <p className="text-stone-600">Every hair type requires a unique approach. Use our reference table to build your baseline routine.</p>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-xl bg-white">
              <table className="w-full text-left">
                <thead className="bg-stone-50 border-b border-stone-200">
                  <tr>
                    <th className="px-8 py-5 text-sm font-bold text-stone-500 uppercase tracking-wider">Hair Type</th>
                    <th className="px-8 py-5 text-sm font-bold text-stone-500 uppercase tracking-wider">Recommended Routine</th>
                    <th className="px-8 py-5 text-sm font-bold text-stone-500 uppercase tracking-wider">Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {HAIR_ROUTINES.map((routine, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <span className="inline-block px-3 py-1 bg-stone-100 rounded-md text-stone-900 font-semibold text-sm">
                          {routine.hairType}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-stone-700 leading-relaxed">{routine.recommendedRoutine}</td>
                      <td className="px-8 py-6 font-medium text-emerald-700">{routine.suggestedFrequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-8 bg-stone-50 rounded-2xl flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Need more specific advice?</h4>
                <p className="text-stone-500">Try our AI-powered consultation tool for personalized suggestions.</p>
              </div>
              <button 
                onClick={() => setActiveSection('form')}
                className="px-8 py-3 bg-stone-900 text-white rounded-xl shadow-lg hover:bg-stone-800 transition-all"
              >
                Start Consultation
              </button>
            </div>
          </section>
        )}

        {/* Interaction/Form Section */}
        {activeSection === 'form' && (
          <section className="grid lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-4">Hair Consultation</h2>
                <p className="text-stone-600 text-lg">Tell us about your hair, and get professional guidance. Our AI assistant is also available below for real-time questions.</p>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-900 outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Hair Type</label>
                  <select
                    value={formData.hairType}
                    onChange={(e) => setFormData({...formData, hairType: e.target.value as HairType})}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-900 outline-none transition-all"
                  >
                    {Object.values(HairType).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Current Concern</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.concern}
                    onChange={(e) => setFormData({...formData, concern: e.target.value})}
                    placeholder="Describe your hair issues (e.g., dryness, hair loss, frizz)..."
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-900 outline-none transition-all"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:scale-[1.01] transition-all"
                >
                  Submit Consultation
                </button>
              </form>
            </div>

            <div className="space-y-6">
               <h3 className="text-2xl font-serif font-bold flex items-center gap-2">
                 <i className="fa-solid fa-sparkles text-emerald-500"></i>
                 Ask Our AI Expert
               </h3>
               <HairConsultantAI />
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-stone-800 pb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-stone-900 shadow-md">
              <i className="fa-solid fa-spa text-lg"></i>
            </div>
            <h2 className="text-xl font-serif font-bold text-white tracking-tight">LushLocks</h2>
          </div>
          <div className="flex gap-8 text-sm">
            <button onClick={() => setActiveSection('info')} className="hover:text-white transition-colors">Science</button>
            <button onClick={() => setActiveSection('routines')} className="hover:text-white transition-colors">Routines</button>
            <button onClick={() => setActiveSection('form')} className="hover:text-white transition-colors">Consult</button>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all">
              <i className="fa-brands fa-instagram"></i>
            </button>
            <button className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all">
              <i className="fa-brands fa-pinterest"></i>
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 text-center text-xs opacity-50">
          &copy; {new Date().getFullYear()} LushLocks Hair Care Guide. Professional trichology information for educational purposes.
        </div>
      </footer>

      {/* Modals & Overlays */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Quick Care Secrets"
      >
        <div className="space-y-4">
          <p className="text-stone-600">The most important secret to hair health is consistency. Here are 3 things you can start doing today:</p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <i className="fa-solid fa-check text-emerald-500 mt-1"></i>
              <span><strong>Hydrate:</strong> Drink at least 2L of water daily for follicle moisture.</span>
            </li>
            <li className="flex gap-3">
              <i className="fa-solid fa-check text-emerald-500 mt-1"></i>
              <span><strong>Cold Rinse:</strong> Finish every shower with a cool blast to close cuticles.</span>
            </li>
            <li className="flex gap-3">
              <i className="fa-solid fa-check text-emerald-500 mt-1"></i>
              <span><strong>Protective Styles:</strong> Avoid heat and friction during sleep.</span>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default App;
