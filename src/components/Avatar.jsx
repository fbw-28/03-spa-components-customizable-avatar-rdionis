import React from "react";
import doggy from "../img/1.jpg";

const Avatar = ({ size, type, sides }) => {
  return (
    <div className="container rounded">
      <img className={`${size} ${type}`} src={doggy} alt="little white doggy" />
      <p>
        size <span className="bold">{size}</span> with {sides}
      </p>
      <p>
        type <span className="bold">{type}</span>
      </p>
    </div>
  );
};

export default Avatar;
