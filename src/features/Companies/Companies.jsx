import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Table} from '../../Components/Table';
import {Tablecaption} from '../../Components/Tablecaption';

import {selectCompany} from './companies-slice';
import classes from './Companies.module.scss';

export const Companies = () => {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.companies);
    const rows = [];

    companies.forEach(company => {
        rows.push(
            <tr className={company.selected ? `${classes.selected}`: ''} key={company.id}>
                <td>
                    <input type="checkbox" onChange={() => dispatch(selectCompany(company.id))}/>
                </td>
                <td>{company.title}</td>
                <td>{company.qty}</td>
                <td>{company.address}</td>
            </tr>
        );
    });

    return (
        <Table category="companies" companies={companies} rows={rows}>
            <Tablecaption title="Список компаний"/>
        </Table>

    );
};