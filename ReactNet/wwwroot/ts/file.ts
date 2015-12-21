module Outer {
    var local = 1;
    export var a = local;
    export module Inner {
        export var x = 10;
    }
}