import {selectWorker, updateWorker} from '../../features/Workers/workers-slice';

import classes from './WorkerRow.module.scss';


export const WorkerRow = ({worker, chooseWorker}) => {
    return (
        <tr
            className={worker.selected ? classes.selected : ''}
        >
            <td>
                <input type="checkbox"
                    checked={worker.selected}
                    onChange={() => chooseWorker(worker.id, selectWorker)}
                />
            </td>
            <td>{worker.name}</td>
            <td>{worker.surname}</td>
            <td>{worker.position}</td>
        </tr>
    );
};