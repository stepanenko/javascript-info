
function timeoutPromise(interval) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("done");
        }, interval);
    });
}

// SLOW
// Each subsequent one is forced to wait until the last one finished.
// Takes around 9 seconds to complete.
async function timeTestSlow() {
    await timeoutPromise(3000);
    await timeoutPromise(3000);
    await timeoutPromise(3000);
}

// FAST
// Here all promises started processing at the same time,
// the promises will all fulfill at the same time. Takes around 3 seconds to complete.
async function timeTestFast() {
    const timeoutPromise1 = timeoutPromise(3000);
    const timeoutPromise2 = timeoutPromise(3000);
    const timeoutPromise3 = timeoutPromise(3000);

    await timeoutPromise1;
    await timeoutPromise2;
    await timeoutPromise3;
}

async function timeTestAll() {
    const timeoutsArray = [timeoutPromise(3000), timeoutPromise(3000), timeoutPromise(3000)];

    await Promise.all(timeoutsArray);
}

let startTime1 = Date.now();
timeTestSlow().then(() => {
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime1;
    console.log("Time 1 taken in milliseconds: " + timeTaken);
});

let startTime2 = Date.now();
timeTestFast().then(() => {
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime2;
    console.log("Time 2 taken in milliseconds: " + timeTaken);
});

let startTime3 = Date.now();
timeTestFast().then(() => {
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime3;
    console.log("Time 3 taken in milliseconds: " + timeTaken);
});



// If ran you get:
// Time 2 taken in milliseconds: 3002
// Time 3 taken in milliseconds: 3008
// Time 1 taken in milliseconds: 9021


// TODO: handle errors - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#handling_errors
