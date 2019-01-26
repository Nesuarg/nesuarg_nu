import * as React from "react";
import axios from "axios";
import "./../assets/scss/Reset.scss";
import "./../assets/scss/App.scss";
import "./../components/Contact";
import Header from "./../components/Header";
import Main from "./../components/Main";
import Footer from "./../components/Footer";

require('typeface-anton')

export const appName = React.createContext("default value");

export interface AppProps {
}export default class App extends React.Component<AppProps> {

    render() {
        return (
            <div className="app">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}