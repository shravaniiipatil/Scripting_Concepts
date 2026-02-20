class GradeCheck {
checkNumber(num: number): void {
if (num > 0) {
console.log("Number is positive");
}
if (num % 2 === 0) {
console.log("Number is even");
} else {
console.log("Number is odd");
}
if (num >= 90) {
console.log("Grade: A");
} else if (num >= 75) {
console.log("Grade: B");
} else if (num >= 50) {
console.log("Grade: C");
} else {
console.log("Grade: Fail");
}
}
}
let obj = new GradeCheck();
obj.checkNumber(85);