import tenis from "./../../assets/product.png";
import template from "./../../assets/template.png";
import fetchProducts from "../../api/fetchProducts";
import { useState, useEffect } from "react";
import Card from "../Card";

export default function Destaques(){
    
    return(
        <>
        <div className="relative">
            <button className="flex bg-primary_orange absolute justify-center items-center rounded py-3.5 px-6 text-primary_footer_information_color text-base font-semibold h-10 w-80 bottom-8 left-6">Aproveitar oferta</button>
            <img title="template product" className="w-screen object-cover" src={template}></img>
        </div>
        <h2 className="text-xl font-semibold text-primary_blue my-4 ml-2">Destaques</h2>
        <div className="flex justify-center space-x-8 mb-4">
            <Card/>
        </div>
        </>
    )
}