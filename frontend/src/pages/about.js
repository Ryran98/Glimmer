import React from "react";
import { Container, Row } from "reactstrap";
import candleImage from "../images/candles.jpg"

var containerStyle = {
    marginBottom: "10vh",
    position: "relative"
};

var backgroundStyle = {
    backgroundColor: "#000000",
    minHeight: "85vh",
    paddingTop: "20vh",
    paddingLeft: "10vw",
    paddingRight: "10vw",
    paddingBottom: "10vh",
    alignItems: "end"
};

var founderBoxStyle = {
    backgroundColor: "white",
    height: "50vh",
    width: "500px",
    padding: "3rem",
    position: "absolute",
    left: "20vw",
    zIndex: "1"
};

var founderTitleStyle = {
    fontSize: "40px",
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

export class AboutPage extends React.Component {
    render() {
        return (
            <Container fluid style={containerStyle}>
                <Row style={backgroundStyle}>
                    <div style={founderBoxStyle}>
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
                    <div className="col-6" style={candleImageStyle} />
                </Row>
            </Container>
        );
    }
}