import React from "react";
import { Container, Row } from "reactstrap";

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

export class Brands extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center" style={brandStyle}>
                    <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" style={facebookStyle}></i></a>
                    <a href="https://www.twitter.com/" target="_blank"><i className="fa-brands fa-twitter" style={twitterStyle}></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" style={linkedinStyle}></i></a>
                </Row>
            </Container>
        );
    }
}