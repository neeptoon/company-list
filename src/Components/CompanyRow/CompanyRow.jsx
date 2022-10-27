import {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {selectCompany, updateCompany} from '../../features/Companies/companies-slice';
import {MyInput} from '../MyInput';

import {selectWorkers} from '../../features/Workers/workers-slice';

import classes from './CompanyRow.module.scss';

export const CompanyRow = ({company, chooseCompany}) => {
    const [field, setField] = useState({title: company.title, address: company.address});
    const dispatch = useDispatch();
    const workers = useSelector(selectWorkers);

    const getWorkersQty = (companyTitle) => {
        return workers.filter(worker => worker.company === companyTitle).length;
    };

    return (
        <tr className={company.selected ? classes.selected : ''}>
            <td>
                <input
                    type="checkbox"
                    checked={company.selected}
                    onChange={() => chooseCompany(company.id, selectCompany)}
                />
            </td>
            <td>
                <MyInput
                    value={field.title}
                    onChange={evt => {
                        setField({...field, title: evt.target.value});
                        dispatch(updateCompany({id: company.id, title: evt.target.value}));
                    }}
                />
            </td>
            <td>{getWorkersQty(company.title)}</td>
            <td>
                <MyInput
                    value={field.address}
                    onChange={evt => {
                        setField({...field, address: evt.target.value});
                        dispatch(updateCompany({id: company.id, address: evt.target.value}));
                    }}
                />
            </td>
        </tr>
    );
};