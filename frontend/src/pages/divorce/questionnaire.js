import React from "react";
import { Button, Container, Row, Progress } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from "reactstrap";
import { SubscribeForm } from "../../components/footer/subscribeForm";
import questionnaire from "../../images/questionnaire.jpg";

var containerStyle = {
    marginBottom: "5vh"
};

var backgroundStyle = {
    backgroundColor: "#286560",
    color: "#ffffff",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    justifyContent: "center",
    alignItems: "center"
};

var titleStyle = {
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

var progressBarStyle = {
    height: "5px"
};

var modalCloseButtonStyle = {
    fontSize: "40px",
    fontWeight: "200",
    paddingTop: "0",
    paddingBottom: "0"
}

var answerItemStyle = {
    listStyleType: "none"
};

export class DivorceQuestionnairePage extends React.Component {
    constructor(props) {
        super(props);

        this.questions = [
            {
                title: "Are you in danger?",
                answers: ["Yes", "No"]
            },
            {
                title: "Are you experiencing domestic abuse?",
                answers: ["Yes", "No"]
            },
            {
                title: "Which country are you currently residing in?",
                answers: ["Northern Ireland", "England", "Wales", "Scotland"]
            },
            {
                title: "Do you have somewhere to stay?",
                answers: ["Yes", "No"]
            },
            {
                title: "Are you amicable with your spouse in terms of child custody and financial settlement?",
                answers: ["Yes", "No"]
            },
            {
                title: "Do you have children with your spouse?",
                answers: ["Yes", "No"]
            },
            {
                title: "Are they under 18?",
                answers: ["Yes", "No"]
            },
            {
                title: "Do you have shared financial assets?",
                answers: ["Yes", "No"]
            },
            {
                title: "Do you have any shared financial burdens?",
                answers: ["Yes", "No"]
            },
            {
                title: "Do you have any pets?",
                answers: ["Yes", "No"]
            }
        ];

        this.state = {
            showModal: false,
            questionNumber: 1,
            progress: (1 / this.questions.length) * 100
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);

        this.closeButton = <Button className="close" onClick={this.handleCloseModal} style={modalCloseButtonStyle}>&times;</Button>
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
        this.setState({ questionNumber: 1 });
        this.setState({ progress: (1 / this.questions.length) * 100 });
    }

    nextQuestion() {
        if (this.state.questionNumber >= this.questions.length)
            this.handleCloseModal();
        else {
            this.setState({ progress: (this.state.questionNumber + 1) / this.questions.length * 100 });
            this.setState({ questionNumber: this.state.questionNumber + 1 });
        }
    }

    previousQuestion() {
        if (this.state.questionNumber < 2)
            this.handleCloseModal();
        else if (this.state.questionNumber > this.questions.length)
            this.handleCloseModal();
        else {
            this.setState({ progress: (this.state.questionNumber - 1) / this.questions.length * 100 });
            this.setState({ questionNumber: this.state.questionNumber - 1 });
        }

    }

    render() {
        return (
            <div>
                <Container fluid style={containerStyle}>
                    <Row style={backgroundStyle}>
                        <div className="col-lg-6">
                            <h2 style={titleStyle}>Questionnaire</h2>
                            <Row className="justify-content-center">
                                <p className="col-sm-6" style={contentStyle}>Complete our free questionnaire to get tailored advice</p>
                            </Row>
                            <Row className="justify-content-center">
                                <Button color="info" style={buttonStyle} onClick={this.handleOpenModal}>Take the Quiz</Button>
                            </Row>
                        </div>
                        <div className="col-6 d-lg-inline d-none" style={questionnaireImageStyle}></div>
                    </Row>
                    <Modal isOpen={this.state.showModal} fade backdrop="static" centered>
                        <Progress color="success" value={this.state.progress} style={progressBarStyle} />
                        <ModalHeader toggle={this.handleCloseModal} close={this.closeButton}>
                            {this.questions[this.state.questionNumber - 1]?.title}
                        </ModalHeader>
                        <ModalBody>
                            <Container>
                                {this.questions[this.state.questionNumber - 1]?.answers.map((answer, index) => {
                                    return (
                                        <li key={index} style={answerItemStyle}>
                                            <Input id={`${this.state.questionNumber}_${index}`} type="radio" name={this.state.questionNumber} />
                                            <Label>{answer}</Label>
                                        </li>
                                    );
                                })}
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.previousQuestion}>Back</Button>
                            <Button onClick={this.nextQuestion}>Next</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
                <SubscribeForm />
            </div>
        );
    }
}