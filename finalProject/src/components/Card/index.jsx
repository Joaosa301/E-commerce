import formatCurrency from "../../utils/formatCurrency";
import tenis from "./../../assets/product.png";
import propTypes from 'prop-types';

export default function Card({ data }){
    const { title, thumbnail, price } = data;
    
    
    return(
        <>
            <article className="h-52 w-36 rounded overflow-hidden hover:shadow-xl shadow-md">
                <img title="imagem do produto" src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}></img>
                <div className="ml-2">
                    <h2 className="text-primary_blue font-bold text-lg">{title}</h2>
                    {/* <p className="text-xs font-medium text-product_category_color">{name}</p> */}
                    <p className="text-primary_orange font-semibold text-base">{formatCurrency(price, 'BRL')}</p>
                    <button type="button" className="text-primary_footer_information_color bg-primary_blue text-xs font-medium items-center h-5 w-16 rounded">Comprar</button>
                </div>
            </article>

            {/* apenas uma duplicação do card de outro produto ou do mesmo */}
            <article className="h-52 w-36 rounded overflow-hidden hover:shadow-xl shadow-md">
            <img title="imagem do produto" src={tenis}></img>
            <div className="ml-2">
                    <h2 className="text-primary_blue font-bold text-lg">Nique Air Surf</h2>
                    <p className="text-xs font-medium text-product_category_color">Tênis</p>
                    <p className="text-primary_orange font-semibold text-base">R$ 200,00</p>
                    <button type="button" className="text-primary_footer_information_color bg-primary_blue text-xs font-medium items-center h-5 w-16 rounded">Comprar</button>
                </div>
            </article>
        </>
    );
}

Card.propTypes = {
    data: propTypes.shape({
        thumbnail: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
    }).isRequired,
};