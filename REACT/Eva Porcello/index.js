
const { useState, useEffect, useReducer } = React;

function Header({ name }) {
  return <h1>{name}</h1>;
}

function GithubUser({ login }) {
  const [data, setData] = useState('Bill');

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  });

  if (data) {
    return (
      <div>
        <h2>{data.name}</h2>
        <img src={data.avatar_url} width={300} />
      </div>
    );
  }

  return null;
}

function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false   // initial state of 'checked'
  );

  return (
    <div>
      <input type='checkbox' value={checked} onChange={toggle} />
      <label> Status: {checked ? 'checked' : 'not checked'}</label>
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header name='Eve Porcello - React' />
      <GithubUser login='stepanenko' />
      <Checkbox />
    </React.Fragment>
  );
}

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
