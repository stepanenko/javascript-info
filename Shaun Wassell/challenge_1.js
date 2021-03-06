
const electionVotes = [
  'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
  'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
  'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
  'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
  'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer',
];

const tallyVotes1 = votes => {
  let res = {};
  votes.forEach(v => {
    if (res[v]) res[v]++;
    else res[v] = 1;
  });
  return res;
};

const tallyVotes2 = votes => {
  return votes.reduce((acc, v) => {
    acc[v] ? acc[v]++ : acc[v] = 1
    return acc;
  }, {});
};

const tallyVotes3 = votes => {
  return votes.reduce((acc, v) => ({
    ...acc,
    [v]: acc[v] ? acc[v] + 1 : 1
  }), {});
};

// Recursion solution:
const tallyVotes = (votes, i = 0, res = {}) => {
  if (i > votes.length - 1) return res;
  console.log(i);
  res[votes[i]] = res[votes[i]] ? res[votes[i]] + 1 : 1;
  return tallyVotes(votes, i + 1, res);
};

console.log(tallyVotes(electionVotes));

/* Expected Output (something like this):
    {
        Harry: <some number>
        Donna: <some number>
        Rick: <some number>
        ...
    }
*/