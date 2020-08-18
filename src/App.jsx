import React from "react";
import Avatar from "./components/Avatar";
import "./css/styles.css";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <h1>Customizable Avatar</h1>
      <div className="main-container">
        {data.map((item) => (
          <Avatar size={item.size} type={item.type} sides={item.sides} />
          //renders the component Avatar with each iteration
        ))}
      </div>
    </> //same as <Fragment></Fragment>
  );
}

export default App;
