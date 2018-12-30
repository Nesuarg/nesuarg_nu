import * as React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Header.scss";
export interface HeaderProps {
}export default class Header extends React.Component<HeaderProps, undefined> {

    render() {
        return (
            <header className="header">
                <nav>
                    <ul className="navigation">
                        <li className="navigation__link"><Link to='/'>Home</Link></li>
                        <li className="navigation__link"><Link to='/projects'>Projects</Link></li>
                        <li className="navigation__link"><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
