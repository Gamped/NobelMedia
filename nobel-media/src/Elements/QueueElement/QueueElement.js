import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import "./QueueElement.css";

class QueueElement extends Component {
    constructor(props){
        super(props);
        this.state = {
            songTitle: null,
            artist: null,
        };
    }

    render() {
        return (
            <Row>
                <Col>
                    <div className="QueueElementBox color2 rounded">
                        <div className="QueueBox">
                            <Row>
                                <Col><h4 className="textNoWrap">{this.props.songTitle}</h4></Col>
                            </Row>
                            <Row>
                                <Col><p className="textNoWrap textSimple textColor4 maxTextWidht">{this.props.artist}</p></Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default QueueElement;