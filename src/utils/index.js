/**
 * This function calculates total proice of a new order
 * @param {Array} products cartProduct: Array of objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => { sum += product.price });
    return sum;
};