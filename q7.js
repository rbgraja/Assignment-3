function numberdivisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "number is divisible by both 3 and 5";
    }
    else if (num % 3 != 0 && num % 5 === 0) {
        return "number is divisible by  5";
    }
    else if (num % 3 === 0 && num % 5 != 0) {
        return "number is divisible by  3";
    }
    else {
        return "number is not  divisible by  both";
    }
}
console.log(numberdivisible(15));
console.log(numberdivisible(21));
console.log(numberdivisible(25));
