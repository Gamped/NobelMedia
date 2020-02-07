import React from "react";
import {Row, Col, ProgressBar} from "react-bootstrap";
import NormalText from "../../Elements/NormalText/NormalText";
import "./CurrentSongBox.css";

// The HTML of the login page
const CurrentSongBox = () => {
    return (
        <div className="CurrentSongBox color3">
            <div className="margin5">
                <h4 className="margin0 text-center textNoWrap">Sandstorm</h4>
                <p className="textNoWrap margin0 centerWidth text-center textSimple textColor4">Darude</p>
            </div>
            <ProgressBar className="margin0" animated striped variant="info" now={88}/>
        </div>
    );
}

export default CurrentSongBox;