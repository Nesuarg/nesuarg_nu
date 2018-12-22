import * as React from "react";

export interface ContactProps {
}export default class Contact extends React.Component<ContactProps, undefined> {

    render() {
        return (
            <div className="contact">
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Email: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <div data-netlify-recaptcha="true"></div>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        );
    }
}
