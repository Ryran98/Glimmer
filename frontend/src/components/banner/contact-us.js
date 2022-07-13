import React from 'react';
import { Button, Container, Form, Input, Label, Row } from 'reactstrap';
import handsImage from "../../images/home-hands.jpg";

var contactUsBannerStyle = {
    padding: "10vh"
}

var contactUsBannerLeftStyle = {
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

var contactUsFormTitleStyle = {
    fontSize: "40px"
};

var contactUsFormInputStyle = {
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    marginBottom: "1rem",
    backgroundColor: "transparent"
};

var contactUsBannerRightStyle = {
    height: "600px",
    background: "url(" + handsImage + ") no-repeat center",
};

export class ContactUsBanner extends React.Component {
    render() {
        return (
            <Row style={contactUsBannerStyle}>
                <div className="col-6" style={contactUsBannerLeftStyle}>
                    <Form className="col-8" action="#">
                        <Container fluid>
                            <h3 style={contactUsFormTitleStyle}>Contact Us</h3>

                            <Label for="name-input">Name *</Label>
                            <Input id="name-input" type="text" required placeholder="Enter your name" style={contactUsFormInputStyle}></Input>

                            <Label for="email-input">Email *</Label>
                            <Input id="email-input" type="email" required placeholder="Enter your email" style={contactUsFormInputStyle}></Input>

                            <Label for="subject-input">Subject</Label>
                            <Input id="subject-input" type="text" placeholder="Type the subject" style={contactUsFormInputStyle}></Input>

                            <Label for="message-input">Message</Label>
                            <Input id="message-input" type="textarea" rows="3" placeholder="Type your message here..." style={contactUsFormInputStyle}></Input>

                            <Button className="col-12" color="dark" type="submit">Submit</Button>
                        </Container>
                    </Form>
                </div>
                <div id="contact-banner-right" className="col-6" style={contactUsBannerRightStyle}></div>
            </Row>
        );
    }
}