import { categories } from './categories';
import { tasks } from './tasks';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
    categories,
    tasks
});