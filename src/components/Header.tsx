import * as React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
import "../assets/scss/Header.scss";
export interface HeaderProps {
}export default class Header extends React.Component<HeaderProps, undefined> {

    render() {
        return (
            
            

            <AppBar position="static" color="default" className="header">
                <Toolbar>
                    <h2>
                        Nesuarg
                    </h2>
                    <ul className="navigation">
                        <li className="navigation__link"><Link to='/'>Home</Link></li>
                        <li className="navigation__link"><Link to='/projects'>Projects</Link></li>
                        <li className="navigation__link"><Link to='/contact'>Contact</Link></li>
                    </ul>
                </Toolbar>
            </AppBar>
        );
    }
}