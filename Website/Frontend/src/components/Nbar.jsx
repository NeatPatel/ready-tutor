import styles from './navbar.module.scss';
import { Link, Outlet } from 'react-router-dom';

function Nbar() {
    return (<>
        <h1>Navbar</h1>
        <Link to="/shop">Click me!</Link>

        <Outlet />
    </>);
}

export { Nbar };