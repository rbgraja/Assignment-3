function Categoryage(age) {
    if (age <= 12) {
        return "child";
    }
    else if (age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(Categoryage(7));
console.log(Categoryage(14));
console.log(Categoryage(25));
