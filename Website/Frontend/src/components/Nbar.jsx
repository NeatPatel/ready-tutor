import styles from './navbar.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Nbar() {
    return (<>
        
        <Outlet />
    </>);
}

export { Nbar };