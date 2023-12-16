function leapyear(year) {
    if (year % 4 !== 0) {
        // Not divisible by 4, not a leap year
        return "Not divisible by 4, not a leap year";
    }
    else if (year % 100 !== 0 || year % 400 !== 0) {
        // Divisible by 4 but not by 100, leap year
        return "Divisible by 4 but not by 100, leap year";
    }
    else {
        // Divisible by 400, leap year
        return "Divisible by 400, leap year";
    }
}
console.log(leapyear(4));
console.log(leapyear(2024));
console.log(leapyear(1900));
console.log(leapyear(2000));
