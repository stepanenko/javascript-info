
I've added the folder server.
There I've created a very simple custom server with express.

How to use:

- add an express to package.json with `yarn add express`
- build the react app with `yarn build`
- `cd server` and run `node server.js` and go to http://localhost:9000/

The choice of server isn’t important. Since Create React App is completely platform-agnostic.

The build folder with static assets is the only output produced by Create React App.

However this is not enough if you use client-side routing.

If you want to support URLs like /todos/42 in your single-page app [read this](https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing)
