const fs = require('fs');
const results = {};
const averages = {};

for (let file of fs.readdirSync("./staging")) {
    let data = require('./staging/' + file);

    for (let key of Object.keys(data)) {
        if (!results[key]) results[key] = [];
        results[key].push(data[key]);
    }
}

for (let key of Object.keys(results)) {
    averages[key] = results[key].reduce((a, b) => a + b) / results[key].length;
}

console.log(averages);