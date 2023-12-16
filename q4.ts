function CalculateDiscount (price:number){
    let discountRate:number
    let discountprice:number
    if (price > 100) {
        discountRate = 0.1
    }
    else{
        discountRate = 0.05
    }
    
    discountRate = price * discountRate
    discountprice=price-discountRate
    return discountprice;

}
console.log(CalculateDiscount(50));
