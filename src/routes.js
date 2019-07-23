import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tasks from './pages/Tasks';

export const MainContent = ({tasks}) => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category/:id' component={ props => <Tasks {...props} tasks={tasks} /> } />
        <Route path='/about' component={About} />
    </Switch>
)
