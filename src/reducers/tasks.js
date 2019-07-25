const initialState = {
    data: [
        {id: 1, name: 'Learn Vuex', parentCategory: 2, description: 'task 1 desription', done: false},
        {id: 2, name: 'Learn VueRouter', parentCategory: 2, description: 'task 2 desription', done: false},
        {id: 3, name: 'Read about mutations', parentCategory: 2, description: 'task 2 desription', done: false},
        {id: 4, name: 'Learn styled components', parentCategory: 2, description: 'task 4 desription', done: false},
        {id: 5, name: 'Learn transitions', parentCategory: 2, description: 'task 5 desription', done: false},
        {id: 6, name: 'Do something', parentCategory: 3, description: 'task 6 desription', done: false},
        {id: 7, name: 'Do something', parentCategory: 3, description: 'task 7 desription', done: false},
        {id: 8, name: 'Do something', parentCategory: 3, description: 'task 8 desription', done: false},
        {id: 9, name: 'Do something', parentCategory: 3, description: 'task 9 desription', done: false}
    ]
};

export const tasks = (state = initialState, action ) => {
    const {type, payload} = action;

    switch (type) {
        case 'TASK_ADD':
            return {
                data: [
                    ...state.data,
                    payload
                ]
            };

        case 'TASK_EDIT':
            return {
                data: payload
            };

        default:
            return state;
    }
};