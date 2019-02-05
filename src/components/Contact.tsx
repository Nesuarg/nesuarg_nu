import * as React from "react";
import "./../assets/scss/Contact.scss";
import { Row, Container, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

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
      // <Grid className="contact" container justify="center">
      //   <form name="contact" data-netlify="true" onSubmit={this.handleSubmit}>
      //     <Grid item xs={12} lg={12}>
      //       <TextField className="form-item" label="Name" name="name" value={name} onChange={this.handleChange} />
      //     </Grid>
      //     <Grid item xs={12} lg={12}>
      //       <TextField className="form-item" label="Email" type="email" name="email" value={email} onChange={this.handleChange} />
      //     </Grid>
      //     <Grid item xs={12} lg={12}>
      //       <TextField className="form-item" label="message" multiline rows="5" name="message" value={message} onChange={this.handleChange} />
      //     </Grid>
      //     <Grid item xs={12} lg={12}>
      //       <Button className="form-item" type="submit" variant="contained" color="primary">Send</Button>
      //     </Grid>
      //     <input type="hidden" name="form-name" value="contact" />
      //   </form>
      // </Grid>
      <Row>
        <Container className="contact py-5">
          <Col xs="12" md="6" lg="6">
          <h4>Contact me</h4>
          <h6>With any business inquiries, or just a chat</h6>
            <Form name="contact" data-netlify="true" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" value={name} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" value={email} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label>Message</Label>
                <Input type="textarea" name="message" value={message} onChange={this.handleChange}></Input>
              </FormGroup>
              <Button type="submit" className="btn btn-primary">wuush</Button>
              <input type="hidden" name="form-name" value="contact" />
            </Form>
          </Col>
        </Container>
      </Row>
    );
  }
}
