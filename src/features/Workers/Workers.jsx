import {useSelector, useDispatch} from 'react-redux';

import {Table} from '../../Components/Table';
import {Tablecaption} from '../../Components/Tablecaption';
import {Chooser} from '../../Components/Chooser';

import {useSelect} from '../../hooks/useSelect';
import {WorkerRow} from '../../Components/WorkerRow';

import {selectCompanies} from '../Companies/companies-slice';

import {selectAll, selectAllWorkers, selectWorkers} from './workers-slice';

export const Workers = () => {
    const dispatch = useDispatch();
    const workers = useSelector(selectWorkers);
    const isSelectAll = useSelector(selectAll);
    const companies = useSelector(selectCompanies);
    const chooseWorker = useSelect();
    const rows = [];

    const selectedCompany = companies.find(company => company.selected === true);

    workers
        .filter(worker => worker.company?.toUpperCase() === selectedCompany?.title.toUpperCase())
        .forEach(worker => {
            rows.push(
                <WorkerRow
                    key={worker.id}
                    worker={worker}
                    chooseWorker={chooseWorker}
                />
            );
        });


    const handleChooserChange = () => {
        dispatch(selectAllWorkers(isSelectAll));
    };

    return (
        <>
            {selectedCompany &&
                <Table rows={rows}>
                    <Tablecaption title="Список работников">
                        {selectedCompany && <Chooser value={isSelectAll} handleChooserChange={handleChooserChange}/>}
                    </Tablecaption>
                </Table>
            }
        </>
    );
};