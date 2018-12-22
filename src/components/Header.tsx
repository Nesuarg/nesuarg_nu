import * as React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Header.scss";
export interface HeaderProps {
}export default class Header extends React.Component<HeaderProps, undefined> {

    render() {
        return (
            <header className="header">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
