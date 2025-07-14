import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-peach-200 text-white shadow-lg hover:bg-peach-300 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
