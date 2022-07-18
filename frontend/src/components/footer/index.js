import React from 'react';
import { Button, Container, Form, Input, Row } from 'reactstrap';

var footerStyle = {
    paddingBottom: "5vh"
};

var subscribeFormStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
};

var subscribeEmailInputStyle = {
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    marginBottom: "1rem"
};

var brandStyle = {
    paddingBottom: "3vh"
};

var facebookStyle = {
    fontSize: "15px",
    marginRight: "15px",
    color: "#000000"
};

var twitterStyle = {
    fontSize: "15px",
    color: "#000000"
};

var linkedinStyle = {
    fontSize: "15px",
    marginLeft: "15px",
    color: "#000000"
};

var copyrightStyle = {
    backgroundColor: "#f0f0f0",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export class Footer extends React.Component {
    render() {
        return (
            <div>
                <Container fluid style={footerStyle}>
                    <div style={subscribeFormStyle}>
                        <Form className="col-3">
                            <Container fluid className="justify-content-center">
                                <h3>Subscribe Form</h3>
                                
                                <Input type="email" placeholder="Email address" style={subscribeEmailInputStyle} />

                                <Button className="col-12" color="dark" type="submit">Submit</Button>
                            </Container>
                        </Form>
                    </div>
                </Container>
                <Container fluid>
                    <Row className="justify-content-center" style={brandStyle}>
                        <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" style={facebookStyle}></i></a>
                        <a href="https://www.twitter.com/" target="_blank"><i className="fa-brands fa-twitter" style={twitterStyle}></i></a>
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" style={linkedinStyle}></i></a>
                    </Row>
                </Container>
                <Container fluid style={copyrightStyle}>
                    <Row>
                        ©2022 Glimmer
                    </Row>
                </Container>
            </div>
        );
    }
}