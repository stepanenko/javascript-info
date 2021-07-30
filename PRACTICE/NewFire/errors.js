
// this...
const x = Error('I was created using a function call!');

// ...has the same functionality as this.
const y = new Error('I was constructed via the "new" keyword!');

const ob = { name: 'Tom' };

if (ob?.address?.city) {
    console.log('Found');
} else {
    console.log('Not found'); // will print this
}




// More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
