import React from 'react'
import { Router, Route, Link } from 'react-router'
import Main from './components/main'
import TopBar from './components/top_bar'
import AddBlurb from './components/add_blurb'

React.render(
  <div>
    <TopBar/>
    <Router>
      <Route name="Main" path="/" component={Main}>
      </Route>
      <Route name="AddBlurb" path="add_blurb" component={Main}>
      </Route>
    </Router>
  </div>, document.body);

