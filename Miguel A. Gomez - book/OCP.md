# OCP

In cases where new behaviors are introduced into existing systems, instead of modifying
old components, new components should be created. The reason is that if those
components or classes are being used in another part (of the same project or of others)
we will be altering their behavior and thus could cause unwanted effects.

## Applying OCP

There are several ways of applying OCP. One could be to use extension mechanisms, such as inheritance or composition.
And you should try to prioritize composition over inheritance.
I think a good context to illustrate how to apply the OCP might be to try to decouple dependent things:

```js
const axios = require("axios");

class TodoExternalService {
  requestTodoItems(callback) {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    axios.get(url).then(callback);
  }
}

new TodoExternalService().requestTodoItems((response) =>
  console.log(response.data)
);
```

Here we are skipping the OCP, since if we wanted to replace the library axios for another, like fetch,
we would have to modify the class. To solve these problems we are going to use the **adapter pattern.**

## Adapter pattern

The adapter pattern belongs to the category of structural patterns.
It is a pattern we are decoupling elements of our system and third-party libraries.

```js
class ClientWrapper {
  makeGetRequest(url, callback) {
    return axios.get(url).then(callback);
  }
}
```

ClientWrapper is a class that belongs to the infrastructure layer. To use it in our
domain in a decoupled way, we must inject it via the constructor (dependency inversion principle).
It is this easy:

```js
// infrastructure/ClientWrapper
const axios = require("axios");
export class ClientWrapper {
  makeGetRequest(url, callback) {
    return axios.get(url).then(callback);
  }
}

// domain/TodoService
export class TodoService {
  client;

  constructor(client) {
    this.client = client;
  }

  requestTodoItems(callback) {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    this.client.makeGetRequest(url, callback);
  }
}

// index
import { ClientWrapper } from "./infrastructure/ClientWrapper";
import { TodoService } from "./domain/TodoService";

const start = () => {
  const client = new ClientWrapper();
  const todoService = new TodoService(client);

  todoService.requestTodoItems((response) => console.log(response.data));
};

start();
```

We have removed the axios dependency from our domain.
Now we could use ClientWrapper class to make HTTP requests throughout the project.
This would allow us to maintain a low coupling with third-party libraries, which is
tremendously positive for us, since if we wanted to change the axios library to fetch,
for example, we would only have to do it in our ClientWrapper class:

```js
export class ClientWrapper {
  makeGetRequest(url, callback) {
    return fetch(url)
      .then((response) => response.json())
      .then(callback);
  }
}
```

In this way we have managed to change requestTodoItems without modifying its
code, thus respecting the open/closed principle

## Detect violations of OCP

This principle is closely related to that of single responsibility.
If a high percentage of changes is affecting our class, it is a symptom that
this class, in addition to being too coupled and having too many responsibilities, is
violating the open closed principle.

Also, the principle is violated very often when we involve
different layers of the project architecture (as it was in the example above).
