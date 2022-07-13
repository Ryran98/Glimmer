import React from "react";
import { Container, Row } from "reactstrap";
import logo from "../../images/logo.png";

var appHeaderStyle = {
    paddingTop: "5vh",
    minHeight: "20vh"
};

var logoStyle = {
    maxHeight: "50px"
};

var titleStyle = {
    fontSize: "55px",
    fontWeight: "300"
};

export class Header extends React.Component {
    render() {
        return (
            <Container fluid style={appHeaderStyle}>
                <Row className="justify-content-center">
                    <img src={logo} alt="logo" style={logoStyle} />
                </Row>
                <Row className="justify-content-center">
                    <h1 style={titleStyle}>Glimmer in the dark</h1>
                </Row>
            </Container>
        );
    }
}