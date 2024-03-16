import Header from "./../../components/Header";
import Destaques from "../../components/Destaques";
import Card from "./../../components/Card";
import Footer from "./../../components/Footer";

export default function Home(){
    return(
        <>
            <Header classname="fixed top-0"/>
            <Destaques/>
            <Card/>
            <Footer/>
        </>
    )
}

/*
<button className="peer">botao de menu hamburguer <button/>
    <aside class="flex flex-col h-screen w-screen fixed top-0 left-[-50vw] peer-focus:left-0 easy-in duration-400">
        <nav>
            <a>Home<a/>
            <a>Meus pedidos<a/>
        <nav/>    
    <aside/>
//peer usa na tag anterior 

//ver hidden mh:flex w-screen //esconde algo ate ter o tamanho md, neste comando aqui eu disse que vai tomar toda a tela quando tiver tamanho md

ele fez na div acima hidden md:block
    na nav dentro fez md:flex lg:flex-col
*/