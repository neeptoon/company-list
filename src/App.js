import classes from './App.module.scss';
import {Container} from './Components/Container';
import {Companies} from './features/Companies';
import {Workers} from './features/Workers';

const workers = [
    {name: 'Alex', surname: 'Bolt', position: 'QA', company: 'Sephora'},
    {name: 'John', surname: 'Palmer', position: 'back', company: 'HOTE'},
    {name: 'Tim', surname: 'Goose', position: 'coder', company: 'UMBRELLA'},
    {name: 'Jack', surname: 'Duck', position: 'front', company: 'Sephora'},
    {name: 'Robert', surname: 'Polson', position: 'CEO', company: 'UMBRELLA'},
];

const companies = [
    {title: 'Sephora', qty: 23, address: 'Beketova str., 23'},
    {title: 'HOTE', qty: 30, address: 'Sobinova str., 45'},
    {title: 'UMBRELLA', qty: 15, address: 'Lyadova pl., 11'},
];

function App() {
    return (
        <>
            <h1 className={classes.title}>Список компаний</h1>
            <Container>
                <Companies/>
                <Workers/>
            </Container>
        </>
    );
}

export default App;
