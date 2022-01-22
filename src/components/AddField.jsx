import { useState } from 'react';
import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const AddField = ({ addTask }) => {
    let [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            handleAddTask();
        }
    }

    const handleAddTask = () => {
        if(!text) {
            return;
        }
        
        const newTodoTask = {
            id: Date.now(),
            text,
            completed: false
        };
        
        setText('');
        addTask(newTodoTask);
    }

    return (
        <div className="field">
            <Checkbox
                className="checkbox"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
            />
            <TextField placeholder="Введите текст задачи..."
                       variant="standard"
                       fullWidth
                       onChange={handleChange}
                       onKeyDown={handleKeyDown}
                       value={text} />
            <Button onClick={handleAddTask}>
                <AddIcon />
            </Button>
        </div>
    );
};
