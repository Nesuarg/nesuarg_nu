import * as React from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./../assets/scss/Home.scss";

export interface HomeProps {
}export default class Home extends React.Component<HomeProps> {

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
            <Grid className="home" container>
                <Grid container xs={12} justify="center" direction="column">
                    <Typography className="home__headline" variant="h1">Hello,</Typography>
                    <Typography className="home__subline" variant="h3" gutterBottom>I'm {this.state.owner.name}, this site contains my Github Projects, like this site, which can be forked</Typography>
                </Grid>
            </Grid>
        );
    }
}
