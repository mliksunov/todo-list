import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tasks from './pages/Tasks';

import { tasksConnector } from "./connectors/tasks";

const TasksWithProps = tasksConnector(Tasks);

export const MainContent = () => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category/:id' component={TasksWithProps} />
        <Route path='/about' component={About} />
    </Switch>
)
