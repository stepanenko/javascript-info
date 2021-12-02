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

One way to separate these responsibilities could be by
moving each of the functions of the UseCase class to others, like this:

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

## Detecting violations of SRP

Knowing whether or not we are respecting the single responsibility principle can be
somewhat ambiguous at times. Below we will see a list of situations that will help
us detect violations of the SRP:

- Too generic a name. Choosing an overly generic name often results in a God
Object, an object that does too many things.
- Changes usually affect this class. When a high percentage of changes usually
affect the same class, it may be a sign that the class is too coupled or has too
many responsibilities.
- The class involves multiple layers of architecture. If, as we saw in the case of
the example, our class does things like access the persistence layer or notify the
user, in addition to implementing the business logic, it is clearly violating the
SRP.
- High number of imports. Although this by itself does not imply anything, it
could be a symptom of violation.
- High number of public methods. When a class has an API with a high number
of public methods, it is often a sign that it has too many responsibilities.
- Excessive number of lines of code. If our class only has a single responsibility,
its number of lines should not, in principle, be very high.
