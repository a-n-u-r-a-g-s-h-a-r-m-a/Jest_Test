import React, { useState } from "react";
import "./CustomPage.css";

const CustomPage = ({ title }) => {
  const [number, setNumber] = useState("");

  return (
    <div className="main-container">
      <h1
        data-testid="title-header"
      >{title}</h1>
      <input
        value={number}
        placeholder="Number"
        className="item"
        onChange={(e) => {
          if (e.target.value == "" || e.target.value.match(/^-?\d*\.?\d*$/))
            setNumber(e.target.value);
        }}
      />
    </div>
  );
};

export default CustomPage;
