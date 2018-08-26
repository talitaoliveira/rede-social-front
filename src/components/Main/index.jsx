import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home';
import Teste from '../Teste';
import PageProjects from '../PageProjects';
import Page404 from '../Page404';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={PageProjects}/>
      <Route path='/teste' component={Teste}/>
      <Route component={Page404} />
    </Switch>
  </main>
)

export default Main