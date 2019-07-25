const initialState = {
    meta: {
        isSidebarOpened: true,
        isPopupVisible: false,
        parentToAdd: null
    }
};

export const common = (state = initialState, action ) => {
    const {type, payload} = action;

    switch (type) {
        case 'SIDEBAR_TOGGLE':
            return {
                meta: {
                    ...state.meta,
                    isSidebarOpened: payload
                }
            };

        case 'POPUP_TOGGLE':
            return {
                meta: {
                    ...state.meta,
                    ...payload
                }
            };

        default:
            return state;
    }
};