import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListComponent from '../../containers/RickAndMortyList';
import DetailsComponent from '../../containers/RickAndMortyDetail';
import style from './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <section className={style.main}>
          <Switch>
            <Route 
              path='/' 
              exact render={(routerProps) => <ListComponent {...routerProps} />} 
            />
            <Route 
              path='/:id' 
              exact render={(routerProps) => <DetailsComponent {...routerProps} />} 
            />
          </Switch>
        </section>
      </Router>
    )
  }
}
