# SRP

The single responsibility principle is not based on creating classes with a single
method, but on designing components that are only exposed to one source of change.
Therefore, the concept of responsibility refers to those actors (sources of change) that
could request different modifications in a certain module depending on their role in
the business. Let’s see an example:

```js
class UseCase {
    doSomethingWithTaxes() {
        console.log("Do something related with taxes ...");
    }
    saveChangesInDatabase() {
        console.log("Saving in database ...")
    }
    sendEmail() {
        console.log("Sending email ...")
    }
}

function start() {
    const myUseCase = new UseCase()
    myUseCase.doSomethingWithTaxes();
    myUseCase.saveChangesInDatabase();
    myUseCase.sendEmail();
}

start();
```
## Applying the SRP

Returning to the example, one way to separate these responsibilities could be by
moving each of the functions of the UseCase class to others, like this 

```js
class UseCase {
    constructor(repo, notifier) {
        this.repo = repo;
        this.notifier = notifier;
    }

    doSomethingWithTaxes() {
        console.log("Do something related with taxes ...")
    }

    saveChanges() {
        this.repo.update();
    }

    notify() {
        this.notifier.notify("Hi!")
    }
}

class Repository {
    add() {
        console.log("Adding in database");
    }

    update() {
        console.log("Updating in database...");
    }

    remove() {
        console.log("Deleting from database ...");
    }

    find() {
        console.log("Finding from database ...");
    }
}

class NotificationService {
    notify(message) {
        console.log("Sending message ...");
        console.log(message);
    }
}

function start() {
    const repo = new Repository()
    const notifier = new NotificationService()
    const myUseCase = new UseCase(repo, notifier)

    myUseCase.doSomethingWithTaxes();
    myUseCase.saveChanges();
    myUseCase.notify();
}

start();

```
