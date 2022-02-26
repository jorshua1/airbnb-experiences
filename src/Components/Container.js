import React from "react";
import Prod from "../../src/Components/Prod";

function Container() {
  return (
    <div className="h-full w-auto flex  flex-wrap">
      <Prod
        nombre="Jenkins"
        tel="321-5214-522"
        imagen="jenkins"
        contact="jenkins@none.com"
      />
      <Prod
        nombre="Karina"
        tel={3255558212}
        imagen="karina"
        contact="karina@none.com"
      />
      <Prod
        nombre="Captain"
        tel="321-5214-522"
        imagen="captain"
        contact="karina@none.com"
      />
      <Prod
        nombre="Jenkins"
        tel="321-5214-522"
        imagen="jenkins"
        contact="jenkins@none.com"
      />
      <Prod
        nombre="Karina"
        tel="321-5214-522"
        imagen="karina"
        contact="karina@none.com"
      />
      <Prod
        nombre="Captain"
        tel="321-5214-522"
        imagen="captain"
        contact="karina@none.com"
      />
    </div>
  );
}

export default Container;
