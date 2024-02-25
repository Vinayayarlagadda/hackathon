import React from 'react';
import Button from 'react-bootstrap/Button'
//import './bg.css';
const YourComponent = () => {
    const myStyle = {
        backgroundImage:
            "url('https://img.freepik.com/premium-vector/man-donates-foods-poor-people_1453-417.jpg?w=900')",
        height: "100vh",
        marginTop: "1px",
        fontSize: "30px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
// Set text color to contrast with the background
  }

  return (
    <>
    
    <form className="Lah">
    <center>
        <div className="login-container">
            <div style={myStyle}>
        <p >EACH ONE,FEED ONE...!</p><br/>
        <label>Name:<input type="text"/></label><br/>
        <label htmlFor="dropdown">Choose:</label>
        <select id="dropdown" >
        <option value="">Home</option>
        <option value="option1">Party</option>
        <option value="option2">Marriage </option>
        <option value="option3">Any other</option>
        </select><br/>
        <br/>
    
        <textarea>Address:</textarea><br/>
        <Button variant="success">Donate Food</Button>{' '}
        <p> ADD ITEMS</p>
        <textarea>
        </textarea><br/>
        <input type="text" placeholder="Enter the minimum quantity "/><br/>
        <p>Pending for check</p>
        <button>Checked</button>&nbsp;
        <span><Button variant="info">Claim reward</Button>{' '}</span>
        </div>
        </div>
        </center>

    </form>
   
    
</>
);
}

export default YourComponent;