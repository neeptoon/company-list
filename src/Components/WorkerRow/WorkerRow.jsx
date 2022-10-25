import React from 'react';

import classes from './WorkerRow.module.scss';


const WorkerRow = ({worker, handleChange}) => {
    return (
        <tr
            className={worker.selected ? classes.selected : ''}
        >
            <td>
                <input type="checkbox"
                    checked={worker.selected}
                    onChange={() => handleChange(worker.id)}
                />
            </td>
            <td>{worker.name}</td>
            <td>{worker.surname}</td>
            <td>{worker.position}</td>
        </tr>
    );
};

export default WorkerRow;