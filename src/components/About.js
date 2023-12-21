import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    fontFamily: "'Exo 2', sans-serif"
  }

  let myStyle2 = {
    color: props.mode === "dark" ? "white" : "black",
    fontFamily: "'Glass Antiqua', cursive"
  }

  return (
  <div className="container my-3" style={{padding: "70px"}}>
    <h1 style={myStyle2} className="my-3">About Us...</h1>
    <h4 style={myStyle}>Founder </h4>
    <h5 style={myStyle}>Honey Patkar, Front-End Developer</h5> 
    <p style={myStyle}>I'm Honey Patkar learning Front-End developing this is my first website that i made using React Js.</p>
    <br/>
    <h1 style={myStyle2} className="my-3">More Info..</h1>  
    <h5 style={myStyle}>You can find more information about me on my personal Portfolio and in my Resume I mention them below..</h5>
    <h5 style={myStyle}><a href="https://portfolio.honeypatkar.repl.co/">Personal Portfolio</a></h5>
    <h5 style={myStyle}><a href="https://resume.honeypatkar.repl.co/">Resume</a></h5>
</div>

  );
}
