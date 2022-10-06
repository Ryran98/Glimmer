import React from 'react';
import { Container, Row } from 'reactstrap';
import { Brands } from './brands';
import { SubscribeForm } from './subscribeForm';

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
                <Brands />
                <Container fluid style={copyrightStyle}>
                    <Row>
                        ©2022 Glimmer
                    </Row>
                </Container>
            </div>
        );
    }
}