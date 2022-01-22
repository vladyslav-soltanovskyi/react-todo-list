import actions from "./actions";
const {
    ADD_TASK_TODO_LIST,
    EDIT_TASK_FROM_TODO_LIST
} = actions;

export const addTaskToTodoList = (task) => ({
    type: ADD_TASK_TODO_LIST,
    payload: task,
});


export const editTodoTask = (id, data) => ({
    type: EDIT_TASK_FROM_TODO_LIST,
    payload: {
        id,
        data
    },
});