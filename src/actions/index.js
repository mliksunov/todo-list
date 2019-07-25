import * as type from './constants';

const createAction = type => payload => ({type, payload});

const sidebarToggle = createAction(type.SIDEBAR_TOGGLE);
const addCategory = createAction(type.CATEGORY_ADD);
const togglePopup = createAction(type.POPUP_TOGGLE);

export {sidebarToggle, addCategory, togglePopup};