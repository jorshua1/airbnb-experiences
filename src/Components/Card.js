import React from "react";

function Card(props) {
  return (
    <div className="h-auto w-72 rounded-2xl hover:shadow-lg cursor-pointer mr-8 flex flex-shrink-0 flex-col">
      <div className="relative">
        <img
          src={props.imagen}
          alt="Nadadora reconocida"
          className="h-96 relative text-center"
        />
        <span className="absolute top-3 left-4 px-2 py-1 rounded-md bg-slate-50 font-medium text-slate-700">
          {props.estado}
        </span>
      </div>
      <p className="p-2 text-slate-400">
        <li className="fa fa-star text-red-500"></li>{" "}
        <span className="text-slate-600">5.0</span> ({props.reseñas})·
        {props.pais}
      </p>
      <p className="px-2 py-1 text-slate-600">{props.titulo}</p>
      <p className="px-2 pt-1 pb-4 text-slate-600">
        <strong className="text-slate-900">From ${props.precio}</strong> /{" "}
        {props.group === true ? "group" : "person"}
      </p>
    </div>
  );
}

export default Card;
