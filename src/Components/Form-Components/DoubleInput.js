import React, { useState } from "react";

export default function DoubleInput() {
  //Creo un estado que contiene un objeto el cual manejara la informacion del formulario
  const [valor, setValor] = useState({ fruta: "Manzana", verdura: "Tomate" });

  //esta funcion asignara el contenido de los inputs al estado dependiendo del nombre del campo
  function handleInputChange(event) {
    console.log(valor);
    //Actualizamos el estado llamando el estado anterior, creando una funcion flecha
    setValor((prevValor) => {
      //esta funcion lo que hace es mantener el estado anterio pero modificando los campos solicitados
      //utiliza el spread operator para solo modificar lo necesario, es decir:
      // si quiero modificar la fruta entonces conservara el estado anterior de verdura y asi viceversa
      return { ...prevValor, [event.target.name]: event.target.value };
    });
  }

  function handleData(event) {
    alert("data subida: " + valor.fruta + " " + valor.verdura);
  }

  return (
    <>
      <form>
        <label>
          Fruta:
          <input
            className="text-zinc-900"
            type="text"
            value={valor.fruta}
            // Asignamos el nombre de la clave del objeto en donde almacenaremos el valor del input
            name="fruta"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Verdura:
          <input
            className="text-zinc-900"
            type="text"
            value={valor.verdura}
            // Asignamos el nombre de la clave del objeto en donde almacenaremos el valor del input
            name="verdura"
            onChange={handleInputChange}
          />
        </label>
        {/* <input type="submit" /> */}
      </form>
      <br />
      <p>{valor.fruta}</p>
      <p>{valor.verdura}</p>
    </>
  );
}
