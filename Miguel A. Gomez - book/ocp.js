// OCP
const axios = require('axios');

class TodoExternalService {
  requestTodoItems(callback) {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    axios
      .get(url)
      .then(callback);
  }
}

new TodoExternalService()
  .requestTodoItems(response => console.log(response.data));

// Adapter Pattern:
class ClientWrapper {
  makeGetRequest(url, callback) {
    return axios
      .get(url)
      .then(callback);
  }
}

// ClientWrapper is a class that belongs to the infrastructure layer. To use it in our
// domain in a decoupled way, we must inject it via the constructor (dependency inversion principle).
// It is this easy:

// infrastructure/ClientWrapper
const axios = require('axios');
export class ClientWrapper {
  makeGetRequest(url, callback) {
    return axios
      .get(url)
      .then(callback);
  }
}

// domain/TodoService
export class TodoService {
  client;

  constructor(client) {
    this.client = client;
  }

  requestTodoItems(callback) {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    this.client.makeGetRequest(url, callback)
  }
}

//index
import { ClientWrapper } from './infrastructure/ClientWrapper';
import { TodoService } from './domain/TodoService';

const start = () => {
  const client = new ClientWrapper();
  const todoService = new TodoService(client);

  todoService.requestTodoItems(response => console.log(response.data))
}

start();

// We have removed the axios dependency from our domain.
// Now we could use ClientWrapper class to make HTTP requests throughout the project.
// This would allow us to maintain a low coupling with third-party libraries, which is
// tremendously positive for us, since if we wanted to change the axios library to fetch,
// for example, we would only have to do it in our ClientWrapper class:

export class ClientWrapper {
  makeGetRequest(url, callback) {
    return fetch(url)
      .then(response => response.json())
      .then(callback)

  }
}

// In this way we have managed to change requestTodoItems without modifying its
// code, thus respecting the open/closed principle
