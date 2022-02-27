import React from "react";

function Joke(props) {
  const colors = [
    <h3>Red</h3>,
    <h3>Blue</h3>,
    <h3>White</h3>,
    <h3>Green</h3>,
    <h3>Black</h3>,
  ];
  return (
    <div className="text-2xl m-4 p-4 bg-zinc-900 shadow-xl text-white">
      <p>{props.setup}, {props.punch}</p>
      {/* {colors} */}
    </div>
  );
}

export default Joke;
