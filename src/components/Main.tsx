import * as React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./../components/Home";
import Projects from "./../components/Projects";
import Contact from "./../components/Contact";
import "./../assets/scss/Main.scss";

export interface MainProps {
}export default class Main extends React.Component<MainProps> {

    render() {
        return (
            <main className="main">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
          </main>
        );
    }
}
