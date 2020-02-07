import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import NormalText from "../../Elements/NormalText/NormalText";
import { Component } from "react";
import "./AddToQueue.css";

class AddToQueue extends Component {
    constructor(props) {
       super(props) 
       this.state = { 
          songs: [
            { title: "Sandstorm", artist: 'Darude', playTime: 120 },
            { title: "Last christmas", artist: 'Wham', playTime: 87 },
          ]
       }
    }

    // Construct the table with all rows from the this.state.songs array
    renderTableData() {
        return this.state.songs.map((song) => {
            const { title, artist, playTime } = song;
            let min = Math.floor(playTime / 60), sec = playTime % 60;

            return (
                <tr key={title}>
                    <td>{title}</td>
                    <td><i>{artist}</i></td>
                    <td>{min}m {sec}s</td>
                    <td><Button className="centerWidth" variant="outline-secondary">Add</Button></td>
                </tr>
            )
        });
    }
  
     render(){
        return (
            <div className="contentBox">
                <Row>
                    <Col><h1 className="text-center">Add to queue</h1></Col>
                </Row>
                <NormalText txt="Here you can add a song to the queue"/>
                <Row>
                    <Col>
                        <input
                            className="AddToQueueSearchField form-control centerWidth"
                            placeholder="Search for song on Spotify"
                            id="SearchField"
                            type="text"
                        />
                    </Col>
                </Row>
                <Row>
                    <Button className="centerWidth AddToQueueButton" variant="outline-light">Search</Button>
                </Row>
                <Row>
                    <Col>
                        <h3 className="text-center">Search results:</h3>
                        <div className="table-responsive-xl">
                            <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th>Song title</th>
                                        <th>Artist</th>
                                        <th>Playtime</th>
                                        <th>Add?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderTableData()}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
} 

export default AddToQueue;