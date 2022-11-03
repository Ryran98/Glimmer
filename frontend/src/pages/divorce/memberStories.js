import React from "react";
import { Container, Row } from "reactstrap";
import { Heading } from "../../components/heading";
import { MemberStory } from "../../components/member-story";
import story1 from "../../images/story1.jpg";
import story2 from "../../images/story2.jpg";
import story3 from "../../images/story3.jpg";

var backgroundStyle = {
    backgroundColor: "#286560",
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
            <div>
                <Container fluid style={backgroundStyle}>
                    <Heading title="Member Stories" subtitle="Finding Support" />
                    <Row style={rowStyle}>
                        <MemberStory image={story1} content={this.defaultContent} memberName="Quinn Davis" />
                        <MemberStory image={story2} content={this.defaultContent} memberName="Sandy Williams" />
                        <MemberStory image={story3} content={this.defaultContent} memberName="Casey Johnson" />
                    </Row>
                </Container>
            </div>
        );
    }
}