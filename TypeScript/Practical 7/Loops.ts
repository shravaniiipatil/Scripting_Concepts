class LoopDemo {
showFor(): void {
console.log("For Loop:");
for (let i = 1; i <= 3; i++) {
console.log(i);
}
}
showWhile(): void {
console.log("While Loop:");
let i = 10;
while (i <= 13) {
console.log(i);
i++;
}
}
showDoWhile(): void {
console.log("Do-While Loop:");
let i = 15;
do {
console.log(i);
i++;
} while (i <= 20);
}
}
let obj = new LoopDemo();
obj.showFor();
obj.showWhile();
obj.showDoWhile();


