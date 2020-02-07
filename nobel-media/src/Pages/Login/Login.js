import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import NormalText from "../../Elements/NormalText/NormalText";
import "./Login.css";

// Function used to try to login
const TryLogin = function(){
    let loginSucess = false,
        user = document.getElementById("Username").value,  
        pass = document.getElementById("Password").value;

    // DEBUG
    console.log("User: " + user);
    console.log("Pass: " + pass);

    // Do a check if numbers and letters only 
    // (NOTE: This is only for usability purpose, as actual check will be done in backend)
    if (verifyInput(user) || verifyInput(pass)){
        document.getElementById("PasswordErrorMsg").innerHTML = "Only letters and numbers are allowed!";
        return;
    }

    /* Todo: Get verification */
    if(loginSucess){
        // Todo: Handle a session with login
    } else {
        document.getElementById("PasswordErrorMsg").innerHTML = "Wrong login credentials!";
    }
}

// This is to verify that the input is only letters and numbers
// NOTE: This is just for usability feedback, as it will also be verified in the backend
const verifyInput = function(input){
    let regEx = new RegExp("[^a-zA-Z0-9]");
    return regEx.test(input);
}

// The HTML of the login page
const Login = () => {
    return (
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
                <Button className="centerWidth LoginButton" variant="outline-light" onClick={TryLogin}>Sign in</Button>
            </Row>
            <Row>
                <Col><h3 id="PasswordErrorMsg" className="text-center textColorRed"> </h3></Col>
            </Row>
        </div>
    );
}

export default Login;