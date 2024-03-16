// Este código é apenas uma tentativa do que foi feito em sala
const fetchProducts = async (query) => {
    try {
        const response = await fetch(
            `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
        );

        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }

        const data = await response.json();

        // Verifica se a resposta contém a propriedade "results"
        if (!data || !data.results || !Array.isArray(data.results)) {
            throw new Error('Resposta da API inválida');
        }

        return data.results;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return []; // Retorna uma lista vazia em caso de erro
    }
};

export default fetchProducts;
