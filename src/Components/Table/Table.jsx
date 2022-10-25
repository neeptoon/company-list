import {Chooser} from '../Chooser';

import classes from './Table.module.scss';

const companiesTableHeads = ['Чекбокс', 'Название компании', 'Количество сотрудников', 'Адрес компании'];
const workersTableHeads = ['Чекбокс', 'Фамилия', 'Имя', 'Должность'];

export const Table = ({category, title}) => {
    let heads;
    category === 'companies' ? heads = companiesTableHeads : heads = workersTableHeads;

    return (
        <table>
            <caption>
                <h3>{title}</h3>
                <Chooser/>
            </caption>
            <thead>
                <tr>
                    {heads.map((head, index) => <th key={index}>{head}</th>)}
                </tr>
            </thead>
        </table>
    );
};