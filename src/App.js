import React, { useRef, useEffect, useState } from "react";
import "./App.css";

function App() {
  const canvas = useRef();
  const [value, setValue] = useState("");
  let ctx = null;

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    ctx = canvasEle.getContext("2d");
  });

  useEffect(() => {
    writeText({ text: value, x: 1, y: 30 });
  });

  const writeText = (info, style = {}) => {
    const { text, x, y } = info;
    const {
      fontSize = 20,
      fontFamily = "Arial",
      color = "black",
      textAlign = "left",
      textBaseline = "top"
    } = style;

    ctx.beginPath();
    ctx.font = fontSize + "px " + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h1> Canvas Typer ...! </h1>
      <div className="canvas-container">
        <canvas ref={canvas} />
      </div>
      <input
        type="text"
        placeholder="Type Something to display in canvas!"
        style={{ width: "300px", padding: "10px", borderRadius: "10px" }}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
