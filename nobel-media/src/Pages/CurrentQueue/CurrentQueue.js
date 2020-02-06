import React from "react";
import {Row, Col} from "react-bootstrap";
import NormalText from "../../Elements/NormalText/NormalText";
import QueueElement from "../../Elements/QueueElement/QueueElement";

const CurrentQueue = () => {
    return (
        <div>
            <div className="contentBox">
                <Row>
                    <Col><h1 className="text-center">Current queue</h1></Col>
                </Row>
                <NormalText txt="Here is a list of all the songs currently in the queue"/>
                <QueueElement/>
                <QueueElement/>
           </div>
        </div>
    );
}

export default CurrentQueue;