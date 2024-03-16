import logo from "./../../assets/logoIrede.png";
import { FiMenu } from "react-icons/fi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import Carrinho from "../Carrinho";
import {useState} from "react";
import fetchProducts from "../../api/fetchProducts";


export default function Header(){
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [CartItems, setCartItems] = useState([]);
    
    function toggleCart(){
        setIsCartOpen(!isCartOpen);
    }

    const [searchValue, setSearchValue] = useState('');
    const handleSearch = async (event) => {
        event.preventDefault();
        //alert('teste'); //só para testar a função do input

        const products = await fetchProducts(searchValue);
        setSearchValue('');//zerar a search bar value apos a busca
    }

    return (
        <>
        <div className="flex flex-col bg-primary_blue align-between p-5">
            <div className="flex justify-between mb-2 items-center">
                <FiMenu className="text-primary_icon_white_color"/>
                <img title="logo e-commerce irede" src={logo} className=" object-cover"/>
                <button className="text-[#FAFAFA] relative" onClick={toggleCart}>
                    <MdOutlineLocalGroceryStore/>
                    <span className="bg-primary_orange w-4 h-4 rounded-full absolute -top-2 -left-2 flex items-center justify-center text-primary_icon_white_color font-semibold text-xs">1</span>
                </button>
            </div>
            <div className="flex flex-col align-between relative">
                <IoMdSearch className="text-search_header bg-transparent absolute rounded h-8 ml-1"/>
                <input onSubmit={handleSearch} value={searchValue} onChange={({target})=> setSearchValue(target.value)} type="search" required placeholder="Buscar" className="flex h-8 pl-5 rounded outline-none"/>
            </div>
            {isCartOpen && <Carrinho itens={CartItems}/>}

        </div>

        </>
    )
}

// w-[30vw]
//"{<IoMdSearch/>} Buscar"