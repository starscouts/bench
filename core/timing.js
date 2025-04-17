module.exports = (times) => {
    let average = times.reduce((a, b) => a + b) / times.length;
    let high = Math.max(...times);
    let low = Math.min(...times);

    console.log("Average: " + average.toFixed(2) + " ns, High: " + high.toFixed(2) + " ns, Low: " + low.toFixed(2) + " ns, Passes: " + times.length)
}