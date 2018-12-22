import * as React from "react";
import "../assets/scss/Footer.scss";

export interface FooterProps {
    name: string
}
export default class Footer extends React.Component<FooterProps, undefined> {

    render() {
        return (
            <footer className="footer">
                <p>dev by {this.props.name}</p>
            </footer>
        );
    }
}
