import React from "react";
import { Container, Input, Label, Row } from "reactstrap";

var questionStyle = {
    paddingTop: "5vh"
};

var titleStyle = {
    justifyContent: "center"
};

var answersStyle = {
    justifyContent: "center"
};

var answerItemStyle = {
    listStyleType: "none",
    paddingRight: "2vw"
};

export class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row style={questionStyle}>
                <Container fluid>
                    <Row style={titleStyle}>
                        <h5>{this.props.question.title}</h5>
                    </Row>
                    <Row style={answersStyle}>
                        {this.props.question.answers.map((answer, aIndex) => {
                            return (
                                <li key={`${this.props.index}-${aIndex}`} style={answerItemStyle}>
                                    <Input type="radio" name={this.props.index} />
                                    <Label>{answer}</Label>
                                </li>
                            );
                        })}
                    </Row>
                </Container>
            </Row>
        );
    }
}