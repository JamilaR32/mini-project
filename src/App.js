import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import { useState } from "react";

function App() {
  const [build, setBuild] = useState(0);
  const [pocket, setPocket] = useState(0);
  const [clicked, setclicked] = useState(1);
  // const [interval, setInterval] = useState(pocket);

  function checking(price) {
    if (pocket >= price) {
      return false;
    } else {
      return true;
    }
  }

  const Increase = () => {
    setBuild(build + clicked);
    setPocket(pocket + clicked);
  };

  // const score = build;
  // function increment() {
  //   score = (score % 360) + 1;
  // }

  const Buy10 = () => {
    setPocket(pocket - 10);
    setclicked(clicked + 1);
  };
  const Inc50BySecond = () => {
    setPocket(pocket - 50);
    // setInterval(interval % 360, 1000);
    // setPocket(pocket + interval);
    // setclicked(clicked +1);
  };
  return (
    <div
      height="100vh"
      class="d-flex justify-content-center align-items-center flex-column"
    >
      <div
        class="
        card
        text-bg-info
        mb-3 d-flex justify-content-center align-items-center"
        height="700px"
      >
        <div class="d-flex  flex-column justify-content-center align-items-center gap-3 ">
          <label style={{ height: "80px", fontSize: "large" }}>{build}</label>
          <button
            onClick={Increase}
            type="button"
            class="btn btn-warning btn-lg"
          >
            Increase Your Money
          </button>
          {/* {pocket >= 10 ? false : true} */}
          <button
            type="button"
            class="btn btn-secondary h-50"
            onClick={Buy10}
            disabled={checking(10)}
          >
            Buy this By 10 Dollar!
          </button>{" "}
          {/* <h1>{interval}</h1> */}
          {/* {pocket >= 50 ? false : true} */}
          <button
            disabled={checking(50)}
            onClick={Inc50BySecond}
            type="button"
            class="btn btn-secondary btn-lg"
          >
            <h1>Increase By Second !!!</h1>
          </button>
          <div>{/* <label>{interval}</label> */}</div>
          <div>
            <img
              height="30px"
              src="https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-gold-coins-stack-concept-illustration-in-flat-style-isolated-png-image_6598445.png"
            />
            <label for="exampleInputEmail1" class="form-label">
              {pocket}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
