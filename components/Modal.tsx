
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform animate-in slide-in-from-bottom-4 duration-300">
        <div className="px-6 py-4 border-b border-stone-100 flex justify-between items-center">
          <h3 className="text-xl font-serif text-stone-800">{title}</h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600 transition-colors">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
