import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./../components/Home";
import Contact from "./../components/Contact";
import "./../assets/scss/Main.scss";

export interface MainProps {
}export default class Main extends React.Component<MainProps, undefined> {

    render() {
        return (
            <main className="main">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
          </main>
        );
    }
}
