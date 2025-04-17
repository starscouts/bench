global._version = "1.0.0";

console.log("Bench " + _version);
console.log("(c) Equestria.dev Developers");
console.log("");
console.log("Note: Benchmarks are almost never representative");
console.log("of real-life use and are only to be used as a");
console.log("comparison between multiple devices.");
console.log("");

const readline = require('node:readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Press Enter to start running Bench on this device.", (answer) => {
    start();
    rl.close();
});

const tests = [
    {
        name: "single-threaded cryptography benchmark",
        id: "bench.cpu.crypto",
        func: require('./tests/crypto')
    }
]

function start() {
    let results = {};

    for (let test of tests) {
        console.log("");
        console.log("Running " + test.name + " (" + test.id + ")...");
        let result = test.func();
        console.log("Score for this test: " + result);
    }
}