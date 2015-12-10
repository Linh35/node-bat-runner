'use strict';

var MathProps = Object.getOwnPropertyNames(Math);

for(var prop in MathProps) {

    prop = MathProps[prop];
    let func = Math[prop];

    if(typeof func !== 'function') continue;

    Number.prototype[prop] = function() {
        let args = Array.prototype.slice.call(arguments, 0);

        args.unshift(this);

        return func.apply(Math, args);
    };
}

console.log(
    (5)
        .sqrt()
        .pow(2)
        .log()
        .sin()
        .atan(2)
        .abs()
);
