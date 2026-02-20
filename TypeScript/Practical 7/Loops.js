var LoopDemo = /** @class */ (function () {
    function LoopDemo() {
    }
    LoopDemo.prototype.showFor = function () {
        console.log("For Loop:");
        for (var i = 1; i <= 3; i++) {
            console.log(i);
        }
    };
    LoopDemo.prototype.showWhile = function () {
        console.log("While Loop:");
        var i = 10;
        while (i <= 13) {
            console.log(i);
            i++;
        }
    };
    LoopDemo.prototype.showDoWhile = function () {
        console.log("Do-While Loop:");
        var i = 15;
        do {
            console.log(i);
            i++;
        } while (i <= 20);
    };
    return LoopDemo;
}());
var obj = new LoopDemo();
obj.showFor();
obj.showWhile();
obj.showDoWhile();
