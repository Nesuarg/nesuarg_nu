import * as React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import "./../assets/scss/Projects.scss";
import { colors } from "@material-ui/core";

export interface ProjectProps {
}export default class Header extends React.Component<ProjectProps> {

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
            <Grid className="project" container spacing={24} justify="center" wrap="wrap">
                {this.state.repos.map(repo =>
                    <Grid key={repo.id} item xs={12} md={6} lg={4}>
                        <Paper className="project__paper">
                            <a href={repo.html_url} target="blank">
                                <Typography variant="h3" className="title" gutterBottom>
                                    {repo.name}
                                </Typography>
                                <Typography className="description" gutterBottom>
                                    {repo.description}
                                </Typography>
                                <Avatar style={{ backgroundColor: repo.languageColor }}></Avatar>
                                <Typography className="language" gutterBottom>
                                    {repo.language}
                                </Typography>
                            </a>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        );
    }
}
