import React from "react";
import Grid from '../Assets/grid-Hero.png'

function Hero(){
    return(
        <div className="mx-12">
        <div className="w-full flex flex-col items-center">
            <img src={Grid} alt="" className="py-10 w-auto md:w-3/4"/>
        </div>
            <div className="flex flex-col justify-start md:w-1/2 sm:w-auto pop">
                <h1 className="text-4xl sm:text-regular font-semibold py-6">Online Experiences</h1>
                <p className="text-lg text-slate-600">Join unique interactive activities led by one-of-a-kind host
                -all without leaving home</p>
            </div>
        </div>
    )
}

export default Hero