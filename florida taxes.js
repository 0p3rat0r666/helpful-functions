function floridaTax(ftotal){
    let florTaxRate = .06;
    let florTax = ftotal * florTaxRate;
    return ftotal + florTax;
}
console.log(florTax(4.25))