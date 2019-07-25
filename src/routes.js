import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TaskPage from './pages/TaskPage';
import TasksList from './pages/TaskList';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';

import { tasksConnector } from "./connectors/tasks";

const TasksListWithProps = tasksConnector(TasksList);
const TaskWithProps = tasksConnector(TaskPage);
const AddTaskWithProps = tasksConnector(AddTask);
const EditTaskWithProps = tasksConnector(EditTask);

export const MainContent = () => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category/:id' exact component={TasksListWithProps} />
        <Route path='/category/:id/task/:id' exact component={TaskWithProps} />
        <Route path='/category/:id/task/:id/edit-task' component={EditTaskWithProps} />
        <Route path='/category/:id/add-task' component={AddTaskWithProps} />
    </Switch>
);
