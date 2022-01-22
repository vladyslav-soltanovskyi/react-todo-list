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

        default:
            return state;
    }
}

export default todoListReducer;