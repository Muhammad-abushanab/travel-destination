import './Header.css';
function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <a className="logo" href="#">Logo</a>
                <ul className="nav-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#tours">Tours</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;