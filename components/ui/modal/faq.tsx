"use client";

import React, { useEffect, useRef, useState } from "react";
import { Noto_Sans } from "next/font/google";
import CloseFormIcon from "@/components/icons/close-form";
import { useTranslation } from "@/context/translation-context";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

interface FaqProps {
  isOpen: boolean;
  onClose: () => void;
}

const Faq: React.FC<FaqProps> = ({ isOpen, onClose }) => {
  const faqRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (faqRef.current && !faqRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (res.ok) {
        setStatus(t("faq.success_message"));
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(t("faq.error_message"));
      }
    } catch {
      setStatus(t("faq.server_error"));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`${noto.className} fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm`}
      onClick={handleOverlayClick}
    >
      <div
        ref={faqRef}
        className="relative m-auto flex h-[600px] w-full max-w-[1320px] flex-col overflow-hidden rounded-lg bg-white shadow-lg sm:h-[533px] sm:flex-row"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-[20px] text-black sm:top-[40px] sm:right-10 sm:text-[24px]"
        >
          <CloseFormIcon />
        </button>

        {/* Левая колонка */}
        <div className="flex w-full flex-col justify-between border-r-0 border-b bg-white p-4 sm:max-w-[252px] sm:border-r sm:border-b-0 sm:p-[35px]">
          <div>
            <h2 className="mb-2 text-lg font-bold sm:mb-4 sm:text-2xl">{t("faq.contacts")}</h2>
            <p className="mb-1 text-xs sm:mb-2 sm:text-sm">+ 380 (057) 743 56 97</p>
            <p className="mb-1 text-xs sm:mb-2 sm:text-sm">+ 380 (067) 919 38 53</p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold sm:mb-2 sm:text-2xl">
              {t("faq.warehouse_address")}
            </h3>
            <p className="mb-1 text-xs sm:mb-2 sm:text-sm">{t("faq.address_country")}</p>
            <p className="text-xs sm:text-sm">{t("faq.address_city")}</p>
          </div>
        </div>

        {/* Правая колонка (форма) */}
        <div className="relative flex-1 bg-white p-4 pt-8 pb-2 sm:pt-[40px] sm:pr-[40px] sm:pb-[105px] sm:pl-[32px]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 hidden cursor-pointer text-[20px] text-black sm:top-[40px] sm:right-10 sm:text-[24px] md:block"
          >
            <CloseFormIcon />
          </button>

          <h2 className="mb-3 text-lg font-bold sm:mb-[16px] sm:text-xl">
            {t("faq.send_request")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="flex flex-col space-y-3 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder={t("faq.name_placeholder")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 rounded border px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base"
              />
              <input
                type="email"
                placeholder={t("faq.email_placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded border px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base"
              />
            </div>
            <textarea
              rows={4}
              placeholder={t("faq.message_placeholder")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="sm:rows-6 w-full rounded border px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-1 h-[50px] w-full rounded border border-[#27241F] px-4 text-center text-sm hover:bg-gray-100 disabled:opacity-50 sm:h-[60px] sm:w-[400px] sm:text-base"
            >
              {loading ? t("faq.sending") : t("faq.send_button")}
            </button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
