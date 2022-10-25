import {selectCompany} from '../../features/Companies/companies-slice';

import classes from './CompanyRow.module.scss';
export const CompanyRow = ({company, handleChange}) => {
    return (
        <tr
            className={company.selected ? classes.selected : ''}
        >
            <td>
                <input
                    type="checkbox"
                    checked={company.selected}
                    onChange={() => handleChange(company.id, selectCompany)}
                />
            </td>
            <td>{company.title}</td>
            <td>{company.qty}</td>
            <td>{company.address}</td>
        </tr>
    );
};