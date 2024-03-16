import logo from "./../../assets/logoIrede.png";

export default function Register(){
    function handleSubmit(e){
        e.preventDefault()
    }
    return(
        <>
            <div>
                <img title="logo e-commerce irede" src={logo}></img>
                <form>
                    <h2>Cadastre-se</h2>
                    <label>Nome:*
                        <input required placeholder="Digite seu nome"></input>
                    </label>

                    <label>E-mail:*
                        <input id="email" type="email" required placeholder="Digite seu e-mail"></input>
                    </label>

                    <label>Senha:*
                        <input id="password" type="password" required placeholder="Digite sua senha" onSubmit={handleSubmit}></input>
                    </label>
                    <button type="submit">Cadastrar</button>
                    <p>Já possui cadastro?</p>
                    <button>Clique aqui</button>
                </form>
            </div>            
        
        </>
    )
}