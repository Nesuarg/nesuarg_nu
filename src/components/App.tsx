import * as React from "react";
import "./../assets/scss/Reset.scss";
import "./../assets/scss/App.scss";
import "./../components/Contact";
import Header from "./../components/Header";
import Main from "./../components/Main";
import Footer from "./../components/Footer";

export const appName = React.createContext("default value");

export interface AppProps {
}export default class App extends React.Component<AppProps, undefined> {

    render() {
        return (
            <div className="app">
                <Header/>
                <Main/>
                <Footer name="Jannik Fischer"/>
            </div>
        );
    }
}