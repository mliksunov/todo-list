import * as type from './constants';

const createAction = type => payload => ({type, payload});

export const sidebarToggle = createAction(type.SIDEBAR_TOGGLE);
export const addCategory = createAction(type.CATEGORY_ADD);
export const togglePopup = createAction(type.POPUP_TOGGLE);