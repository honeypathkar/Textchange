import React, { useState } from "react";

export default function Form(props) {
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLwCase = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
  };

  const handleCapitalCase = () => {
    let words = text;
    let newWord = words.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );

    setText(newWord);
  };

  const handleClearCase = () => {
    let newText1 = "";
    setText(newText1);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  function countWords(str) {
    const arr = str.split(/\s+/);

    return arr.filter((word) => word !== "").length;
  }

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#404040" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            disabled={text.length===0}
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-1 my-1`}
            onClick={handleUpCase}
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length===0}
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-1 my-1`}
            onClick={handleLwCase}
          >
            Convert to LowerCase
          </button>
          <button
            type="button"
            disabled={text.length===0}
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-1 my-1`}
            onClick={handleCapitalCase}
          >
            Capatalized Case
          </button>
          <button
            type="button"
            disabled={text.length===0}
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-1 my-1`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            type="button"
            disabled={text.length===0}
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-1 my-1`}
            onClick={handleClearCase}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {countWords(text)} words and {text.length} character
        </p>
        <p>{0.008 * countWords(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview"}
        </p>
      </div>
    </>
  );
}
