import * as React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./../components/Home";
import Projects from "./../components/Projects";
import Contact from "./../components/Contact";
import "./../assets/scss/Main.scss";

const pattern = require("./../assets/img/pattern.svg");
const reactLogo = require("./../assets/img/react_logo.svg");

const background= {
    backgroundImage: "url('" + pattern + "')" 
}

export interface MainProps {
}export default class Main extends React.Component<MainProps> {

    render() {
        return (            
            <main style={background}>
                <img src={reactLogo} height="480"/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
          </main>
        );
    }
}
