// calculates tax of a price in texas
function calculateTexasTax(total) {
    let TaxRateInTexas = .0825;
    let tax = TaxRateInTexas * total;
    return total + tax;
};
console.log(calculateTexasTax(50));
// works