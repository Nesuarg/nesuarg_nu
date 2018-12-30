import * as React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import "./../assets/scss/Projects.scss";


export interface ProjectProps {
}export default class Header extends React.Component<ProjectProps> {

    state = {
        repos: []
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/nesuarg/repos`)
            .then(res => {
                const repos = res.data;
                this.setState({ repos });
            })
    }

    render() {
        return (
            <div className="Projects">
                <Grid container spacing={24} justify="center" wrap="wrap">
                    {this.state.repos.map(repo =>
                        <Grid item xs={12} md={6} lg={4}>
                            <Paper className="paper">
                                <a href={repo.html_url} target="blank">
                                    <Typography className="title" gutterBottom>
                                        {repo.name}
                                    </Typography>
                                    <Typography className="description" gutterBottom>
                                        {repo.description}
                                    </Typography>
                                    <Typography className="language" gutterBottom>
                                        <Avatar></Avatar>
                                        {repo.language}
                                    </Typography>
                                </a>
                            </Paper>
                        </Grid>
                    )}
                </Grid>
            </div>
        );
    }
}
