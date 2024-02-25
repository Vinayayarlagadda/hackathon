import React from "react";
import "./Register.css";
 
function Register() {
    return (
        <>
            <h2></h2>
            <p className="title">Registration Form</p>
 
            <form className="App">
                <label>Username:<input type="text" /></label>
                <label>Password:<input type="password" /></label>
                <label>MobileNo:<input type="phone number" /></label>
                <input type={"submit"} className="sub" />
            </form>
        </>
    );
}
 
export default Register;