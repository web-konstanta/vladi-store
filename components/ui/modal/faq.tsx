import React, { useEffect, useRef } from "react";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        ref={faqRef}
        className="relative flex w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg md:flex"
      >
        <div className="flex flex-col justify-center p-8">
          <div className="max-w-[354px]">
            <div className="relative">
              <h2 className={`${lora.className} mb-4 text-center text-[64px] font-semibold`}>
                FORM
              </h2>
              <button
                onClick={onClose}
                className="absolute top-0 -right-2 cursor-pointer text-2xl md:hidden"
              >
                &#10005;
              </button>
            </div>
          </div>
          <form className="max-w-[354px] space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded border border-black px-4 py-4"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded border px-4 py-4"
            />
            <textarea
              className="w-full rounded border px-4 py-4"
              placeholder="Write suggestions or questions and we'll get back to you:)"
              rows={6}
            ></textarea>
            <button type="submit" className="w-full rounded bg-[#27241F] px-4 py-4 text-white">
              CONTACT US
            </button>
          </form>
        </div>
        <div className="relative hidden w-1/2 md:block">
          <img src="/images/faq.png" alt="form" className="h-full w-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-7 right-7 cursor-pointer text-2xl text-white"
          >
            &#10005;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
