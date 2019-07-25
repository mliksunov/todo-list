import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TaskPage from './pages/TaskPage';
import TasksList from './pages/TaskList';

import { tasksConnector } from "./connectors/tasks";

const TasksListWithProps = tasksConnector(TasksList);
const TaskWithProps = tasksConnector(TaskPage);

export const MainContent = () => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category/:id' exact component={TasksListWithProps} />
        <Route path='/category/:id/task/:id' component={TaskWithProps} />
    </Switch>
);
