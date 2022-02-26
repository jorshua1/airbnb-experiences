import React from "react";

function Joke(props){
    return(
        <div className="text-2xl m-4 p-4 bg-zinc-900 shadow-xl text-white">
            <p>{props.setup}, {props.punch}</p>
        </div>
    )
}

export default Joke