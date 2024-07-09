import { useState } from "react";
import HeaderDemo from "./components/HeaderDemo";
import HomeDemo from "./components/HomeDemo";
import NavDemo from "./components/NavDemo";
import ContentDemo from "./components/ContentDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeDemo />
      <HeaderDemo />
      <HeaderDemo />
      <div className="grid grid-cols-3 h-40">
        <NavDemo />
        <ContentDemo />
      </div>
    </>
  );
}

export default App;
