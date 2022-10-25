import React from 'react';

import classes from './CompanyRow.module.scss';

const CompanyRow = ({company, handleChange}) => {
    return (
        <tr
            className={company.selected ? classes.selected : ''}
        >
            <td>
                <input
                    type="checkbox"
                    checked={company.selected}
                    onChange={() => handleChange(company.id)}
                />
            </td>
            <td>{company.title}</td>
            <td>{company.qty}</td>
            <td>{company.address}</td>
        </tr>
    );
};

export default CompanyRow;