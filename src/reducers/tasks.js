const initialState = {
    data: [
        {id: 1, name: 'Do something', parentCategory: 2, description: 'task 1 desription'},
        {id: 2, name: 'Do something', parentCategory: 2, description: 'task 8 desription'},
        {id: 3, name: 'Do something', parentCategory: 2, description: 'task 7 desription'},
        {id: 4, name: 'Do something', parentCategory: 2, description: 'task 6 desription'},
        {id: 5, name: 'Do something', parentCategory: 2, description: 'task 5 desription'},
        {id: 6, name: 'Do something', parentCategory: 3, description: 'task 6 desription'},
        {id: 7, name: 'Do something', parentCategory: 3, description: 'task 7 desription'},
        {id: 8, name: 'Do something', parentCategory: 3, description: 'task 8 desription'},
        {id: 9, name: 'Do something', parentCategory: 3, description: 'task 9 desription'}
    ]
};

export const tasks = (state = initialState, action ) => {
    const {type, payload} = action;

    switch (type) {
        case 'USERNAME_CHANGE':
            return {...state, name: payload};

        default:
            return state;
    }
};