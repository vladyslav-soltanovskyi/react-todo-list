import { useState } from 'react';
import { IconButton, Checkbox, ListItem, Typography, TextField } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Item = ({ id, text, completed, editTask, removeTask }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState();

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            handleChangeIsEdit();
        }
    }

    const handleChangeText = () => {
        if (!value) {
            return;
        }

        editTask(id, { text: value });
    }

    const handleChange = () => {
        editTask(id, { completed: !completed });
    }

    const handleChangeIsEdit = () => {
        if(isEdit) {
            handleChangeText();
        }

        setIsEdit(!isEdit);
    }

    const onClickRemoveTask = () => {
        if(window.confirm("Вы действительно хотите удалить эту задачу?")) {
            removeTask(id);
        }
    }

    return (
        <ListItem>
            <div className="d-flex item">
                <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} checked={completed} onChange={handleChange} />
                {
                isEdit ?
                <TextField 
                       variant="standard"
                       fullWidth
                       onKeyDown={handleKeyDown}
                       onChange={onChangeValue}
                       defaultValue={text} />
                : <Typography className="item-text">{text}</Typography>
                }
                <div className="item-buttons d-flex">
                    <IconButton onClick={handleChangeIsEdit}>
                        <EditIcon style={{ fontSize: 20 }} />
                    </IconButton>
                    <IconButton onClick={onClickRemoveTask} >
                        <DeleteOutlineIcon style={{ fontSize: 20 }} />
                    </IconButton>
                </div>
            </div>
        </ListItem>
    );
};
