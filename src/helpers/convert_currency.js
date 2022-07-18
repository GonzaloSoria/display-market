export const convert_currency = (amount_currency) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount_currency);
}