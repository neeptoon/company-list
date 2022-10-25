import classes from './Table.module.scss';

const companiesTableHeads = ['Чекбокс', 'Название компании', 'Количество сотрудников', 'Адрес компании'];
const workersTableHeads = ['Чекбокс', 'Фамилия', 'Имя', 'Должность'];

export const Table = ({category, title, rows, children}) => {
    let heads;
    category === 'companies' ? heads = companiesTableHeads : heads = workersTableHeads;

    return (
        <table className={classes.table}>
            {children}
            <thead>
                <tr>
                    {heads.map((head, index) => <th key={index}>{head}</th>)}
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};