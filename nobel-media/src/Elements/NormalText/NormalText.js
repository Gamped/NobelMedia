import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";

// To simplify writing normal text this class can be used
class NormalText extends Component {
    constructor(props){
        super(props);
        this.state = {
            txt: null,
        };
    }

    render() {
        return (
            <Row>
                <Col>
                    <p className="centerWidth text-center textSimple textColor4 maxTextWidht">{this.props.txt}</p>
                </Col>
            </Row>
        )
    }
}

export default NormalText;