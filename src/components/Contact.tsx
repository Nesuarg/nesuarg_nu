import * as React from "react";

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
        this.state = {name: "", email: "", message: ""};
    }

    handleSubmit = e => {
        fetch("/contact", {
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
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>
                Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" value={message} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        );
    }
}
