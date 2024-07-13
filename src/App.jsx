import { useState } from "react";
import HeaderDemo from "./components/HeaderDemo";
import HomeDemo from "./components/HomeDemo";
import NavDemo from "./components/NavDemo";
import ContentDemo from "./components/ContentDemo";
import RenderShoes from "./components/RenderShoes";
import DemoEvent from "./components/DemoEvent";
import DemoCss from "./components/DemoCss/DemoCss";
import DemoState from "./components/DemoState/DemoState";
import BaiTap1State from "./components/DemoState/BaiTap1State";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <DemoCss />
      <HomeDemo />
      <HeaderDemo />
      <HeaderDemo />
      <div className="grid grid-cols-3 h-40">
        <NavDemo />
        <ContentDemo />
      </div>
      <RenderShoes />
      <DemoEvent />

      <div className="container">
        <h5 className="demo_sass">Hello Bé Ba</h5>
      </div>
      <DemoState /> */}
      <BaiTap1State abc={count} />
    </>
  );
}

export default App;
