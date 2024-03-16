

function Carrinho({itens}){
    return(
        <>
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg overflow-hidden z-10">
      {itens.length === 0 ? (
        <p className="px-4 py-2">Carrinho vazio</p>
      ) : (
        itens.map((item, index) => (
          <div key={index} className="px-4 py-2 border-b">
            {item.nome} - R$ {item.preco}
          </div>
        ))
      )}
    </div>
        </>
    );
}

export default Carrinho;