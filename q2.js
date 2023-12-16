"use strict";
function CalculatePercentage(obt, total) {
    if (total === 0) {
        console.log("this is an error");
    }
    else {
        return obt / total * 100;
    }
}
const obtMarks = 70;
const totalMarks = 200;
const prsentageResult = CalculatePercentage(obtMarks, totalMarks);
console.log(`Obtained marks ${obtMarks} of total marks ${totalMarks} then pescentage is ${prsentageResult}%`);
