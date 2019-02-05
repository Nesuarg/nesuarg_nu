import * as React from "react";
import axios from "axios";
import "./../assets/scss/Welcome.scss";
import { Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export interface WelcomeProps {
}export default class Welcome extends React.Component<WelcomeProps> {

    state = {
        owner: {
            name: '',
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/nesuarg`)
            .then(res => {
                const owner = res.data;
                this.setState({ owner });
            })
    }

    render() {
        return (
            <section className="row welcome">
                <Container className="welcome__container bg-near-white">
                    <div className="align-self-center">
                        <h1 className="welcome__headline">Hello.</h1>
                        <h2>I'm {this.state.owner.name}, I do frontend development</h2>
                        <a className="welcome__link" href="https://github.com/nesuarg">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            &nbsp;@nesuarg
                        </a>
                        <a className="welcome__link last-item" href="https://twitter.com/nesuarg">
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                            &nbsp;@nesuarg
                        </a>
                    </div>
                </Container>
            </section>
        );
    }
}
