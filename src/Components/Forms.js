import React, { useState } from "react";
import SelectInput from "./Form-Components/Select-input";
import DoubleInput from "./Form-Components/DoubleInput";

export default function Form() {
  const [valor, setValor] = useState("");

  function handleSelectedValue(event) {
    console.log(valor);
    setValor((prevValor) => event.target.value);
    console.log("actualizado a : " + event.target.value);
  }

  function handleSubmit(event) {
    alert("Se ha subido la eleccion: " + valor);
  }

  return (
    <>
      <div className="flex flex-col h-auto items-center">
        <form onSubmit={handleSubmit} className="flex flex-col ">
          <label htmlFor="">
            Name:
            <input
              className="text-zinc-900 p-2 m-4 rounded-lg"
              type="text"
              name="name"
              value={valor}
              onChange={handleSelectedValue}
            />
          </label>
          <input
            type="submit"
            value={"Submit"}
            className=" my-6 p-2 bg-slate-100 text-zinc-900 font-bold rounded-xl hover:bg-zinc-900 hover:text-white hover:border-zinc-50 hover:border-2"
          />
        </form>
        <p className="text-white my-4 text-2xl font-bold">{valor}</p>
      </div>
      <>
        <SelectInput></SelectInput>
      </>
      <br />
      <DoubleInput></DoubleInput>
    </>
  );
}
