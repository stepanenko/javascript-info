
// Tests from testdome.com (duration 1 hour)

// === 1 task (7 mins) ===

// Implement the removeProperty function which takes an object and property name, and does the following:
// If the object obj has a property prop, the function removes the property from
// the object and returns true; in all other cases it returns false.

function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  } else return false;
}

let obj = { name: 'ser ' };
let output = removeProperty(obj, 'name');
// console.log(output);
// console.log(obj);


// === 2 task (15 mins) ===

// Date: Write a function that converts user entered date formatted as M/D/YYYY
// to a format required by an API (YYYYMMDD). 
// The parameter "userDate" and the return value are strings.
// For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  const year = new Date(userDate).getFullYear();
  const month = new Date(userDate).getMonth() + 1;
  const date = new Date(userDate).getDate();
  return '' + year + month + date;
}

console.log(formatDate("1/31/2014"));   // passed only 50%


// === 3 task 20 mins (needs an HTML file testdome.html)

// Closure: Fix the bugs in the registerHandlers function. An alert should display anchor's zero-based index within a document instead of following the link.
// For example, in the document below, the alert should display "2" when Google anchor
// is clicked since it is the third anchor element in the document and its zero-based index is 2.

function registerHandlers() {
  var as = document.getElementsByTagName('a');
  for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () {
      alert(i);
      return false;
    }
  }
}

// You can get different certificates on their website
// Tests screenshots and video are captured

// task example
// [1,2,3, [4,5, [7,8,9]]]  =>  [1,2,3,4,5,7,8,9]

let array = [1, 2, 3, [4, 5, [7, 8, 9]]];

function doFlat(array) {
  return array.reduce((acc, value) => {

    if (typeof value === 'number') {
      acc.push(value);
    }

    if (Array.isArray(value)) {
      var returnedArray = doFlat(value); // if let is used returnedArray will be scoped
    }

    if (returnedArray) {
      return acc.concat(returnedArray);
    }

    return acc;
  }, []);
}

console.log(doFlat(array));
