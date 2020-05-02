
// some NodeJS practice from https://nodejs.dev/

const chalk = require('chalk'); // lib for coloring the console output
const log = console.log;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
log(error('Error!'));
log(warning('Warning!'));

log(chalk.underline.blue.bgGreen.bold('Hello World'));

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 30 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100);

process.argv.forEach(el => {
log(chalk.red(el)); // first two arguments are paths
  // console.count(el); // logs the number of calls
});

// to test try 'node argv.js 4 5 6' ...

const args = process.argv.slice(2);
log(chalk.yellow(args)); // => prints all arguments typed after node argv.js ...
// console.trace('stack trace test'); // prints the call stack trace of a function

// console.error('some error'); // => prints to the stderr stream.
// console.log is great for printing messages in the Console.
// This is what's called the standard output, or stdout.


