var Stack;
(function (Stack) {
    console.log("Init");
    var Example = (function () {
        function Example() {
            console.log("constructor");
        }
        return Example;
    })();
    Stack.Example = Example;
    var Overflow = (function () {
        function Overflow() {
        }
        return Overflow;
    })();
    Stack.Overflow = Overflow;
})(Stack || (Stack = {}));
