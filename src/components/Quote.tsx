import * as React from "react";
import "./../assets/scss/Quote.scss";
import { Container, Button } from 'reactstrap';

export interface QuoteProps {
}export default class Quote extends React.Component<QuoteProps> {


    render() {
        return (
            <section className="row quote">
                <Container className="quote__container">
                    <div className="align-self-center">
                        <h2>Damn cool section in the markup process. Now i have no clue what to type.</h2>
                    </div>
                </Container>
            </section>
        );
    }
}
