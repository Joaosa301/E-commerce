import logo from "./../../assets/logoIrede.png";


export default function Login(){
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-[#1E3A8A]">
                <img title="logo e-commerce irede" src={logo}></img>
                <form className="flex flex-col justify-center items-center bg-white">
                    <h2 className="font-semibold text-2xl">Fazer Login</h2>
                    <div className="flex flex-col">
                        <label className="font-semibold text-base">E-mail:*</label>
                        <input placeholder="Digite seu e-mail"></input>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold text-base">Senha:*</label>
                        <input placeholder="Digite sua senha"></input>
                    </div>
                    <button className="font-semibold text-base text-white bg-[#EA580C]">Cadastrar</button>
                    
                    <div className="flex justify-center items-center">
                        <p className="mr-2 flex-shrink-0 text-base font-normal">Já possui cadastro?</p>
                        <button className="flex-shrink-0 text-[#EA580C] text-base font-normal">Clique aqui</button>
                    </div>
                </form>
            </div>
        </>
    )

}