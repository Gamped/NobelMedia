import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import NormalText from "../../Elements/NormalText/NormalText";
import { Component } from "react";
import CurrentSongBox from "../../Elements/CurrentSongBox/CurrentSongBox"

class CurrentQueue extends Component {
    constructor(props) {
       super(props) 
       this.state = { 
          queues: [
             { title: "Sandstorm", artist: 'Darude', playTime: 120 },
             { title: "Last christmas", artist: 'Wham', playTime: 87 },
          ]
       }
    }

    // Construct the table with all rows from the this.state.songs array
    renderTableData() {
        return this.state.queues.map((queue) => {
            const { title, artist, playTime } = queue;
            let min = Math.floor(playTime / 60), sec = playTime % 60;

            return (
                <tr key={title}>
                    <td>{title}</td>
                    <td><i>{artist}</i></td>
                    <td>{min}m {sec}s</td>
                    <td><Button className="centerWidth" variant="outline-secondary">Vote skip</Button></td>
                </tr>
            )
        });
    }
  
     render(){
        return (
            <div>
                <div className="contentBox">
                    <Row>
                        <Col><h1 className="text-center">Current queue</h1></Col>
                    </Row>
                    <NormalText txt="The current queue, and vote to skip a song"/>
                    <Row>
                        <Col>
                            <div className="table-responsive-xl">
                                <table className="table table-striped table-dark">
                                    <thead>
                                        <tr>
                                            <th>Song title</th>
                                            <th>Artist</th>
                                            <th>Playtime</th>
                                            <th>Skip?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderTableData()}
                                    </tbody>
                                </table>
                                <div className="height75"/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <CurrentSongBox/>
            </div>
        )
    }
} 

export default CurrentQueue;