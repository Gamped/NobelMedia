import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import NormalText from "../../Elements/NormalText/NormalText";
import "./Remote.css";

const About = () => {
    return (
        <div>
            <div className="contentBox">
                <Row>
                    <Col><h1 className="text-center">Remote</h1></Col>
                </Row>
                <NormalText txt="Here you can switch between chromecast/HDMI and power on/off the projector."/>
                <Row className="centerWidth">
                    <Button className="RemoteButton" variant="outline-light">Projector ON</Button>
                </Row> 
                <Row className="centerWidth">
                    <Button className="RemoteButton" variant="outline-light">Projector OFF</Button>
                </Row> 
                <Row className="centerWidth">
                    <Button className="RemoteButton" variant="outline-light">Chromecast</Button>
                </Row> 
                <Row className="centerWidth">
                    <Button className="RemoteButton" variant="outline-light">HDMI</Button>
                </Row> 
            </div>
        </div>
    );
}

export default About;