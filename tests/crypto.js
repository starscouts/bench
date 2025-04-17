const crypto = require('crypto');

let baseline = {
    random: 1098.109103666667,
    md5hash: 945.9575535666667,
    sha1hash: 865.0254124000077,
    sha256hash: 833.4883646333354,
    sha512hash: 940.5597665333431,
    md5hmac1: 2939.797001733332,
    sha1hmac1: 2557.476422433326,
    sha256hmac1: 2566.4782763999992,
    sha512hmac1: 2774.229744033324,
    md5hmac2: 1684.3195416666688,
    sha1hmac2: 1363.5948177333394,
    sha256hmac2: 1343.7704001000104,
    sha512hmac2: 1585.866350099998
};

module.exports = () => {
    let timeResults = {};

    let randomTimes = [];
    let random;

    console.log("Generating 512-bit random values...");

    for (let i = 1; i <= 1000; i++) {
        random = [];
        let randomTime = [];

        for (let j = 0; j < 500; j++) {
            let start = process.hrtime.bigint();
            let generated = crypto.randomBytes(64);

            randomTime.push(parseInt((process.hrtime.bigint() - start).toString()));
            random.push(generated);
        }

        randomTimes.push(randomTime.reduce((a, b) => a + b) / randomTime.length);
    }

    require('../core/timing')(randomTimes);
    timeResults["random"] = randomTimes.reduce((a, b) => a + b) / randomTimes.length;

    console.log("Generating MD5 hashes...");
    let md5Times = [];

    for (let i = 1; i <= 50000; i++) {
        let md5Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHash("md5").update(random[j]).digest("hex");

            md5Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        md5Times.push(md5Time.reduce((a, b) => a + b) / md5Time.length);
    }

    require('../core/timing')(md5Times);
    timeResults["md5hash"] = md5Times.reduce((a, b) => a + b) / md5Times.length;

    console.log("Generating SHA1 hashes...");
    let sha1Times = [];

    for (let i = 1; i <= 50000; i++) {
        let sha1Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHash("sha1").update(random[j]).digest("hex");

            sha1Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        sha1Times.push(sha1Time.reduce((a, b) => a + b) / sha1Time.length);
    }

    require('../core/timing')(sha1Times);
    timeResults["sha1hash"] = sha1Times.reduce((a, b) => a + b) / sha1Times.length;

    console.log("Generating SHA256 hashes...");
    let sha256Times = [];

    for (let i = 1; i <= 50000; i++) {
        let sha256Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHash("sha256").update(random[j]).digest("hex");

            sha256Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        sha256Times.push(sha256Time.reduce((a, b) => a + b) / sha256Time.length);
    }

    require('../core/timing')(sha256Times);
    timeResults["sha256hash"] = sha256Times.reduce((a, b) => a + b) / sha256Times.length;

    console.log("Generating SHA512 hashes...");
    let sha512Times = [];

    for (let i = 1; i <= 50000; i++) {
        let sha512Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHash("sha512").update(random[j]).digest("hex");

            sha512Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        sha512Times.push(sha512Time.reduce((a, b) => a + b) / sha512Time.length);
    }

    require('../core/timing')(sha512Times);
    timeResults["sha512hash"] = sha512Times.reduce((a, b) => a + b) / sha512Times.length;

    console.log("Generating MD5 HMACs (dynamic 128-bit secret)...");
    md5Times = [];

    for (let i = 1; i <= 50000; i++) {
        let md5Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHmac("md5", crypto.randomBytes(16)).update(random[j]).digest("hex");

            md5Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        md5Times.push(md5Time.reduce((a, b) => a + b) / md5Time.length);
    }

    require('../core/timing')(md5Times);
    timeResults["md5hmac1"] = md5Times.reduce((a, b) => a + b) / md5Times.length;

    console.log("Generating SHA1 HMACs (dynamic 128-bit secret)...");
    sha1Times = [];

    for (let i = 1; i <= 50000; i++) {
        let sha1Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHmac("sha1", crypto.randomBytes(16)).update(random[j]).digest("hex");

            sha1Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        sha1Times.push(sha1Time.reduce((a, b) => a + b) / sha1Time.length);
    }

    require('../core/timing')(sha1Times);
    timeResults["sha1hmac1"] = sha1Times.reduce((a, b) => a + b) / sha1Times.length;

    console.log("Generating SHA256 HMACs (dynamic 128-bit secret)...");
    sha256Times = [];

    for (let i = 1; i <= 50000; i++) {
        let sha256Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHmac("sha256", crypto.randomBytes(16)).update(random[j]).digest("hex");

            sha256Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        sha256Times.push(sha256Time.reduce((a, b) => a + b) / sha256Time.length);
    }

    require('../core/timing')(sha256Times);
    timeResults["sha256hmac1"] = sha256Times.reduce((a, b) => a + b) / sha256Times.length;

    console.log("Generating SHA512 HMACs (dynamic 128-bit secret)...");
    sha512Times = [];

    for (let i = 1; i <= 50000; i++) {
        let sha512Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHmac("sha512", crypto.randomBytes(16)).update(random[j]).digest("hex");

            sha512Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        sha512Times.push(sha512Time.reduce((a, b) => a + b) / sha512Time.length);
    }

    require('../core/timing')(sha512Times);
    timeResults["sha512hmac1"] = sha512Times.reduce((a, b) => a + b) / sha512Times.length;


    console.log("Generating MD5 HMACs (static 128-bit secret)...");
    md5Times = [];
    let secret = crypto.randomBytes(16);

    for (let i = 1; i <= 50000; i++) {
        let md5Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHmac("md5", secret).update(random[j]).digest("hex");

            md5Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        md5Times.push(md5Time.reduce((a, b) => a + b) / md5Time.length);
    }

    require('../core/timing')(md5Times);
    timeResults["md5hmac2"] = md5Times.reduce((a, b) => a + b) / md5Times.length;

    console.log("Generating SHA1 HMACs (static 128-bit secret)...");
    sha1Times = [];
    secret = crypto.randomBytes(16);

    for (let i = 1; i <= 50000; i++) {
        let sha1Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHmac("sha1", secret).update(random[j]).digest("hex");

            sha1Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        sha1Times.push(sha1Time.reduce((a, b) => a + b) / sha1Time.length);
    }

    require('../core/timing')(sha1Times);
    timeResults["sha1hmac2"] = sha1Times.reduce((a, b) => a + b) / sha1Times.length;

    console.log("Generating SHA256 HMACs (static 128-bit secret)...");
    sha256Times = [];
    secret = crypto.randomBytes(16);

    for (let i = 1; i <= 50000; i++) {
        let sha256Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHmac("sha256", secret).update(random[j]).digest("hex");

            sha256Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        sha256Times.push(sha256Time.reduce((a, b) => a + b) / sha256Time.length);
    }

    require('../core/timing')(sha256Times);
    timeResults["sha256hmac2"] = sha256Times.reduce((a, b) => a + b) / sha256Times.length;

    console.log("Generating SHA512 HMACs (static 128-bit secret)...");
    sha512Times = [];
    secret = crypto.randomBytes(16);

    for (let i = 1; i <= 50000; i++) {
        let sha512Time = [];

        for (let j = 0; j < 100; j++) {
            let start = process.hrtime.bigint();
            crypto.createHmac("sha512", secret).update(random[j]).digest("hex");

            sha512Time.push(parseInt((process.hrtime.bigint() - start).toString()));
        }

        sha512Times.push(sha512Time.reduce((a, b) => a + b) / sha512Time.length);
    }

    require('../core/timing')(sha512Times);
    timeResults["sha512hmac2"] = sha512Times.reduce((a, b) => a + b) / sha512Times.length;

    let results = {};
    for (let key of Object.keys(timeResults)) {
        results[key] = Math.round((timeResults[key] / baseline[key]) * 500);
    }

    return Object.values(results).reduce((a, b) => a + b) / Object.values(results).length;
}