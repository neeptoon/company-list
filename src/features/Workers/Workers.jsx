import {useSelector, useDispatch} from 'react-redux';

import {Table} from '../../Components/Table';
import {Tablecaption} from '../../Components/Tablecaption';
import {Chooser} from '../../Components/Chooser';

import {useSelect} from '../../hooks/useSelect';
import {WorkerRow} from '../../Components/WorkerRow';

import {selectCompanies, selectedAllCompanies} from '../Companies/companies-slice';

import {selectAllWorkers, selectWorkers, selectedAllWorkers} from './workers-slice';

export const Workers = () => {
    const dispatch = useDispatch();
    const workers = useSelector(selectWorkers);
    const isSelectAllWorkers = useSelector(selectedAllWorkers);
    const isSelectAllCompanies = useSelector(selectedAllCompanies);
    const companies = useSelector(selectCompanies);
    const chooseWorker = useSelect();
    const rows = [];

    const selectedCompany = companies.find(company => {
        if (isSelectAllCompanies) {
            return null;
        }
        return company.selected === true;
    });

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
        dispatch(selectAllWorkers(isSelectAllWorkers));
    };

    return (
        <>
            {selectedCompany &&
                <Table rows={rows}>
                    <Tablecaption title="Список работников">
                        {selectedCompany && <Chooser value={isSelectAllWorkers} handleChooserChange={handleChooserChange}/>}
                    </Tablecaption>
                </Table>
            }
        </>
    );
};