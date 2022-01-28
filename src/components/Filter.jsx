import { Tabs, Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/actions/filter';

const filters = ['all', 'active', 'сompleted'];

export const Filter = () => {
    const dispatch = useDispatch();
    const filterBy = useSelector(({filter}) => filter.filterBy);

    const setTab = (_, newIndex) => {
        dispatch(setFilter(filters[newIndex]));
        console.log(newIndex, filterBy);
    }

    return (
        <Tabs value={filters.indexOf(filterBy)} onChange={setTab}>
            <Tab label="Все" />
            <Tab label="Активные" />
            <Tab label="Завершённые" />
        </Tabs>
    );
};
