import React from "react";
import { Container, Row } from "reactstrap";
import candleImage from "../images/candles.jpg"

var containerStyle = {
    marginBottom: "10vh",
    position: "relative"
};

var backgroundStyle = {
    backgroundColor: "#286560"
};

var fixedFounderBoxStyle = {
    backgroundColor: "white",
    height: "50vh",
    width: "500px",
    padding: "3rem",
    position: "absolute",
    left: "20vw",
    zIndex: "1"
};

var founderTitleStyle = {
    fontWeight: "300"
};

var founderSubtitleStyle = {
    marginTop: "3rem",
    marginBottom: "3rem",
    fontSize: "17px"
};

var founderTextStyle = {
    fontSize: "17px"
}

var candleImageStyle = {
    height: "70vh",
    background: "url(" + candleImage + ") no-repeat left bottom",
    position: "absolute",
    right: "10vw"
};

var founderBoxStyle = {
    backgroundColor: "white",
    padding: "3rem"
};

export class AboutPage extends React.Component {
    render() {
        return (
            <Container fluid style={containerStyle}>
                <Row className="about-banner" style={backgroundStyle}>
                    <div className="d-md-inline d-none" style={fixedFounderBoxStyle}>
                        <h2 style={founderTitleStyle}>All About Glimmer in the dark</h2>
                        <p style={founderSubtitleStyle}><i>Our founder</i></p>
                        <p style={founderTextStyle}>
                            After living through a difficult divorce, Taz found 
                            that there was little in terms of support or advice for 
                            people apart from getting a solicitor. She wanted to 
                            found Glimmer to give people a place to go to get 
                            advice and support through the process.
                        </p>
                    </div>
                    <div className="col-6 d-md-inline d-none" style={candleImageStyle} />
                    <div className="d-inline d-md-none" style={founderBoxStyle}>
                    <h2 className="about-title" style={founderTitleStyle}>All About Glimmer in the dark</h2>
                        <p style={founderSubtitleStyle}><i>Our founder</i></p>
                        <p style={founderTextStyle}>
                            After living through a difficult divorce, Taz found 
                            that there was little in terms of support or advice for 
                            people apart from getting a solicitor. She wanted to 
                            found Glimmer to give people a place to go to get 
                            advice and support through the process.
                        </p>
                    </div>
                </Row>
            </Container>
        );
    }
}