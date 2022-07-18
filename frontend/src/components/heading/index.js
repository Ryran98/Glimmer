import React from "react";
import { Row } from "reactstrap";

var headingStyle = {
    justifyContent: "center",
    paddingTop: "10vh",
    paddingBottom: "10vh"
};

var headingTitleStyle = {
    fontSize: "40px",
    paddingTop: "2vh",
    paddingBottom: "2vh"
};

var headingSubtitleStyle = {
    textAlign: "center",
    fontSize: "15px"
};

export class Heading extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Row style={headingStyle}>
                <div>
                    <h2 style={headingTitleStyle}>{this.props.title}</h2>
                    <p style={headingSubtitleStyle}><i>{this.props.subtitle}</i></p>
                </div>
            </Row>
        );
    }
}