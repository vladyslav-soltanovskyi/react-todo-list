import actions from "./actions";
const {
    ADD_TASK_TODO_LIST,
    EDIT_TASK_FROM_TODO_LIST
} = actions;


function todoListReducer(state, action) {
    switch(action.type) {

        case ADD_TASK_TODO_LIST: {
            return [
                ...state,
                action.payload
            ];
        }
        
        case EDIT_TASK_FROM_TODO_LIST: {
            const { id, data } = action.payload;
            const changedTodoList = [...state].map(task => task.id === id ? { ...task, ...data } : task);
            return changedTodoList;
        }

        default:
            return state;
    }
}

export default todoListReducer;