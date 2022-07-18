import React from 'react';
import { Container, Row } from "reactstrap";
import huggingImage from "../../images/two-ladies-hugging.jpg";

var welcomeBannerLeftStyle = {
    backgroundColor: "#000000",
    margin: "0",
    maxWidth: "100%",
    height: "60vh",
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

var welcomeBannerLeftTitleStyle = {
    fontSize: "65px"
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
                <Container className="col-xl-6" style={welcomeBannerLeftStyle}>
                    <Row className="justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-6">
                            <h2 style={welcomeBannerLeftTitleStyle}>You made it!</h2>
                            <p style={welcomeBannerLeftTextStyle}>
                                Welcome to Glimmer in the dark, here at Glimmer we want to help people through life events, be that the good, the bad or the ugly!
                                We ask questions so that we can personalize our advice and to do lists, which can help you through a stressful time
                            </p>
                        </div>
                    </Row>
                </Container>
                <div className="col-xl-6" style={welcomeBannerRightStyle}></div>
            </Row>
        );
    }
}