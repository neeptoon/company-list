import {selectWorker} from '../../features/Workers/workers-slice';

import classes from './WorkerRow.module.scss';


export const WorkerRow = ({worker, handleChange}) => {
    return (
        <tr
            className={worker.selected ? classes.selected : ''}
        >
            <td>
                <input type="checkbox"
                    checked={worker.selected}
                    onChange={() => handleChange(worker.id, selectWorker)}
                />
            </td>
            <td>{worker.name}</td>
            <td>{worker.surname}</td>
            <td>{worker.position}</td>
        </tr>
    );
};