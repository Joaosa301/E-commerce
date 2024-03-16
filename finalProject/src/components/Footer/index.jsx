import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "./../../assets/logoIrede.png";

export default function Footer(){
    return (
        <>
        <div className="bg-[#1E3A8A] text-[#FFFFFF] flex flex-col align-between relative text-10px py-3.5 px-6">
            <div className="flex justify-between mb-4">
                <img className="h-7 mr-20" title="logo e-commerce irede" src={logo}></img>
                <p className="text-footerSize text-footer_information_color">Lorem ipsum lorem ipsum lorem lorem  ipsum lorem loram lorem lorem 
                    lorem ipsum ipsum ipsum
                </p>
            </div>
            <div className="flex gap-4 mb-4">
                <FaFacebook/>
                <FaInstagram/>
                <FaWhatsapp/>
            </div>
            <div className="flex mb-4">
                <div className="mr-20">
                    <h3 className="text-footerSize font-semibold mb-2">Informações</h3>
                    <p className="text-footerSize text-footer_information_color mb-1">Sobre o E-Rede Store</p>
                    <p className="text-footerSize text-footer_information_color mb-1">Segurança</p>
                    <p className="text-footerSize text-footer_information_color mb-1">Lista de desejos</p>
                    <p className="text-footerSize text-footer_information_color">Trabalhe conosco</p>
                </div>
                <div>
                    <h3 className="text-footerSize font-semibold mb-2">Categorias</h3>
                    <p className="text-footerSize text-footer_information_color mb-1">Tênis</p>
                    <p className="text-footerSize text-footer_information_color mb-1">Camiseta</p>
                    <p className="text-footerSize text-footer_information_color mb-1">Acessórios</p>
                    <p className="text-footerSize text-footer_information_color">Esportivo</p>
                </div>
            </div>
            <div className="mb-4">
                <h3 className="text-footerSize font-semibold mb-2">Localização</h3>
                <p className="text-footerSize text-footer_information_color mb-1">Rua Martinho Rodrigues, 331</p>
                <p className="text-footerSize text-footer_information_color">Bairro de Fátima, Fortaleza-CE</p>
            </div>
            <hr/>
            <p className="flex justify-center text-footerSize text-footer_information_color mt-2">2023 Irede</p>
        </div>
        </>
    )
}