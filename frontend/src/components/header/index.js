import React from "react";
import { Container, Row } from "reactstrap";
import logo from "../../images/logo.jpg";

var logoStyle = {
    maxHeight: "50px"
};

export class Header extends React.Component {
    render() {
        return (
            <Container fluid className="app-header">
                <Row className="justify-content-center">
                    <img src={logo} alt="logo" style={logoStyle} />
                </Row>
                <Row className="justify-content-center">
                    <h1>Glimmer in the dark</h1>
                </Row>
            </Container>
        );
    }
}