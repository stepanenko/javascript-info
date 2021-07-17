
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

printFiles();

// Res:
// file url: contents...
// Time taken in milliseconds: 2014
// file url 2: contents...
// Time taken in milliseconds: 2015
// file url 3: contents...
// Time taken in milliseconds: 2015