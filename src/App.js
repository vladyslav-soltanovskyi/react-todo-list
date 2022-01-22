import { useReducer } from "react";
import todoListReducer from "./store/todoListReducer";
import { addTaskToTodoList, editTodoTask, removeTodoTask } from "./store/todoAction";
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';

function App() {
    let [todoList, dispatch] = useReducer(todoListReducer, [])

    const editTask = (id, data) => {
        dispatch(editTodoTask(id, data));
    }

    const addTask = (task) => {
        dispatch(addTaskToTodoList(task));
    }

    const removeTask = (id) => {
        dispatch(removeTodoTask(id));
    }

    return (
        <div className="App">
            <Paper className="wrapper">
                <Paper className="header" elevation={0}>
                    <h4>Список задач</h4>
                </Paper>
                <AddField addTask={addTask} />
                <Divider />
                <Tabs value={0}>
                    <Tab label="Все" />
                    <Tab label="Активные" />
                    <Tab label="Завершённые" />
                </Tabs>
                <Divider />
                <List>
                {
                    todoList.length ?
                        todoList.map(task => (
                            <Item key={task.id} {...task} editTask={editTask} removeTask={removeTask} />
                        ))
                        : <p>Ваш список задач пуст</p>
                }
                </List>
                <Divider />
                <div className="check-buttons">
                    <Button>Отметить всё</Button>
                    <Button>Очистить</Button>
                </div>
            </Paper>
        </div>
    );
}

export default App;
