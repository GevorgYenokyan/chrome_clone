import MoreFronCromeData from "../data/MoreFronCromeData";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
function GooglDivs() {
  const usrDivref = useRef();
  const useContener = useRef();
  const hetref = useRef();
  const [index, setIndex] = useState(0);
  const [previndex, setPrevindex] = useState(1);
  const [width, setWidth] = useState(null);
  const [grad, setGrad] = useState();
  useEffect(() => {
    slider();
  }, [index]);

  const next = () => {
    setIndex(-1);
  };

  const prev = () => {
    setIndex(1);
    setWidth(previndex);
  };

  const slider = () => {
    setWidth(
      useContener.current.getBoundingClientRect().width -
        usrDivref.current.getBoundingClientRect().width -
        hetref.current.scrollLeft
    );
    setPrevindex(hetref.current.scrollLeft);
    setGrad(
      ((usrDivref.current.getBoundingClientRect().width +
        hetref.current.scrollLeft) /
        useContener.current.getBoundingClientRect().width) *
        100
    );
    console.log("18", grad);
    console.log(width);
    useContener.current.style.transform = `translate(${index * width}px)`;
  };
  const jsxData = MoreFronCromeData.map((el) => {
    return (
      <div key={el.id} className="for_more_childe_div">
        <img className="for_more_img" src={el.for_more_img} alt="" />
        <h2 className="for_more_head">{el.for_more_head}</h2>
        <p className="for_more_text">{el.for_more_text}</p>
        <div className="for_more_link">
          <a href="#" className="for_more_link_text">
            {el.for_more_link_text}
          </a>
          {el.for_more_link_arrow}
        </div>
      </div>
    );
  });
  return (
    <div ref={usrDivref} onMouseMove={slider} className="btn_div">
      <div ref={hetref} className="div_slide">
        <div ref={useContener} className="for_more">
          {jsxData}
        </div>
      </div>
      <h2 className="pag_num">{1 + index} of 2</h2>
      <AiOutlineArrowLeft className="btn_prev" onClick={prev} />
      <AiOutlineArrowRight className="btn_next" onClick={next} />
      <div
        style={{
          background: `linear-gradient(90deg,#090979 ${grad}%, rgba(253,255,254,0.9304096638655462) 35%)`,
        }}
        className="line"
      ></div>
    </div>
  );
}
export default GooglDivs;
