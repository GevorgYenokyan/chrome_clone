import { useState } from "react";
import "./App.css";
import BrowserBuilt from "./components/ BrowserBuilt";
import ComponentsDivs from "./components/ComponentsDivs";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import GetheBrowser from "./components/GetheBrowser";
import GooglePrivasy from "./components/GooglePrivasy";
import MoreFronCrome from "./components/MoreFronCrome";
import Nav from "./components/Nav";

function App() {
  const [height, setHeight] = useState(null);
  const [heightImg, setHeightImg] = useState(null);

  
  return (
    <div className="App">
      <Nav height={height} setHeightImg={setHeightImg} />
      <BrowserBuilt setHeight={setHeight} />
      <ComponentsDivs />
      <MoreFronCrome />
      <GetheBrowser heightImg={heightImg} />
      <FollowUs />
      <Footer />
      <GooglePrivasy />
    </div>
  );
}

export default App;
