# fw-model

A package for handling models with decorators. Also provides "form" bindings with simple validation rules that can be applied.

## Decorating TypeScript models

If your model is flat there is no need to decorate anything. A simple example:

```ts
class User {
  Id: string;
  Name: string;
}
```

Then to use with a given JSON object:

```ts
const json = {
  "Id": "123",
  "Name": "Name here"
};
```

You would use:

```ts
const userInstance = createFrom(User, json);
```

If you have any sort of nested models you can start decorating models so that the `createFrom` function create real instances of classes for you.

This does require `experimentalDecorators` and `emitDecoratorMetadata` to be turned on.

```ts
import { fromClass, fromArray } from "fw-model";

class User {
  Id: string;
  Name: string;

  public sayHello() {
    console.log("Hello," this.Name);
  }
}

class Organization {
  Name: string;

  @fromClass Admin: User;
  @fromClassArray(User) Users;
}

const json = {
  "Name": "Org Name",
  "Admin": {
    "Id": "123",
    "Name": "Admin User"
  },
  "Users": [
    {
      "Id": "456",
      "Name": "User 1"
    },
    {
      "Id": "789",
      "Name": "User 2"
    }
  ]
};

const organizationInstance = createFrom(Organization, json);

organizationInstance.Admin instanceof User; // true
organizationInstance.Users[0] instanceof User; // true

organizationInstance.Admin.sayHello(); // "Hello, Admin User"
```

If you need more control or have some custom logic (example: polymorphic models) you can use the `@fromCustom` decorator.

If you have a dictonary of a certian type, you can use `@fromPropertyClass`. Example:

```ts
class User {
  Id: string;
  Name: string;
}

class Organization {
  Name: string;

  @fromPropertyClass(User) UsersById: { [id: string]: User };
}

const json = {
  "Name": "Org Name",
  "UsersById": {
    "456": {
      "Id": "456",
      "Name": "User 1"
    },
    "789": {
      "Id": "789",
      "Name": "User 2"
    }
  }
};

```

# Forms

Forms are a way to validate data and create instances of data that are easy to bind to UI components.

There are two different ways you can use forms. If you don't have a "model" that you can reuse in other places (like a login form) you can just create a class and extend the Form class and use the `@field` decorator.

```ts
import { Form, field, Validators } from "fw-model";

class LoginForm extends Form {
  @field("Email Address", Validators.required, Validators.isEmail)
  public EmailAddress: string = null;

  @field("Password", Validators.required)
  public Password: string = null;
}

// in a view model
const loginForm = new LoginForm();

// you can now bind to this instance in the view

// since this is a real instance, you can even dispatch it for a store to handle (if using "fw")
await dispatch(this.loginForm);

// validate it anywhere:
this.loginForm.validate(); // with throw if invalid and automatically set validation on the instance. Your UI components can bind to these as well.

// clear validation:
this.loginForm.clearValidation();
```

A lot of times, you have models built up and want to just reuse those.

```ts
import { Validators, formFor } from "fw-model";

export const UserForm = formFor(User, s => {
  s.field(u => f.Name, "Name", Validators.required);
  s.field(u => f.EmailAddress, "Email Address", Validators.required, Validators.isEmail);
});

// in your view models

const newUser = UserForm(null);
const updateUser = UserForm(existingUser);
```

You can now validate the same way as a regular form.

Using an "expression" as the first parameter, we can benifet from refactoring tools.

Of course we will need to get an instance of a real model from the form.

```ts
const userInstance = newUser.updatedModel();

userInstance instanceof User; // true
```

You can also use `s.form(...);` and `s.formArray(...)` to embed other forms (when you want to break up models across screens). When embedding, you only need to call `.validate()` on the top level object, and it will recurse all the way down. `.updatedModel()` works as expected.
