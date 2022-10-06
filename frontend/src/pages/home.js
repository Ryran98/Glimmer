import React from "react";
import { Container } from "reactstrap";
import { WelcomeBanner } from "../components/banner/welcome";
import { ContactUsBanner } from "../components/banner/contact-us";
import { SubscribeForm } from "../components/footer/subscribeForm";

var containerStyle = {
    marginBottom: "10vh"
};

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container fluid style={containerStyle}>
                    <WelcomeBanner />
                    {/* <ContactUsBanner /> */}
                </Container>
                <SubscribeForm />
            </div>
        );
    }
}