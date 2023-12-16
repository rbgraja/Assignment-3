function calculateBill(unitsConsumed) {
    var baseRate = 0.5; // Example base rate per unit
    var taxRate = 0;
    if (unitsConsumed > 500) {
        taxRate = 0.25;
    }
    else if (unitsConsumed > 200) {
        taxRate = 0.15;
    }
    else if (unitsConsumed > 100) {
        taxRate = 0.1;
    }
    var billAmount = unitsConsumed * baseRate;
    var taxAmount = billAmount * taxRate;
    var totalAmount = billAmount + taxAmount;
    return totalAmount;
}
// Example usage:
var unitsConsumed = 300; // Replace this with user input
var totalBill = calculateBill(unitsConsumed);
console.log("Units Consumed: ".concat(unitsConsumed));
console.log("Total Bill Amount: $".concat(totalBill.toFixed(2)));
