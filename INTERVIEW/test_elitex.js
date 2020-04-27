
// Tests from testdome.com: (duration 1 hour)
// ===1 task (7 mins)
function removeProperty(obj, prop) {

  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  } else return false;
}

let obj = { name: 'ser '};
// let output = removeProperty(obj, 'name');
// console.log(output);
// console.log(obj);


// === 2 task (15 min)
function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  const year = new Date(userDate).getFullYear();
  const month = new Date(userDate).getMonth() + 1;
  const date = new Date(userDate).getDate();
  return '' + year + month + date;
}

console.log(formatDate("1/31/2014"));


// === 3 task 20 mins (needs an HTML file testdome.html)

function registerHandlers() {
  var as = document.getElementsByTagName('a');
  for (var i = 0; i < as.length; i++) {
    as[i].onclick = function() {
      alert(i);
      return false;
    }
  }
}
