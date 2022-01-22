export const addTaskToTodoList = (task) => ({
    type: "ADD_TASK",
    payload: task,
});

export const editTodoTask = (id, data) => ({
    type: "EDIT_TASK",
    payload: {
        id,
        data
    },
});

export const removeTodoTask = (id) => ({
    type: "REMOVE_TASK",
    payload: id,
});