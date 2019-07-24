const initialState = {
    data: [
        {id: 1, name: 'React', parent: null},
        {id: 2, name: 'Vue', parent: 1},
        {id: 3, name: 'Angular', parent: 4},
        {id: 4, name: 'Backbone', parent: 5},
        {id: 5, name: 'Knockout', parent: 1}
    ]
};

export const categories = (state = initialState, action ) => {
    const {type, payload} = action;

    switch (type) {
        case 'USERNAME_CHANGE':
            return {...state, name: payload};

        default:
            return state;
    }
};