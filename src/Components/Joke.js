import React from "react";

function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);
  function toggleShown() {
    // estado actual false, luego de ejecutada la funcion se cambia el estado al contrario del actual (false -> true)
    setIsShown((prevShown) => !prevShown);
    console.log(isShown)
  }

  return (
    <div className="text-2xl m-4 p-4 bg-zinc-900 shadow-xl text-white">
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p> }
      {/* podemos agregar condicionales dentro del string de la etiqueta para editar el contenido de esta dicha */}
      <button onClick={toggleShown} className="bg-white text-zinc-900 mt-6 p-3 rounded-lg">{isShown ? "Banish the " : "let me see the"} punchline</button>
    </div>
  );
}

export default Joke;
