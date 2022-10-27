import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {selectWorker, updateWorker} from '../../features/Workers/workers-slice';
import {MyInput} from '../MyInput';

import classes from './WorkerRow.module.scss';



export const WorkerRow = ({worker, chooseWorker}) => {
    const dispatch = useDispatch();
    const [field, setField] = useState({
        name: worker.name,
        surname: worker.surname,
        position: worker.position
    });

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
            <td>
                <MyInput
                    value={field.name}
                    onChange={evt => {
                        setField({...field, name: evt.target.value});
                        dispatch(updateWorker({id: worker.id, name: evt.target.value}));
                    }}
                />
            </td>

            <td>
                <MyInput
                    value={field.surname}
                    onChange={evt => {
                        setField({...field, surname: evt.target.value});
                        dispatch(updateWorker({id: worker.id, surname: evt.target.value}));
                    }}
                />
            </td>
            <td>
                <MyInput
                    value={field.position}
                    onChange={evt => {
                        setField({...field, position: evt.target.value});
                        dispatch(updateWorker({id: worker.id, position: evt.target.value}));
                    }}
                />
            </td>
        </tr>
    );
};