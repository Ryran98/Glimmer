import React from "react";
import { Container, Row } from "reactstrap";
import headerImage from "../../images/header.png";

export class Header extends React.Component {
    render() {
        return (
            <Container fluid className="app-header">
                <Row className="justify-content-center">
                    <img src={headerImage} className="header-image" alt="header-image" />
                </Row>
            </Container>
        );
    }
}