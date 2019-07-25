import {SIDEBAR_TOGGLE, CATEGORY_ADD, POPUP_TOGGLE} from './constants';

const createAction = type => payload => ({type, payload});

const sidebarToggle = createAction(SIDEBAR_TOGGLE);
const addCategory = createAction(CATEGORY_ADD);
const togglePopup = createAction(POPUP_TOGGLE);

export {sidebarToggle, addCategory, togglePopup};