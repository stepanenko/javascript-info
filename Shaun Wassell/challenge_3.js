
const currentInputValues = {
  firstName: 'S', // Must be at least 2 characters
  lastName: 'Ste', // Must be at least 2 characters
  zipCode: '34242', // Must be exactly 5 characters
  state: 'F', // Must be exactly 2 characters
};

const inputCriteria = {
  firstName: name => [name.length < 2, 'First Name Must be at least 2 characters'],
  lastName: name => [name.length < 2, 'Last Name Must be at least 2 characters'],
  zipCode: number => [number.length !== 5, 'Zip Code Must be exactly 5 characters'],
  state: state => [state.length !== 2, 'State Must be exactly 2 characters']
};

const getErrorMessages = (inputs, criteria) => {
  let errors = [];

  Object.keys(inputs).forEach(field => {
    const [isError, message] = criteria[field](inputs[field]);
    isError && errors.push(message);
  });

  return errors;
}

// Solution with reduce:
const getErrorMessages2 = (inputs, criteria) => {
  return Object.keys(inputs).reduce((acc, key) => {
    const [isError, message] = criteria[key](inputs[key]);
    return isError ? [...acc, message] : acc;
  }, []);
}

// Strage solution
const getErrorMessages3 = (inputs, criteria) => {
  return Object.keys(inputs).reduce((acc, key) => [
    ...acc,
    criteria[key](inputs[key])
  ].filter(arr => arr[0]), []).map(el => el[1]);
}

console.log(getErrorMessages3(currentInputValues, inputCriteria));

/*
Expected Output: [
  'First name must be at least 2 characters',
  'Last name must be at least 2 characters',
  'Zip code must be exactly 5 characters',
  'State must be exactly 2 characters',
];
*/
