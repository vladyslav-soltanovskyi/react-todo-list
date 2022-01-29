import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodoTask, editTodoTask, removeTodoTask, setCheckedTasks, clearTodoList, fetchTasks } from "./store/actions/tasks";
import { Paper, Divider, Button, List } from '@mui/material';
import { AddField } from './components/AddField';
import { Filter } from './components/Filter';
import { Item } from './components/Item';

function App() {
    const dispatch = useDispatch();
    const tasks = useSelector(({tasks}) => tasks);
    const filterBy = useSelector(({filter}) => filter.filterBy);
    
    let isAllTasksCompleted = tasks.every(task => task.completed);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const editTask = (id, data) => {
        dispatch(editTodoTask(id, data));
    }

    const addTask = (task) => {
        dispatch(addTodoTask(task));
    }

    const removeTask = (id) => {
        dispatch(removeTodoTask(id));
    }

    const setChekedTasks = (checked) => {
        dispatch(setCheckedTasks(checked));
    }

    const clearTodoTasks = () => {
        dispatch(clearTodoList());
    }

    return (
        <div className="App">
            <Paper className="wrapper">
                <Paper className="header" elevation={0}>
                    <h4>Список задач</h4>
                </Paper>
                <AddField addTask={addTask} />
                <Divider />
                <Filter />
                <Divider />
                <List>
                {
                    tasks.length ?
                        tasks.filter(task =>{
                                if (filterBy === 'active') {
                                    return !task.completed;
                                }
                                if (filterBy === 'сompleted') {
                                    return task.completed;
                                }
                                return true; // filterBy -> all
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
