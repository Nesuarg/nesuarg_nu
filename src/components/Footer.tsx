import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Typography from "@material-ui/core/Typography"
import "../assets/scss/Footer.scss";

export interface FooterProps {
}
export default class Footer extends React.Component<FooterProps, undefined> {

    render() {
        return (
            <footer className="footer">
            <a className="footer__link" href="https://twitter.com/nesuarg">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                &nbsp;@nesuarg
            </a>
            <a className="footer__link" href="https://github.com/nesuarg">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                &nbsp;@nesuarg
            </a>  
            </footer>
        );
    }
}
