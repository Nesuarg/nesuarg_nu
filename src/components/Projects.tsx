import * as React from "react";
import axios from "axios";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import "./../assets/scss/Projects.scss";

export interface ProjectProps {
}export default class Projects extends React.Component<ProjectProps> {

    state = {
        repos: []
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/nesuarg/repos`)
            .then(res => {
                const repos = res.data;
                let apiUrl = "";

                apiUrl = process.env.API_ENV + "/githubcolors"

                axios.get(apiUrl)
                    .then(res => {
                        const colors = res.data;

                        // add hex colors to repos array, when render() already have looped repos array.
                        repos.forEach(element => {
                            for (var key in colors) {
                                element.languageColor = colors[element.language];
                                break;
                            }
                        });
                        this.setState({ repos });
                    })
            })
    }

    render() {
        return (
            <section className="album py-5 project">
                <Container>
                    <div className="row">
                        {this.state.repos.map(repo =>
                            <Col xs="12" md="6" lg="4" className="project__card">
                                <Card style={{ border: '2px solid' + repo.languageColor }}>
                                    <CardBody>
                                        <div className="project__devider" style={{ color: repo.languageColor }}><h6>{repo.language}</h6></div>
                                            <h5>{repo.name}</h5>                                            
                                        <p className="card-text">{repo.description}</p>
                                        <a href={repo.html_url} className="card-link">Go to project</a>
                                    </CardBody>
                                </Card>
                            </Col>
                        )}
                        <div className="col-md-6 col-lg-4 mb-4 project__card"></div>
                    </div>
                </Container>
            </section>
        );
    }
}
