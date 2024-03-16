const formatCurrency = (value, currency) => {
    return value.toLocaloString('pt-br', {style: 'currency', currency});
};

export default formatCurrency;