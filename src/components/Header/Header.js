import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from 'react-router-dom'
import "./Header.css";
export default function Header() {
    return (
        <div className="header">
            <Link to={'/'} onClick={() => window.scrollTo(0, 0)}><img id="logo" className="logo" src="images/QueensDevDenLogoTransparent.png" alt="Dev Den Logo" width="640px" height="400px" /></Link>
            <div className="links-and-menu">
                <ul className="header-links">
                    <li><a className="h-link" href="#about">About us</a></li>
                    <li><a className="h-link" href="#team">Our team</a></li>
                    <li><a className="h-link" href="#contact">Contact us</a></li>
                </ul>
                <HamburgerMenu />
            </div>
        </div>
    )
}