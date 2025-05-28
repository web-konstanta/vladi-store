import React, { useEffect, useRef } from "react";

interface FaqProps {
  isOpen: boolean;
  onClose: () => void;
}

const Faq: React.FC<FaqProps> = ({ isOpen, onClose }) => {
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (faqRef.current && !faqRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
    >
      <div
        ref={faqRef}
        className="relative flex w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg md:flex"
      >
        <div className="flex flex-col justify-center p-8">
          <h2 className="mb-4 text-center text-lg font-semibold">FORM</h2>
          <h3 className="mb-4 text-center text-2xl font-bold">Unique offers await you</h3>
          <form className="space-y-4 max-w-[354px]">
            <input type="email" placeholder="Email" className="w-full rounded border px-4 py-2" />
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded border px-4 py-2"
            />
            <button type="submit" className="w-full rounded bg-black px-4 py-2 text-white">
              COUNT ME IN
            </button>
          </form>
        </div>
        <div className="hidden w-1/2 md:block">
          <img src="/images/faq.png" alt="form" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
