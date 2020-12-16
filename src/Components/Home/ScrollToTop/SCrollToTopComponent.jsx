import React, { useState } from "react";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import "./ScrollToTopStyle.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <ArrowUpwardRoundedIcon
      className="scrollTop"
      onClick={scrollTop}
      style={{
        height: 60,
        width: 40,
        display: showScroll ? "flex" : "none",
        right: 0,
        float: "right",
      }}
    />
  );
};

export default ScrollArrow;
