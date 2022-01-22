import { useState } from 'react';
import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const AddField = ({ addTask }) => {
    let [text, setText] = useState('');
    let [completed, setCompleted] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
    }

	const onChangeCheckbox = (e) => {
        setCompleted(e.target.checked);
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
            completed
        };
        
        setText('');
		setCompleted(false);
        addTask(newTodoTask);
    }

    return (
        <div className="field">
            <Checkbox
                className="checkbox"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
				checked={completed}
				onChange={onChangeCheckbox}
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
