import React from 'react';
import { Container, Row } from "reactstrap";
import huggingImage from "../../images/two-ladies-hugging.jpg";

var welcomeBannerLeftStyle = {
    backgroundColor: "#286560",
    margin: "0",
    maxWidth: "100%",
    color: "#ffffff",
    display: "flex",
    textAlign: "center",
    alignItems: "center"
};

var welcomeBannerRightStyle = {
    height: "60vh",
    background: "url(" + huggingImage + ") no-repeat fixed",
    backgroundPosition: "right top 50%"
};

var welcomeBannerLeftTextStyle = {
    fontSize: "1rem",
    fontWeight: "300",
    lineHeight: "1.5"
};

export class WelcomeBanner extends React.Component {
    render() {
        return (
            <Row>
                <Container className="col-xl-6 order-xl-first order-last welcome-banner-left" style={welcomeBannerLeftStyle}>
                    <Row className="justify-content-center">
                        <div className="col-sm-10 col-md-8 col-xxl-6">
                            <h4>You made it!</h4>
                            <p style={welcomeBannerLeftTextStyle}>
                                Welcome to Glimmer in the dark, here at Glimmer we want to help people through life events, be that the good, 
                                the bad or the ugly! We ask questions to make you think about the situation and then offer personalised advice and tips to help you through.
                            </p>
                        </div>
                    </Row>
                </Container>
                <div className="col-xl-6 d-sm-inline d-none" style={welcomeBannerRightStyle}></div>
            </Row>
        );
    }
}