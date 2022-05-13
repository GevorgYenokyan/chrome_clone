import "../stylesheets/MoreFronCrome.css";
import GooglDivs from "./GooglDivs";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";

function MoreFronCrome() {
  return (
    <div className="MoreFronCromeDiv">
      <p className="more_text">MORE FROM CHROME</p>
      <h2 className="Discover_more">Discover more tools and resources</h2>
      <GooglDivs />
    </div>
  );
}

export default MoreFronCrome;
