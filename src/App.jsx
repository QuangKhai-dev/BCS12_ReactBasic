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
import BaiTap1Props from "./components/BaiTap/BaiTap1Props";
import BaiTapHienThiDienThoai from "./components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";

function App() {
  const [count, setCount] = useState(0);
  function updateStateCount() {
    setCount(count + 1);
  }
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
      {/* <BaiTap1State updateStateCount={updateStateCount} abc={count} /> */}
      {/* <BaiTap1Props /> */}
      <BaiTapHienThiDienThoai />
    </>
  );
}

export default App;
