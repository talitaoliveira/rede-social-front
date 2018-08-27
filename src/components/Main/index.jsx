import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home';
import About from '../About';
import PageProjects from '../PageProjects';
import Page404 from '../Page404';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={PageProjects}/>
      <Route path='/about' component={About}/>
      <Route component={Page404} />
    </Switch>
  </main>
)

export default Main