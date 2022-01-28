function todoListReducer(state, action) {
    switch(action.type) {

        case "ADD_TASK": {
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            };
        }
        
        case "EDIT_TASK": {
            const { id, data } = action.payload;
            return {
                ...state,
                todoList: state.todoList.map(task => task.id === id ? { ...task, ...data } : task)
            };
        }

        case "REMOVE_TASK": {
            return {
                ...state,
                todoList: state.todoList.filter(task => task.id !== action.payload)
            };
        }
        
        case "SET_CHECKED_TASKS": {
            return {
                ...state,
                todoList: state.todoList.map(task => ({ ...task, completed: action.payload }) )
            }
        }

        case "CLEAR_TODO_LIST": {
            return {
                ...state,
                todoList: []
            };
        }

        case "SET_TYPE": {
            return {
                ...state,
                orderBy: action.payload
            }
        }

        default:
            return state;
    }
}

export default todoListReducer;