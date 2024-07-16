import "./Header.css";
export default function Header() {
    return (
        <div class="header">
            <a href="#home"><img class="logo" src="images/QueensDevDenLogoTransparent.png" alt="Dev Den Logo" width="640px" height="400px" /></a>
            <ul class="header-links">
                <li><a class="h-link" href="#about">About us</a></li>
                <li><a class="h-link" href="#team">Our team</a></li>
                <li><a class="h-link" href="#contact">Contact us</a></li>
            </ul>
        </div>
    )
}