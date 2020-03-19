
let group = {
  title: 'Our group',
  students: ['Tom', 'Peter', 'Jessica'],

  showGroup() {
    this.students.forEach(function(student) {
      return console.log(this.title + ': ' + student);
    });
  }
}

// group.showGroup();
// will log:
// undefined: Tom
// undefined: Peter
// undefined: Jessica

// The error occurs because forEach runs functions with this=undefined by default, so the attempt to access undefined.title is made. That doesn’t affect arrow functions, because they just don’t have this:

let group2 = {
  title: 'Group Two',
  students: ['Jim', 'Carol', 'Bill'],

  show() {
    this.students.forEach(s => console.log(this.title + ': ' + s));
  }
}

group2.show(); // Will log as expected
