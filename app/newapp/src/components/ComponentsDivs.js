import ComponentsElements from "./ComponentsElements";
import ComponentsData from "../data/ComponentsData";

function ComponentsDivs() {
  return (
    <div className="components">
      {ComponentsData.map((el) => (
        <ComponentsElements el={el} />
      ))}
    </div>
  );
}

export default ComponentsDivs;
