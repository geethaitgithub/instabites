import React from "react";
import ReactDOM from "react-dom/client";


//All the compnents in single file


 
/* Creating react elements and rendering in root_react  */ 

const heading = React.createElement("h1", {id: "title"}, "Title using React");
const root_react = ReactDOM.createRoot(document.getElementById("root_react"));
root_react.render(heading);

/* Nested React Elements inside container div and rendering in root */
const heading1 = React.createElement("h1", {id: "title"}, "nested_heading1");
const heading2 = React.createElement("h2", {id: "sub_title"}, "nested_heading2");
const root_nestedelement = ReactDOM.createRoot(document.getElementById("root_nestedelement"));
const container = React.createElement("div", {id: "content"}, [heading1, heading2]);
root_nestedelement.render(container);

/*COMPONENT COMPOSITION*/ 
const Newcomponent = () => (
    <h3>second  component to check component composition</h3>
);
const NewHeader = () => (
<div>
  <h3>First component </h3>
  <Newcomponent />
</div>
);

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  //root.render(heading);
  // passing functional component inside root
  root.render(<NewHeader />);