import React from "react";
import { Button, Container, Form, Input } from 'reactstrap';

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

export class SubscribeForm extends React.Component {
    render() {
        return (
            <Container fluid style={footerStyle}>
                <div style={subscribeFormStyle}>
                    <Form className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3">
                        <Container fluid className="justify-content-center">
                            <h3>Subscribe Form</h3>

                            <Input type="email" placeholder="Email address" style={subscribeEmailInputStyle} />

                            <Button className="col-12" color="dark" type="submit">Submit</Button>
                        </Container>
                    </Form>
                </div>
            </Container>
        );
    }
}