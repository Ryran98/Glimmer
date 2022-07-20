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
                <div className="resource-text col-sm-10 col-md-6 col-xl-3 order-xl-first order-last text-center text-xl-left">
                    <h3>{this.props.title}</h3>
                    <p className="" style={resourceText}>{this.props.description}</p>
                </div>
                <div className="resource-image col-xl-3 d-sm-flex d-none">
                    <img src={this.props.image} />
                </div>
            </Row>
        );
    }
}