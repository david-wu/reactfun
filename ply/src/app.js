import React from 'react'
import { Router, Route, Link } from 'react-router'
import Main from './components/main'
// import TopBar from './components/top_bar'
// import AddBlurb from './components/add_blurb'
import ReactDOM from 'react-dom'

var context = document.getElementById('content')

ReactDOM.render(
  <div>
    <Main/>
  </div>, context);

