function determineDayOfWeek(dayNumber: number): string {
    if (dayNumber >= 1 && dayNumber <= 7) {
      if (dayNumber === 1) {
        return 'Sunday';
      } else if (dayNumber === 2) {
        return 'Monday';
      } else if (dayNumber === 3) {
        return 'Tuesday';
      } else if (dayNumber === 4) {
        return 'Wednesday';
      } else if (dayNumber === 5) {
        return 'Thursday';
      } else if (dayNumber === 6) {
        return 'Friday';
      } else {
        return 'Saturday';
      }
    } else {
      return 'Invalid input. Please enter a number between 1 and 7.';
    }
  }
  
  // Example usage:
  

  console.log(`The corresponding day of the week is: ${determineDayOfWeek(2)}`);
  console.log(`The corresponding day of the week is: ${determineDayOfWeek(3)}`);
  console.log(`The corresponding day of the week is: ${determineDayOfWeek(7)}`);
  console.log(`The corresponding day of the week is: ${determineDayOfWeek(9)}`);

  