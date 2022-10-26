import {useState} from 'react';

import {useDispatch} from 'react-redux';

import {selectCompany, updateCompany} from '../../features/Companies/companies-slice';

import {MyInput} from '../MyInput';

import classes from './CompanyRow.module.scss';

export const CompanyRow = ({company, handleChange}) => {
    const [field, setField] = useState({title: company.title, address: company.address});
    const dispatch = useDispatch();

    return (
        <tr className={company.selected ? classes.selected : ''}>
            <td>
                <input
                    type="checkbox"
                    checked={company.selected}
                    onChange={() => handleChange(company.id, selectCompany)}
                />
            </td>
            <td>
                <MyInput
                    value={field.title}
                    onChange={evt => {
                        setField({...field, title: evt.target.value});
                        dispatch(updateCompany({id: company.id, title: field.title}));
                    }}
                />
            </td>
            <td>{company.qty}</td>
            <td>
                <MyInput
                    value={field.address}
                    onChange={evt => {
                        setField({...field, address: evt.target.value});
                        dispatch(updateCompany({id: company.id, address: company.address}));
                    }}
                />
            </td>
        </tr>
    );
};