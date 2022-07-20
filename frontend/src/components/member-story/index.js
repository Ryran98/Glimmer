import React from "react";
import { Container, Row } from "reactstrap";

var backgroundStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    borderLeft: "solid",
    borderRight: "solid",
    borderWidth: "10px",
    marginBottom: "5vh"
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

export class MemberStory extends React.Component {
    render() {
        return (
            <Container className="col-12 col-sm-8 col-md-4" style={backgroundStyle}>
                <Row style={rowStyle}>
                    <div className="col-sm-10 col-md-12 col-lg-8 col-xl-7">
                        <p style={contentStyle}>{this.props.content}</p>
                        <p style={memberNameStyle}><i>{this.props.memberName}</i></p>
                    </div>
                </Row>
            </Container>
        );
    }
}