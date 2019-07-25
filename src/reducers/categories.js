const initialState = {
    data: [
        {id: 1, name: 'React', parent: null},
        {id: 2, name: 'Vue', parent: 1},
        {id: 3, name: 'Angular', parent: 4},
        {id: 4, name: 'Backbone', parent: 5},
        {id: 5, name: 'Knockout', parent: 1},
        {id: 6, name: 'Svelte', parent: null},
        {id: 7, name: 'Ember', parent: null}
    ]
};

export const categories = (state = initialState, action ) => {
    const {type, payload} = action;

    switch (type) {
        case 'CATEGORY_ADD':
            return {
                data: payload
            };

        default:
            return state;
    }
};