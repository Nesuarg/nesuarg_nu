import * as React from "react";
import "./../assets/scss/App.scss";
import Welcome from "./../components/Welcome";
import Footer from "./../components/Footer";
import Projects from "./../components/Projects";
import Quote from "./../components/Quote";
import Contact from "./../components/Contact";

require('typeface-anton')

export const appName = React.createContext("default value");

export interface AppProps {
}export default class App extends React.Component<AppProps> {

    render() {
        return (
            <main className="app">
                <Welcome/>
                <Projects/>
                <Quote/>
                <Contact name="" email="" message=""/>
                <Footer/>
            </main>
        );
    }
}