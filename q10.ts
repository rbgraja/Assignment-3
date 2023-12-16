function calculateBill(unitsConsumed: number): number {
    let baseRate = 0.5; // Example base rate per unit
    let taxRate = 0;
  
    if (unitsConsumed > 500) {
      taxRate = 0.25;
    } else if (unitsConsumed > 200) {
      taxRate = 0.15;
    } else if (unitsConsumed > 100) {
      taxRate = 0.1;
    }
  
    const billAmount = unitsConsumed * baseRate;
    const taxAmount = billAmount * taxRate;
    const totalAmount = billAmount + taxAmount;
  
    return totalAmount;
  }
  
  // Example usage:
  const unitsConsumed = 300; // Replace this with user input
  const totalBill = calculateBill(unitsConsumed);
  
  console.log(`Units Consumed: ${unitsConsumed}`);
  console.log(`Total Bill Amount: $${totalBill.toFixed(2)}`);
  