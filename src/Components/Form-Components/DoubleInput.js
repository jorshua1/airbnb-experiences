import React, { useState } from "react";

export default function DoubleInput() {
  //Creo un estado que contiene un objeto el cual manejara la informacion del formulario
  const [valor, setValor] = useState({
    fruta: "",
    verdura: "",
    comentarios: "",
    esComestible: false,
    tipoFruta: "",
  });

  //esta funcion asignara el contenido de los inputs al estado dependiendo del nombre del campo
  function handleInputChange(event) {
    console.log(valor);

    // ! comentario en rojo
    // TODO
    // * comentario en verde

    // ? es una buena practica separar la respuesta del evento
    const { name, value, type, checked } = event.target;

    //Actualizamos el estado llamando el estado anterior, creando una funcion flecha
    setValor((prevValor) => {
      //esta funcion lo que hace es mantener el estado anterio pero modificando los campos solicitados
      //utiliza el spread operator para solo modificar lo necesario, es decir:
      // si quiero modificar la fruta entonces conservara el estado anterior de verdura y asi viceversa
      //   return { ...prevValor, [event.target.name]: event.target.value };
      return {
        ...prevValor,
        //   Verificamos el tipo de input que recibe la funcion y dependiendo de esto actualiza el estado
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleData(event) {
    alert("data subida: " + valor.fruta + " " + valor.verdura);
  }

  return (
    <>
      <form className="flex items-center shrink-0 flex-wrap gap-6 ">
        <label>
          Fruta:
          <input
            className="m-4 p-2 bg-slate-100 text-zinc-900 font-bold rounded-xl hover:bg-zinc-900 hover:text-white hover:border-zinc-50 hover:border-2"
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
            className="m-4 p-2 bg-slate-100 text-zinc-900 font-bold rounded-xl hover:bg-zinc-900 hover:text-white hover:border-zinc-50 hover:border-2"
            type="text"
            value={valor.verdura}
            // Asignamos el nombre de la clave del objeto en donde almacenaremos el valor del input
            name="verdura"
            onChange={handleInputChange}
          />
        </label>
        <label className="flex items-center">
          comentarios:
          <textarea
            className="m-4 p-2 bg-slate-100 text-zinc-900 font-bold rounded-xl hover:bg-zinc-900 hover:text-white hover:border-zinc-50 hover:border-2"
            name="comentarios"
            value={valor.comentarios}
            onChange={handleInputChange}
          />
        </label>
        <input
          type="checkbox"
          name="esComestible"
          id="esComestible"
          checked={valor.esComestible}
          onChange={handleInputChange}
        />
        <label htmlFor="esComestible">Es comestible</label>
      </form>
      <br />
      <div className="flex gap-4 justify-center font-bold text-2xl">
        <p>{valor.fruta}</p>
        <p>{valor.verdura}</p>
        <p>{valor.comentarios}</p>
      </div>
      <br />
      <fieldset>
        <legend>Tipo de fruta</legend>
        <input
          type="radio"
          id="dulce"
          name="tipoFruta"
          value="dulce"
          onChange={handleInputChange}
        />
        <label htmlFor="dulce">Dulce</label>
        <br />
        <input
          type="radio"
          id="amarga"
          name="tipoFruta"
          value="amarga"
          onChange={handleInputChange}
        />
        <label htmlFor="amarga">Amarga</label>
        <br />
        <input
          type="radio"
          id="citrica"
          name="tipoFruta"
          value="citrica"
          onChange={handleInputChange}
        />
        <label htmlFor="citrica">Citrica</label>
        <br />
        <p>{valor.tipoFruta}</p>
      </fieldset>
    </>
  );
}
