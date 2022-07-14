import React from "react";
import { Container } from "reactstrap";
import { WelcomeBanner } from "../components/banner/welcome";
import { ContactUsBanner } from "../components/banner/contact-us";

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid>
                <WelcomeBanner />
                <ContactUsBanner />
            </Container>
        );
    }
}