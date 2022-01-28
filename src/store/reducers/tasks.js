const initialState = [];

export function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TASKS': {
            return action.payload;
        }

        case 'ADD_TASK': {
            return [
                ...state,
                action.payload
            ];
        }

        case "EDIT_TASK": {
            const { id, data } = action.payload;
            return state.map(task => task.id === id ? { ...task, ...data } : task);
        }

        case 'REMOVE_TASK': {
            return state.filter((task) => task.id !== action.payload);
        }

        case 'SET_CHECKED_TASKS': {
            return state.map(task => ({ ...task, completed: action.payload }) )
        }

        case 'CLEAR_TODO_LIST': {
            return [];
        }

        default: {
            return state;
        }
    }
}
