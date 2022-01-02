
const group = {
  title: 'Our group',
  students: ['Tom', 'Peter', 'Jessica'],

  showGroup() {
    this.students.forEach(function (student) {
      console.log(this.title + ': ' + student);
    });
  }
}

group.showGroup();
// undefined: Tom
// undefined: Peter
// undefined: Jessica

// That doesn't affect arrow functions, because they just don't have 'this':
const group2 = {
  title: 'Group Two',
  students: ['Jim', 'Carol', 'Bill'],

  show() {
    this.students.forEach(s => console.log(this.title + ': ' + s));
  }
}

group2.show(); // Will log as expected
