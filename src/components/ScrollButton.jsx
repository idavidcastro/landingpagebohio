import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const footerThreshold = documentHeight - windowHeight * 2;

    setIsVisible(scrollTop > 300);
    setIsAtFooter(scrollTop > footerThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        ...buttonStyle,
        display: isVisible ? "block" : "none",
        backgroundColor: isAtFooter ? "#FFFFFF" : "#27A959",
      }}
    >
      <FontAwesomeIcon
        icon={faChevronUp}
        style={{ color: isAtFooter ? "#27A959" : "#FFFFFF" }}
      />
    </button>
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  width: "50px",
  height: "50px",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  zIndex: 1000,
};

export default ScrollButton;
