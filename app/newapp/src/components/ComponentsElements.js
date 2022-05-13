import "../stylesheets/ExploreGoogle.css";
import { BsArrowRight } from "react-icons/bs";

const ComponentsElements = ({ el }) => {
  return (
    <div
      className="ExploreGoogleContenier"
      id={`ExploreGoogleContenier${el.id}`}
    >

      <div className="bulty_by">
        <p className="bulty_by_head">{el.bulty_by_head}</p>
        <h2 className="Browse_with">{el.Browse_with}</h2>
        <p className="Google_apps">{el.Google_apps}</p>
        <div className="googleTextcontenier">
          <a className="googleText" href="#">
            {el.googleText}{" "}
            <a className="for_more_link_arrow"> {el.bsArrowRight}</a>
          </a>
        </div>
      </div>
      <div className="ExploreGoog_icons">
        <img
          id={`img_homepage${el.id}`}
          className="img_homepage"
          src={el.img_homepage}
          alt=""
        />
      </div>
    </div>
  );
};

export default ComponentsElements;
