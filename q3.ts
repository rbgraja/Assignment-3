function convertDaysToWeeksAndDays(days:number):string{
    if (days < 0) {
        return "Invalid input. Please provide a non-negative number of days.";
    }

    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;

    if (weeks === 0) {
        return `${days} days`;
    } else if (remainingDays === 0) {
        return `${weeks} weeks`;
    } else {
        return `${weeks} weeks and  ${remainingDays} days `;
    }
}

// Example usage
const numberOfDays = 18;
const result = convertDaysToWeeksAndDays(numberOfDays);
console.log(`${numberOfDays}  days = ${result}`);


///reverse it

function convertweeksdaysTodays(weeks:number, days:number):string{
    if (days <= 0 || weeks<=0) {
        return "Invalid input. Please provide a non-negative number of days.";
    }

    const day = Math.floor(weeks * 7);
    const totaldays = days + day;
    return `total days is = ${totaldays}`
   
}
const week:number = 4;
const day:number = 9;
const result2 = convertweeksdaysTodays(week,day);
console.log(`${result2}`);