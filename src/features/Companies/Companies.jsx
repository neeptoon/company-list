import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Table} from '../../Components/Table';
import {Tablecaption} from '../../Components/Tablecaption';
import {Chooser} from '../../Components/Chooser';
import {useSelect} from '../../hooks/useSelect';
import {CompanyRow} from '../../Components/CompanyRow';

import {selectedAllCompanies, selectAllCompanies, selectCompanies} from './companies-slice';

export const Companies = () => {
    const dispatch = useDispatch();
    const companies = useSelector(selectCompanies);
    const isSelectAllCompanies = useSelector(selectedAllCompanies);
    const chooseCompany = useSelect();
    const rows = [];

    companies.forEach(company => {
        rows.push(
            <CompanyRow
                key={company.id}
                company={company}
                chooseCompany={chooseCompany}/>
        );
    });

    const handleChooserChange = () => {
        dispatch(selectAllCompanies(isSelectAllCompanies));
    };

    return (
        <Table category="companies" rows={rows}>
            <Tablecaption title="Список компаний">
                <Chooser value={isSelectAllCompanies} handleChooserChange={handleChooserChange}/>
            </Tablecaption>
        </Table>

    );
};