import * as type from './constants';

const createAction = type => payload => ({type, payload});

export const sidebarToggle = createAction(type.SIDEBAR_TOGGLE);
export const addCategory = createAction(type.CATEGORY_ADD);
export const togglePopup = createAction(type.POPUP_TOGGLE);
export const addTask = createAction(type.TASK_ADD);
export const editTask = createAction(type.TASK_EDIT);