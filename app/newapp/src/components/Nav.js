import "../stylesheets/Nav.css";
import Datamenu from "../data/DataMenu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

function Nav({ height, setHeightImg }) {
  const useBtnRefNav = useRef();
  const [show, setShow] = useState(false);
  const [menuBull, setMenuBull] = useState(true);
  const [menuShow, setMenushow] = useState(true);
  const [menuShowDaown, setMenushowDaown] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", toggleButtonHandlerNav);

    return () => {
      clearInterval();
      window.removeEventListener("scroll", toggleButtonHandlerNav);
    };
  });

  const toggleButtonHandlerNav = () => {
    if (useBtnRefNav.current.getBoundingClientRect().y >= height) {
      setShow(true);
    } else {
      setShow(false);
    }
    setHeightImg(useBtnRefNav.current.getBoundingClientRect());
  };

  const Menu = Datamenu.map((el, i) => {
    return (
      <div
        ref={useBtnRefNav}
        key={i}
        className={menuBull ? "nav" : "nav_false"}
      >
        <div className="flex_menu">
          <div
            onClick={() => {
              setMenuBull(!menuBull);
            }}
            className={menuBull ? "close" : "close_false"}
          >
            {menuBull ? (
              <GiHamburgerMenu className="menu_icon_btn" />
            ) : (
              <AiOutlineClose className="menu_icon_btn" />
            )}
          </div>
          <img
            className="img_google"
            src="./img/Google_logo_and_Chrome_wordmark.png"
          />
        </div>
        <ul className={menuBull ? "nav_list" : "nav_list_false"}>
          <li className="nav_item">{el.Home}</li>
          <li className="nav_item">{el.theBrouwserbyGoogle}</li>
          <li className="nav_item">
            <div className="dropdown">
              <button
                onClick={() => {
                  setMenushow(!menuShow);
                }}
                className="dropbtn"
              >
                {el.feuter}
                <MdKeyboardArrowDown
                  className={
                    menuShow ? "boardArrowDown" : "boardArrowDown_false"
                  }
                />
              </button>
              <div
                className={
                  menuShow ? "dropdown-content" : "dropdown-content_false"
                }
              >
                <a href="#">Overview</a>
                <a href="#">Google address bar</a>
                <a href="#">FromPassword Check</a>
                <a href="#">Sync</a>
                <a href="#">Dark mode</a>
                <a href="#">Tabs</a>
                <a href="#">Extanshions</a>
              </div>
            </div>
          </li>
          <li className="nav_item">
            <div className="dropdown">
              <button
                onClick={() => {
                  setMenushowDaown(!menuShowDaown);
                }}
                className="dropbtn"
              >
                {el.support}
                <MdKeyboardArrowDown
                  className={
                    menuShowDaown ? "boardArrowDown" : "boardArrowDown_false"
                  }
                />
              </button>
              <div
                className={
                  menuShowDaown ? "dropdown-content" : "dropdown-content_false"
                }
              >
                <a href="#">Helpful tips for Chrome</a>
                <a href="#">
                  Sopport
                  <BsArrowUpRight />
                </a>
              </div>
            </div>
          </li>
        </ul>

        <button className={show ? "chrombtn_nav" : "none"}>
          Download Chrome
        </button>
      </div>
    );
  });

  return <>{Menu}</>;
}

export default Nav;
