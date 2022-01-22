import React from 'react';
import { IconButton, Checkbox, ListItem, Typography } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Item = ({ id, text, completed, editTask, removeTask }) => {
    const handleChange = () => {
        editTask(id, { completed: !completed });
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
                <Typography className="item-text">{text}</Typography>
                <div className="item-buttons d-flex">
                    <IconButton>
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
