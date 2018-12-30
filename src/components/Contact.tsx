import * as React from "react";
import Grid from "@material-ui/core/Grid"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./../assets/scss/Contact.scss";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export interface ContactProps {
  name: string,
  email: string,
  message: any

}export default class Contact extends React.Component<ContactProps> {
  constructor(ContactProps) {
    super(ContactProps);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state as ContactProps;
    return (
      <Grid className="contact" container justify="center">
        <form name="contact" data-netlify="true" onSubmit={this.handleSubmit}>
          <Grid item xs={12} lg={12}>
            <TextField className="form-item" label="Name" name="Name" value={name} onChange={this.handleChange} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextField className="form-item" label="Email" type="email" name="email" value={email} onChange={this.handleChange} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextField className="form-item" label="message" multiline rows="5" name="message" value={message} onChange={this.handleChange} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <Button className="form-item" type="submit" variant="contained" color="primary">Send</Button>
          </Grid>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </Grid>







    );
  }
}
