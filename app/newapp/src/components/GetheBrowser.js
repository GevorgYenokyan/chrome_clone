import "../stylesheets/GetheBrowser.css";
import { BsArrowUpRight } from "react-icons/bs";
import { useRef, useEffect, useState } from "react";

function GetheBrowser({ heightImg }) {
  const imgDivRef = useRef();
  const [heightbull, setHeightbull] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleButtonHandler);

    return () => {
      clearInterval();
      window.removeEventListener("scroll", toggleButtonHandler);
    };
  }, []);

  const toggleButtonHandler = () => {
    if (imgDivRef.current.getBoundingClientRect().y <= heightImg) {
      setHeightbull(true);
    }
  };

  return (
    <div ref={imgDivRef} className="gettheBrowser_contener">
      <div className="gettheBrowser_text_div">
        <h2 className="gettheBrowser_text_head">Get the Browser by Google</h2>
        <button className="gettheBrowser_btn">
          Download Chrome now
          <BsArrowUpRight className="gettheBrowser_btn_bsArrowRight" />
        </button>
      </div>
      <div className="gettheBrowser_img">
        <img
          className={heightbull ? "homepage_privacy2" : "anime1"}
          src="./img/homepage_privacy2.png"
          alt=""
        />
        <img
          className={heightbull ? "pixel_tabletpng_up" : "anime2"}
          src="./img/pixel_tablet.png"
          alt=""
        />
        <img
          className={heightbull ? "pixel_tabletpng_doun" : "anime3"}
          src="./img/pixel_tablet.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default GetheBrowser;
