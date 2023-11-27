import React, { useEffect } from "react";
import style from "../styles/socialFeed.style.module.css";

const YoutubeWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="container common-container four_content body-container top-body-container padding-top-bott2"
      role="complementary"
    >
      <h3 className={style.heading}>Youtube</h3>
      <div
        className="elfsight-app-0156ceda-15c1-4f5a-a9a3-ec390570d8fb"
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default YoutubeWidget;
