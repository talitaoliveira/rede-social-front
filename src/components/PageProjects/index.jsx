import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Projects from './Projects';
import Project from './Project';

const ProjectsPage = () => (
  <Switch basename="/rede-social">
    <Route exact path='/projects' component={Projects}/>
    <Route path='/projects/:number' component={Project}/>
  </Switch>
)

export default ProjectsPage