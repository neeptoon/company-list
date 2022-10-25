import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Table} from '../../Components/Table';
import {Tablecaption} from '../../Components/Tablecaption';
import {Chooser} from '../../Components/Chooser';
import {useToggle} from '../../hooks/useToggle';

import {selectCompanies} from '../Companies/companies-slice';

import WorkerRow from '../../Components/WorkerRow/WorkerRow';


import {selectWorker, selectAllWorkers} from './workers-slice';

export const Workers = () => {
    const dispatch = useDispatch();
    const workers = useSelector(state => state.workers);
    const rows = [];
    const [isSelected, toggleSelected] = useToggle(false);
    const selectedCompanies = useSelector(selectCompanies);




    workers.forEach(worker => {
        const handleChange = (id) => {
            dispatch(selectWorker(id));
        };


        rows.push(
            <WorkerRow key={worker.id} worker={worker} handleChange={handleChange}/>
        );
    });

    const toggleSelectAllWorkers = () => {
        toggleSelected();
        dispatch(selectAllWorkers(isSelected));
    };

    return (
        <Table rows={rows}>
            <Tablecaption title="Список работников">
                <Chooser value={isSelected} onChange={toggleSelectAllWorkers}/>
            </Tablecaption>
        </Table>

    );
};