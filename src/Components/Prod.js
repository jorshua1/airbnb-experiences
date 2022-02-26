import React from "react";
import karina from "../Assets/karina.jpg";
import jenkins from "../Assets/jenkins.jpg";
import captain from "../Assets/captain.jpg";


function Prod(props) {
  const nombre = props.nombre;
  const tel = props.tel;
  const contact = props.contact;
  const imagen = props.imagen==="jenkins" ? jenkins : props.imagen==="karina"?karina: props.imagen==="captain" ? captain : "none";

console.log(imagen)

  return (
    <div className=" m-10 h-96 w-auto shadow-lg hover:shadow-md shrink-0 rounded-md">
      <div className="p-4 flex flex-col items-center">
        <img
          src={imagen}
          alt="by Mikhail Vasilyev"
          className="h-64 rounded-md"
        />
        <p className=" flex items-start py-2 text-2xl ">{nombre}</p>
        <div className="flex items-start">
          <p>
            <li className="fa fa-phone px-2"></li>  {tel}
            <p><li className="fa fa-envelope px-2"></li>  {contact}</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Prod;
