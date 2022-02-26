import React from "react";
import Card from "../Components/Card";

function Cards() {
  return (
    <div className="ml-12 py-8 my-8 relative overflow-x-auto rounded-lg flex flex-nowrap items-center h-auto w-auto pop">
      <div className="sticky float-left"></div>
      {/* primera tarjeta */}
      <Card
        imagen="katie"
        estado="Vendido"
        reseñas={6}
        pais="USA"
        titulo="Lecciones de vida con Katie Zaferes"
        precio={136}
        grupo={false}
      />
      {/* segunda tarjeta */}
      <Card
        imagen="mary"
        estado="Disponible"
        reseñas={3}
        pais="USA"
        titulo="Fotografia para bodas"
        precio={250}
        grupo={false}
      />
      {/* tercera tarjeta */}
      <Card
        imagen="ray"
        estado="SIN CUPO"
        reseñas={5}
        pais="USA"
        titulo="Ciclo montañismo en grupo"
        precio={150}
        grupo={true}
      />
      {/*  */}
      <Card
        imagen="mary"
        estado="Disponoble"
        reseñas={3}
        pais="USA"
        titulo="Fotografia para bodas"
        precio={250}
        grupo={false}
      />

    </div>
  );
}

export default Cards;
