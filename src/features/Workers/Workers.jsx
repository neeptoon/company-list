import {useSelector, useDispatch} from 'react-redux';

import {Table} from '../../Components/Table';
import {Tablecaption} from '../../Components/Tablecaption';
import {Chooser} from '../../Components/Chooser';

import {useSelect} from '../../hooks/useSelect';
import {WorkerRow} from '../../Components/WorkerRow';

import {selectedCompany} from '../Companies/companies-slice';

import {selectAll, selectAllWorkers, selectWorkers} from './workers-slice';

export const Workers = () => {
    const dispatch = useDispatch();
    const workers = useSelector(selectWorkers);
    const isSelectAll = useSelector(selectAll);
    const currentCompany = useSelector(selectedCompany);
    const selectWorker = useSelect();
    const rows = [];
    console.log(currentCompany);

    {currentCompany ?
        workers
            .filter(worker => worker.company === currentCompany)
            .forEach(worker => {
                rows.push(
                    <WorkerRow
                        key={worker.id}
                        worker={worker}
                        handleChange={selectWorker}
                    />
                );
            }) :
        rows.push(
            <tr key={Date.now()}>
                <td colSpan="4" >выбери одну компанию</td>
            </tr>
        );

    }

    const handleChooserChange = () => {
        dispatch(selectAllWorkers(isSelectAll));
    };

    return (
        <Table rows={rows}>
            <Tablecaption title="Список работников">
                {currentCompany && <Chooser value={isSelectAll} handleChooserChange={handleChooserChange}/>}
            </Tablecaption>
        </Table>

    );
};