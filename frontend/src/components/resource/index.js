import React from "react";
import { Row } from "reactstrap";

var resourceContentStyle = {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "7vh"
};

var resourceText = {
    fontSize: "17px",
    fontWeight: "300",
    paddingTop: "2vh"
};

export class Resource extends React.Component {
    render() {
        return (
            <Row style={resourceContentStyle}>
                <div className="col-3">
                    <h3>{this.props.title}</h3>
                    <p style={resourceText}>{this.props.description}</p>
                </div>
                <div className="col-3">
                    <img src={this.props.image} />
                </div>
            </Row>
        );
    }
}