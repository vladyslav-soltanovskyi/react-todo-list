import { useReducer } from "react";
import todoListReducer from "./store/todoListReducer";
import { addTaskToTodoList, editTodoTask, removeTodoTask, setCheckedTodoTasks, clearTodoList, setType } from "./store/todoAction";
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';

const filters = ['all', 'active', 'сompleted'];

function App() {
    const [{ todoList, orderBy }, dispatch] = useReducer(todoListReducer, { orderBy: 'all', todoList: [] });
    
    let isAllTasksCompleted = todoList.every(task => task.completed);

    const editTask = (id, data) => {
        dispatch(editTodoTask(id, data));
    }

    const addTask = (task) => {
        dispatch(addTaskToTodoList(task));
    }

    const removeTask = (id) => {
        dispatch(removeTodoTask(id));
    }

    const setChekedTasks = (checked) => {
        dispatch(setCheckedTodoTasks(checked));
    }

    const clearTodoTasks = () => {
        dispatch(clearTodoList());
    }

    const setTab = (_, newIndex) => {
        dispatch(setType(filters[newIndex]));
    }

    return (
        <div className="App">
            <Paper className="wrapper">
                <Paper className="header" elevation={0}>
                    <h4>Список задач</h4>
                </Paper>
                <AddField addTask={addTask} />
                <Divider />
                <Tabs value={filters.indexOf(orderBy)} onChange={setTab}>
                    <Tab label="Все" />
                    <Tab label="Активные" />
                    <Tab label="Завершённые" />
                </Tabs>
                <Divider />
                <List>
                {
                    todoList.length ?
                        todoList.filter(task =>{
                                if (orderBy === 'active') {
                                    return !task.completed;
                                }
                                if (orderBy === 'сompleted') {
                                    return task.completed;
                                }
                                return true; // orderBy -> all
                            })
                            .map(task => (
                                <Item key={task.id} {...task} editTask={editTask} removeTask={removeTask} />
                            ))
                        : <p>Ваш список задач пуст</p>
                }
                </List>
                <Divider />
                <div className="check-buttons">
                    {
                        isAllTasksCompleted ?
                        <Button onClick={() => setChekedTasks(false)}>Снять отметки</Button>
                        : <Button onClick={() => setChekedTasks(true)}>Отметить всё</Button>
                    }
                    <Button onClick={clearTodoTasks}>Очистить</Button>
                </div>
            </Paper>
        </div>
    );
}

export default App;
