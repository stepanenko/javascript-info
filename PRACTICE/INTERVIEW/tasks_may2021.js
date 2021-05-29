//// Interview tasks:

const a = {
  foo: function () {
    return this;
  },
};

// a.foo(); // ?

const b = a.foo;

// b(); // ?

// //

const calculate = () => {
  let res = 0;
  return {
    add(num) {
      res = res + num;
      return this;
    },
    result() {
      return res;
    },
  };
};

// How to make a calculate func work like following:
// calculate().add(1).add(2).add(3).result(); // 6

// //

// import { fetchUsers } from 'user-service'
// import { logError } from 'log-service'

// fetchUsers()
//   // .catch((err) => {
//   //   logError(err)
//   //   return Promise.reject(err);
//   // })
//   .then(
//     (users) => {
//       const formatted = users.map(/*...*/)
//     },
//     (err) => {
//       logError(err)
//     }
//   )

// //

async function getUsers() {
  let users = undefined;

  try {
    users = await fetchUsers();
  } catch (err) {
    logError(err);
    throw err;
  }

  const formatted = users.map(/*...*/);
}

// //

async function getUsers2() {
  let users = undefined;

  try {
    users = await fetchUsers();
    const formatted = users.map(/*...*/);
    /* ... */
  } catch (err) {
    logError(err);
  }
}

//

const data = {
  room1: {
    amount: 100,
    currency: "USD",
  },
  room2: {
    amount: 200,
    currency: "EUR",
  },
  room3: {
    amount: 300,
    currency: "USD",
  },
  room4: {
    amount: 400,
    currency: "EUR",
  },
};

// How to get this result: [['EUR', 600], ['USD', 400]]

// Solution (not completed)
let currency = {
  usd: 600,
  eur: 100,
};

Object.entries(currency);

//

setTimeout(() => {
  console.log("foo");
}, 0);

// ~10ms of sync code

console.log("bar");

//

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }, []);

  return <div>{counter}</div>;
}

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    setState((state) => {
      return { counter: state.counter + 1 };
    });
    setState((state) => {
      return { counter: state.counter + 1 };
    });
    setState((state) => {
      return { counter: state.counter + 1 };
    });
  }

  render() {
    return <div>{this.state.counter}</div>;
  }
}

//

import { fetchUser } from "user-service";

/**
 *
 * 1 - Bob
 * 2 - Alex
 * 3 - Jack
 */

class Counter extends React.Component {
  state = {
    selectedUserId: null,
    users: [],
  };

  getUser(userId) {
    setState({ selectedUserI: userId });
    fetchUser(userId).then((user) => {
      // console.log(user.id, user.name)
      this.setState((prevState) => ({
        ...prevState,
        users: [...prevState.users, user],
      }));
    });
  }

  render() {
    const userIds = [1, 2, 3];

    // fetchUser(1).then(user => {
    //   console.log(user.id, user.name)
    // })

    return (
      <div>
        <h1>
          {
            this.state.users.find(
              (user) => user.id === this.state.selectedUserId
            )?.name
          }
        </h1>
        {userIds.map((id) => (
          <div onClick={() => this.getUser(id)}>User ID: {id}</div>
        ))}
      </div>
    );
  }
}
