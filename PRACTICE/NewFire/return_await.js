
async function waitAndMaybeReject() {
    // Wait one second
    await new Promise(r => setTimeout(r, 1000));
    // Toss a coin
    const isHeads = Boolean(Math.round(Math.random()));

    if (isHeads) return 'yay';
    throw Error('Boo!');
}

async function foo() {
    try {
        // waitAndMaybeReject(); // returned promise will always fulfill with undefined, without waiting
        await waitAndMaybeReject(); // returned promise will always wait one second, then either fulfill with undefined, or fulfill with "caught"
    }
    catch (e) {
        return 'caught';
    }
}

const res = foo();
console.log('RES', res);

// More at : https://jakearchibald.com/2017/await-vs-return-vs-return-await/
