import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Table} from '../../Components/Table';
import {Tablecaption} from '../../Components/Tablecaption';
import {Chooser} from '../../Components/Chooser';
import {useToggle} from '../../hooks/useToggle';

import {selectCompany, selectAllCompanies} from './companies-slice';
import classes from './Companies.module.scss';


export const Companies = () => {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.companies);
    const rows = [];
    const [allCompaniesSelected, setAllCompaniesSelected] = useToggle(false);

    companies.forEach(company => {
        rows.push(
            <tr className={company.selected ? `${classes.selected}`: ''} key={company.id}>
                <td>
                    <input type="checkbox" checked={company.selected} onChange={() => dispatch(selectCompany(company.id))}/>
                </td>
                <td>{company.title}</td>
                <td>{company.qty}</td>
                <td>{company.address}</td>
            </tr>
        );
    });

    const selectCompanies = () => {
        setAllCompaniesSelected(!allCompaniesSelected);
        dispatch(selectAllCompanies(allCompaniesSelected));
    };

    return (
        <Table category="companies" companies={companies} rows={rows}>
            <Tablecaption title="Список компаний">
                <Chooser value={allCompaniesSelected} onChange={selectCompanies}/>
            </Tablecaption>
        </Table>

    );
};