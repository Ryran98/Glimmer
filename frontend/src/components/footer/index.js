import React from 'react';
import { Button, Container, Form, Input, Row } from 'reactstrap';

var footerStyle = {
    paddingTop: "10vh",
    paddingBottom: "5vh"
};

var subscribeFormStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
                        <Form>
                            <Container fluid className="justify-content-center">
                                <h3>Subscribe Form</h3>
                                
                                <Input type="email" placeholder="Email address" />

                                <Button className="col-12" color="dark" type="submit">Submit</Button>
                                Thanks for submitting!
                            </Container>
                        </Form>
                    </div>
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