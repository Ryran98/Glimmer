import React from "react";
import { Container, Row } from "reactstrap";

var backgroundStyle = {
    backgroundColor: "#ffffff",
    color: "#286560",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    marginBottom: "10vh"
};

var rowStyle = {
    justifyContent: "center",
    textAlign: "center"
};

var contentStyle = {
    fontSize: "15px"
};

var memberNameStyle = {
    paddingTop: "2vh"
};

var imageStyle = {
    width: "100%",
    marginBottom: "5vh",
    display: "flex"
};

export class MemberStory extends React.Component {
    render() {
        return (
            <Container fluid className="col-12 col-md-8 col-lg-6 col-xl-4">
                <img src={this.props.image} style={imageStyle} />
                <Container style={backgroundStyle}>
                    <Row style={rowStyle}>
                        <div className="col-md-12 col-lg-8 col-xl-7">
                            <p style={contentStyle}>{this.props.content}</p>
                            <p style={memberNameStyle}><i>{this.props.memberName}</i></p>
                        </div>
                    </Row>
                </Container>
            </Container>
        );
    }
}