import axios from "axios";

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

export const fetchTasks = () => async (dispatch) => {
    try {
        const resp = await axios.get('https://61d8e2cfe6744d0017ba8cdc.mockapi.io/tasks');
        const { data } = resp;
        dispatch({
            type: 'SET_TASKS',
            payload: data,
        });
    }
    catch(e) {
        console.log(e);
    }
};

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