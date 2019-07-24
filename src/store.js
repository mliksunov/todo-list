import { createStore } from 'redux';
import { reducer } from './reducers';


export const initStore = preloadedState => {
    return createStore(
        reducer,
        preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};