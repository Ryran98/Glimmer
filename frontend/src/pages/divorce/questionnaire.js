import React from "react";
import { Button, Container, Row } from "reactstrap";
import questionnaire from "../../images/questionnaire.jpg";

var containerStyle = {
    marginBottom: "10vh"
};

var backgroundStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    justifyContent: "center",
    alignItems: "center"
};

var titleStyle = {
    fontSize: "40px",
    fontWeight: "300",
    textAlign: "center"
};

var contentStyle = {
    fontSize: "17px",
    textAlign: "center"
};

var buttonStyle = {
    backgroundColor: "red"
};

var questionnaireImageStyle = {
    minHeight: "50vh",
    background: "url(" + questionnaire + ") no-repeat center",
    backgroundPosition: "left"
};

export class DivorceQuestionnairePage extends React.Component {
    render() {
        return (
            <Container fluid style={containerStyle}>
                <Row style={backgroundStyle}>
                    <div className="col-6">
                        <h2 style={titleStyle}>Questionnaire</h2>
                        <Row className="justify-content-center">
                            <p className="col-6" style={contentStyle}>Complete our free questionnaire to get tailored advice, custom checklists and much more.</p>
                        </Row>
                        <Row className="justify-content-center">
                            <Button color="info" style={buttonStyle}>Take the Quiz</Button>
                        </Row>
                    </div>
                    <div className="col-6" style={questionnaireImageStyle}></div>
                </Row>
                <modal></modal>
            </Container>
        );
    }
}