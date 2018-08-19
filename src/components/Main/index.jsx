import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home';
import Teste from '../Teste';
import PageProjects from '../PageProjects';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={PageProjects}/>
      <Route path='/teste' component={Teste}/>
    </Switch>
  </main>
)

export default Main