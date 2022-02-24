import React from "react";
import Dona from "../Assets/image 12.png";
import Mary from "../Assets/wedding-photography 1.png";
import Ray from "../Assets/mountain-bike 1.png";

function Card() {
  return (
    <div className="ml-12 py-8 my-16 relative overflow-x-auto rounded-lg flex flex-nowrap items-center h-auto w-auto pop">
    <div className="sticky float-left"></div>
      <div className="h-auto w-72 rounded-2xl hover:shadow-lg cursor-pointer mr-8 flex flex-shrink-0 flex-col">
        <div className="relative">
          <img
            src={Dona}
            alt="Nadadora reconocida"
            className="h-96 relative text-center"
          />
          <span className="absolute top-3 left-4 px-2 py-1 rounded-md bg-slate-50 font-medium text-slate-700">
            SOLD OUT
          </span>
        </div>
        <p className="p-2 text-slate-400">
          <li className="fa fa-star text-red-500"></li> <span className="text-slate-600">5.0</span> (6)·USA
        </p>
        <p className="px-2 py-1 text-slate-600">Life lessons with Katie Zaferes</p>
        <p className="px-2 pt-1 pb-4 text-slate-600">
          <strong className="text-slate-900">From $136</strong> / person
        </p>
      </div>
      {/*  */}
      <div className="h-auto w-72 rounded-2xl hover:shadow-lg cursor-pointer mr-8 flex flex-shrink-0 flex-col">
        <div className="relative">
          <img
            src={Mary}
            alt="Nadadora reconocida"
            className="h-96 relative text-center"
          />
          <span className="absolute top-3 left-4 px-2 py-1 rounded-md bg-slate-50 font-medium text-slate-700">
            ONLINE
          </span>
        </div>
        <p className="p-2 text-slate-400">
          <li className="fa fa-star text-red-500"></li> <span className="text-slate-600">5.0</span> (30)·USA
        </p>
        <p className="px-2 py-1 text-slate-600">Learn wedding photography</p>
        <p className="px-2 pt-1 pb-4 text-slate-600">
          <strong className="text-slate-900">From $125</strong> / person
        </p>
      </div>
      {/*  */}
      <div className="h-auto w-72 rounded-2xl hover:shadow-lg cursor-pointer mr-8 flex flex-shrink-0 flex-col">
        <div className="relative">
          <img
            src={Ray}
            alt="Nadadora reconocida"
            className="h-96 relative text-center"
          />
          <span className="absolute top-3 left-4 px-2 py-1 rounded-md bg-slate-50 font-medium text-slate-700">
            OPEN
          </span>
        </div>
        <p className="p-2 text-slate-400">
          <li className="fa fa-star text-red-500"></li> <span className="text-slate-600">4.8</span> (2)·USA
        </p>
        <p className="px-2 py-1 text-slate-600">Group Mountain Biking</p>
        <p className="px-2 pt-1 pb-4 text-slate-600">
          <strong className="text-slate-900">From $50</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
