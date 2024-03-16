import fetchProducts from "../../api/fetchProducts";
import { useState, useEffect } from "react";
import Card from "../Card";

export default function Products(){
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response);
        });
    }, []);
    
    
    return(
        <> 
        <div className="flex justify-center space-x-8 mb-4">
            {
                products.map((product) => <Card key={product.id} data={product} />)
            }
        </div>
        </>
    );
    /* esta div é para ser a div dos destaques */
}
/*
o intuito é que seja uma seção tipo a de 
destaques para que eu possa usar como uma
seção de busca pelos produtos disponiveis
ao usar o Buscar
*/