import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Table} from '../../Components/Table';
import {Tablecaption} from '../../Components/Tablecaption';
import {Chooser} from '../../Components/Chooser';
import {useToggle} from '../../hooks/useToggle';

import CompanyRow from '../../Components/CompanyRow/CompanyRow';

import {selectCompany, selectAllCompanies} from './companies-slice';

export const Companies = () => {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.companies);
    const rows = [];
    const [isSelected, toggleSelected] = useToggle(false);

    companies.forEach(company => {
        const handleChange = (id) => {
            dispatch(selectCompany(id));
        };
        rows.push(
            <CompanyRow key={company.id} company={company} handleChange={handleChange}/>
        );
    });

    const toggleSelectAllCompanies = () => {
        toggleSelected();
        dispatch(selectAllCompanies(isSelected));
    };

    return (
        <Table category="companies" rows={rows}>
            <Tablecaption title="Список компаний">
                <Chooser value={isSelected} onChange={toggleSelectAllCompanies}/>
            </Tablecaption>
        </Table>

    );
};