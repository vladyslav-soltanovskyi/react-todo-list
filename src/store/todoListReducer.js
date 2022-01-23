function todoListReducer(state, action) {
    switch(action.type) {

        case "ADD_TASK": {
            return [
                ...state,
                action.payload
            ];
        }
        
        case "EDIT_TASK": {
            const { id, data } = action.payload;
            const changedTodoList = [...state].map(task => task.id === id ? { ...task, ...data } : task);
            return changedTodoList;
        }

        case "REMOVE_TASK": {
            const changedTodoList = state.filter(task => task.id !== action.payload);
            return changedTodoList;
        }
        
        case "SET_CHECKED_TASKS": {
            return state.map(task => ({ ...task, completed: action.payload }) );
        }

        case "CLEAR_TODO_LIST": {
            return [];
        }

        default:
            return state;
    }
}

export default todoListReducer;