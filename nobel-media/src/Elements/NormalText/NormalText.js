import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";

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
                    <div>
                        <p className="centerWidth text-center textSimple textColor4 maxTextWidht">{this.props.txt}</p>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default NormalText;