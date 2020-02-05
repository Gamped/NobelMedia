import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import NormalText from "../../Elements/NormalText/NormalText";
import "./Login.css";

// Function used to try to login
const tryLogin = function(){
    let loginSucess = false;

    // DEBUG
    console.log("User: " + document.getElementById("Username").value);
    console.log("Pass: " + document.getElementById("Password").value);

    /* Todo: Get verification */

    if(loginSucess){
        // Todo: Handle a session with login
    } else {
        document.getElementById("PasswordErrorMsg").innerHTML = "Wrong login credentials!";
    }
}

const Login = () => {
    return (
        <div>
            <div className="contentBox">
                <Row>
                    <Col><h1 className="text-center">Login</h1></Col>
                </Row>
                <NormalText txt="Login to be able to queue music and use the remote"/>
                <Row>
                    <Col>
                        <input
                            className="LoginForm form-control centerWidth"
                            placeholder="Username"
                            id="Username"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input
                            className="LoginForm form-control centerWidth"
                            placeholder="Password"
                            id="Password"
                            type="password"
                        />
                    </Col>
                </Row>
                <Row>
                    <Button className="centerWidth LoginButton" variant="outline-light" onClick={tryLogin}>Sign in</Button>
                </Row>
                <Row>
                    <Col><h3 id="PasswordErrorMsg" className="text-center textColorRed"> </h3></Col>
                </Row>
            </div>
        </div>
    );
}

export default Login;