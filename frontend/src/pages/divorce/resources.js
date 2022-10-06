import React from "react";
import { Container } from "reactstrap";
import { SubscribeForm } from "../../components/footer/subscribeForm";
import { Heading } from "../../components/heading";
import { Resource } from "../../components/resource";
import cope from "../../images/cope.jpg";
import emotions from "../../images/emotions.jpg";

var backgroundStyle = {
    backgroundColor: "#286560",
    color: "#ffffff",
    marginBottom: "10vh",
    paddingBottom: "5vh"
};

export class DivorceResourcesPage extends React.Component {
    constructor(props) {
        super(props);

        this.defaultDescription = `This is your Resource description. It’s a great place to include relevant information
        about the article, so site visitors can understand how it can help them. Choose an image,
        photo gallery, or video to feature in your post for extra clarity and engagement.`;
    }

    render() {
        return (
            <div>
                <Container fluid style={backgroundStyle}>
                    <Heading title="Helpful Resources" subtitle="Articles, Documents &amp; Links" />
                    <Resource title="Learning to Cope" image={cope} description={this.defaultDescription} />
                    <Resource title="Understanding Your Emotions" image={emotions} description={this.defaultDescription} />
                </Container>
                <SubscribeForm />
            </div>
        );
    }
}