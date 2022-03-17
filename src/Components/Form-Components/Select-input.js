import React, { useState } from "react";

export default function SelectInput() {
  const [valor, setValor] = useState({ fruta: "naranja" });

  function handleSelectedValue(event) {
    console.log(valor);
    setValor((prevValor) => ({ fruta: event.target.value }));
    console.log("actualizado a : " + event.target.value);
  }

  function handleSubmit(event) {
    alert("Se ha subido la eleccion: " + valor.fruta);
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          Escoja su sabor favorito:
          <select
            value={valor.fruta}
            onChange={handleSelectedValue}
            className="m-4 p-2 bg-violet-600"
          >
            <option value="uva">Uva</option>
            <option value="limon">Limon</option>
            <option value="naranja">Naranja</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{valor.fruta}</p>
    </div>
  );
}
