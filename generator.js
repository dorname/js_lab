function* test() {
    let i = 0;
    while (true) {
        yield i = i + 1;
        return 3;
    }
}

const generator = test();

// console.log(generator.next()); // 输出 1
// console.log(generator.next()); // 输出 2
// console.log(generator.next()); // 输出 3

function* generatorFn(){}

let foo = {
    *generate() {
        yield;
        console.log("1");
    }
}
// console.log(foo.generate());
foo.generate();
console.log(foo.generate().next().done);