import React from "react";
import {Row, Col} from "react-bootstrap";
import "./QueueElement.css";

const QueueElement = () => {
    return (
        <Row>
            <Col>
                <div className="QueueElementBox color2 rounded">
                    <div className="QueueBox">
                        <Row>
                            <Col><h3 className="textNoWrap">Song title ddewdeedewedewd</h3></Col>
                        </Row>
                        <Row>
                            <Col><p className="textSimple textColor4 maxTextWidht">Artist</p></Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default QueueElement;