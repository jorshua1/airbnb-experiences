import React from "react";
import Card from "../Components/Card";
import cardsData from "../data/cardsData";

function Cards() {
  const cardComponents = cardsData.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
        // imagen={card.imagen}
        // estado={card.estado}
        // reseñas={card.reseñas}
        // pais={card.pais}
        // titulo={card.titulo}
        // precio={card.precio}
        // grupo={card.grupo}
      />
    );
  });

  return (
    <div className="ml-12 py-8 my-8 relative overflow-x-auto rounded-lg flex flex-nowrap items-center h-auto w-auto pop">
      <div className="sticky float-left"></div>
      {cardComponents}
    </div>
  );
}

export default Cards;
