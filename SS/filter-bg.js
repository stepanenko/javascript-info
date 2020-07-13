
const validBattlegrounds = ['mop', 'ics'];

const allBattlegrounds = [
  { name: 'ics', title: 'Initial Consideration Set' }, 
  { name: 'ae', title: 'Active Evaluation' },
  { name: 'mop', title: 'Moment of Purchase' }
];

let index = validBattlegrounds.indexOf('mop')

const battlegroundHeaders = allBattlegrounds.filter(bg => validBattlegrounds.indexOf(bg.name) > -1)


console.log(battlegroundHeaders);