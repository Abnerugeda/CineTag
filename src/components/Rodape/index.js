import { Link } from 'react-router-dom';
import styles from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={styles.rodape}>
             <Link to={'/999'}>
                <h2>Desenvolvido por Abner Ugeda.</h2>
            </Link>
        </footer>
    )
}

export default Rodape;