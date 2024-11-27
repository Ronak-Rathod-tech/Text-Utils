import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercash was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);

  }

  const handleLoClick = () => {
    console.log("Lower was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);

  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert To Uppercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert To Lowercase</button>
      </div>





      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minuts read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something to preview it here'}</p>

      </div>
    </>
  )
}
