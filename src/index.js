import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from "react-router-dom";
import AppRouter from './AppRouter';
import store from './app/store';
import {Provider} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppRouter/>
      </Router>
    )
  }
}

// On rend dans le DOM notre component App créé plus haut et on le place dans la div dont l'id est root
  ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
    document.getElementById('root')
  );