import {useSelector, useDispatch} from 'react-redux';

import {Table} from '../../Components/Table';
import {Tablecaption} from '../../Components/Tablecaption';
import {Chooser} from '../../Components/Chooser';
import {useToggle} from '../../hooks/useToggle';
import {selectCompanies} from '../Companies/companies-slice';
import {useSelect} from '../../hooks/useSelect';
import {WorkerRow} from '../../Components/WorkerRow';

import {selectAllWorkers} from './workers-slice';

export const Workers = () => {
    const dispatch = useDispatch();
    const workers = useSelector(state => state.workers);
    const rows = [];
    const [isSelected, toggleSelected] = useToggle(false);
    const selectedCompanies = useSelector(selectCompanies);
    const selectWorker = useSelect();

    console.log(selectedCompanies);

    workers.forEach(worker => {
        rows.push(
            <WorkerRow
                key={worker.id}
                worker={worker}
                handleChange={selectWorker}
            />
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