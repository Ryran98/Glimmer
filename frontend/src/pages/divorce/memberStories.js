import React from "react";
import { Container, Row } from "reactstrap";
import { Heading } from "../../components/heading";
import { MemberStory } from "../../components/member-story";

var backgroundStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    marginBottom: "10vh",
    paddingBottom: "5vh"
};

var rowStyle = {
    paddingLeft: "5vw",
    paddingRight: "5vw"
};

export class DivorceMemberStoriesPage extends React.Component {
    constructor(props) {
        super(props);

        this.defaultContent = "This is your Member Story. Give your members the stage to share their experiences with your Support Group.";
    }
    
    render() {
        return (
            <Container fluid style={backgroundStyle}>
                <Heading title="Member Stories" subtitle="Finding Support" />
                <Row style={rowStyle}>
                    <MemberStory content={this.defaultContent} memberName="Quinn Davis" />
                    <MemberStory content={this.defaultContent} memberName="Sandy Williams" />
                    <MemberStory content={this.defaultContent} memberName="Casey Johnson" />
                </Row>
            </Container>
        );
    }
}