import classes from './App.module.scss';
import {Container} from './Components/Container';
import {Companies} from './features/Companies';
import {Workers} from './features/Workers';

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
