import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("uppercase was clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to upper case!","success");
    }

    const handleLowerClick = () => {
        setText(text.toLocaleLowerCase());
        props.showAlert("Converted to lower case!","success");
    }

    const handleClear = () => {
        setText('');
        props.showAlert("Cleared!","success");
    }

    const handleCopy = () => {
        // console.log("I am copy");
        let text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!","success");
    }

    const handleOnChange = (event) => {
        // console.log(event.target.value);
        setText(event.target.value);
        // setwordCount(event.target.value===""?0:event.target.value.split(' ').length);
        // setcharacterCount(event.target.value.length);
    }

    // console.log(useState(0));
    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState("");
    // const [wordCount, setwordCount] = useState(text.split(' ').length);
    // const [characterCount, setcharacterCount] = useState(text.length);

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">👇🏼</label>
                    <textarea style={props.mode==="dark"?{backgroundColor:"rgb(33, 37, 41)",color:"white"}:{}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to uppercase</button> 
                <button className="btn btn-primary my-2 mx-2" onClick={handleLowerClick}>Convert to lowercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{text.split(' ').length*0.008} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length===0?"Enter Text Above To Preview":text}</p>
            </div>
        </>
    )
}
