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

    workers
        .filter(worker => worker.company?.toUpperCase() === currentCompany?.toUpperCase())
        .forEach(worker => {
            rows.push(
                <WorkerRow
                    key={worker.id}
                    worker={worker}
                    handleChange={selectWorker}
                />
            );
        });



    const handleChooserChange = () => {
        dispatch(selectAllWorkers(isSelectAll));
    };

    return (
        <>
            {currentCompany &&
                <Table rows={rows}>
                    <Tablecaption title="Список работников">
                        {currentCompany && <Chooser value={isSelectAll} handleChooserChange={handleChooserChange}/>}
                    </Tablecaption>
                </Table>
            }
        </>
    );
};