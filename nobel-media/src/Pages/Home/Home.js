import React from "react";
import {Row, Col} from "react-bootstrap";
import NormalText from "../../Elements/NormalText/NormalText";
import NobelLogo from "../../Media/NewLogo.svg";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="contentBox">
                <Row>
                    <Col><h1 className="text-center">Nobel Media</h1></Col>
                </Row>
                <NormalText txt="Welcome to the media page of the Nobel Dorm!"/>
                <img alt="" src={NobelLogo} className="center fillWidth HomeNobelLogo"/>
            </div>
        </div>
    );
}

export default Home;