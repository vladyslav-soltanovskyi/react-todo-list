export const addTodoTask = (task) => ({
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

export const setCheckedTasks = (checked) => ({
    type: "SET_CHECKED_TASKS",
    payload: checked
});

export const clearTodoList = () => ({
    type: "CLEAR_TODO_LIST"
});