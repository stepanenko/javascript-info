
# Thoughts from Ryan McDermott

Software engineer at Google

Website: https://ryanmcdermott.me/


## Functions

### Function arguments (2 or fewer ideally)

One or two arguments is the ideal case, and three should be avoided if possible.
Usually, if you have more than two arguments then your function is trying to do too much.
Since JavaScript allows you to make objects on the fly, without a lot of class boilerplate,
you can use an object if you are finding yourself needing a lot of arguments.

To make it obvious what properties the function expects, you can use the ES2015/ES6 destructuring syntax. This has a few advantages:

- It's immediately clear what properties are being used.
- It can be used to simulate named parameters.
- Destructuring also clones primitive values passed into the function. This prevents side effects (except objects and arrays)
- Linters can warn you about unused properties, which would be impossible without destructuring.

Bad:
```
function createMenu(title, body, buttonText, cancellable) {
  // ...
}

createMenu("Foo", "Bar", "Baz", true);
```
Good:
```
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
});
```

### Functions should do one thing

This is by far the most important rule in software engineering.
When functions do more than one thing, they are harder to compose, test, and reason about.

Bad:
```
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```
Good:
```
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

### Remove duplicate code
Duplicate code is bad because it means that there's more than one place to alter something if you need to change some logic.

Removing duplicate code means creating an abstraction that can handle this set of different things with just one function/module/class.

Getting the abstraction right is critical. **Bad abstractions can be worse than duplicate code**!

Bad:
```
function showDeveloperList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach(manager => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
    };

    render(data);
  });
}
```
Good:
```
function showEmployeeList(employees) {
  employees.forEach(employee => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    const data = {
      expectedSalary,
      experience
    };

    switch (employee.type) {
      case "manager":
        data.portfolio = employee.getMBAProjects();
        break;
      case "developer":
        data.githubLink = employee.getGithubLink();
        break;
    }

    render(data);
  });
}
```
