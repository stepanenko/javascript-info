
// From https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop

function getFilePaths() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(["file url", "file url 2", "file url 3"]);
        }, 1000);
    });
}

function readFile(file) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(`${file}: contents...`);
        }, 1000);
    });
}

async function printFiles() {
    let startTime2 = Date.now();
    const files = await getFilePaths();

    files.forEach(async (file) => {
        const contents = await readFile(file);
        console.log(contents);
        let finishTime = Date.now();
        let timeTaken = finishTime - startTime2;
        console.log("Time taken in milliseconds: " + timeTaken);
    });
}

// printFiles();

// Res:
// file url: contents...
// Time taken in milliseconds: 2014
// file url 2: contents...
// Time taken in milliseconds: 2015
// file url 3: contents...
// Time taken in milliseconds: 2015

// FOR ... OF
async function printFiles2() {
    let startTime2 = Date.now();
    const files = await getFilePaths();

    for (const file of files) {
        const contents = await readFile(file);
        console.log(contents);
        let finishTime = Date.now();
        let timeTaken = finishTime - startTime2;
        console.log("Time taken in milliseconds: " + timeTaken);
    }
}

// printFiles2();
// res:
// file url: contents...
// Time taken in milliseconds: 2025
// file url 2: contents...
// Time taken in milliseconds: 3036
// file url 3: contents...
// Time taken in milliseconds: 4041


// Async Iteration
// FOR AWAIT ... OF
async function printFiles3() {
    let startTime2 = Date.now();
    const files = await getFilePaths()

    const promises = files.map(file => readFile(file)); // promises: [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]

    // for-await-of converts each iterated value via Promise.resolve() to a Promise, which it then awaits.
    // That means that it works for both Promises and normal values.
    for await (const contents of promises) {
        console.log(contents);
        let finishTime = Date.now();
        let timeTaken = finishTime - startTime2;
        console.log("Time taken in milliseconds: " + timeTaken);
    }
}

printFiles3();

// more: https://2ality.com/2016/10/asynchronous-iteration.html
