var Outer;
(function (Outer) {
    var local = 1;
    Outer.a = local;
    var Inner;
    (function (Inner) {
        Inner.x = 10;
    })(Inner = Outer.Inner || (Outer.Inner = {}));
})(Outer || (Outer = {}));
