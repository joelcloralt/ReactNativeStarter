# React Native Starter
This repo contains the initial setup of a React Native Project using the following modules:
- Redux
- react-native-router-flux
- Immutable

## Steps

These are the steps I followed while setting up this project:

1. `react-native init ReactNativeStarter` to initialize the project.
2. `react-native run-ios` to make sure the project starts fine.
3. `npm install redux react-redux redux-logger redux-thunk react-native-router-flux react-router-redux immutable --save`.
4. Create a directory called `src` where I will put all of my code.
5. Create a file inside `src` called `app.js` which will be the entry point for both platforms.
6. Create a `routes.js`, `configureStore.js` inside `src`
7. Create a `components` directory inside `src` where I will put all of the components I use in the app. I'll add more directories to `components` as the project grows to organize it better.
8. Create the first page of the app inside `components`. I called it `home.js`
9. Create a directory called `reducers` where would put all redux stuff and file in it called `index.js`.
10. Create a directory for the first reducer called `app` and add the `app-initial-state.js`, the `app-actions.js` and of course the `app-reducer.js`
11. Create `actionConnector.js` and `requestActionConnector.js` which are 2 helper files to help reduce the amount of boilerplate you end up writing with redux.
12. Create the `initial-state.js` file which will contain all actions imported here as the project grows.


