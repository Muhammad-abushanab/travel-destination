import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <Link to='/'>Logo</Link>
            <ul className="nav-menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link to='#tours'>Tours</Link></li>
                <li><Link to='#'>Contact</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;