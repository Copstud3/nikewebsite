import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  // State to track if the button should be visible or not
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hook to listen to scroll events and show the button when the user scrolls past the home section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) { // Show button after scrolling 500px from the top
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-coral-red text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
