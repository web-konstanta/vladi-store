"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return visible ? (
    <button
      onClick={handleClick}
      className="fixed right-6 bottom-6 z-50 rounded-full bg-[#DBD0BF] p-4 mb-5 transition hover:bg-[#c2b39e]"
      aria-label="Scroll to top"
    >
      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  ) : null;
};

export default ScrollToTop;
