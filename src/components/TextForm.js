import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert(`Text converted to Uppercase`,"success")
    }
    const handleLowClick= ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert(`Text converted to Lowercase`,"success")
  }
    const handleClearClick= ()=>{
      let newText = '';
      setText(newText);
      props.showAlert(`Text cleared`,"success")
  }
  const handleCopyClick= ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert(`Text Copied to clipboard`,"success")
  }
  const handleExtrClick= ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert(`Extra spaces are removed`,"success")
    }

  const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");

  return (
    <div className={`text-${props.modeText} `}>
      <div className='container my-3' >
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className={`form-control text-${props.modeText} bg-${props.mode}`} value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
    </div>
    <button type="button" disabled = {text.length ===0} onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Convert To Uppercase</button>          
    <button type="button" disabled = {text.length ===0} onClick={handleLowClick} className="btn btn-primary mx-1 my-1">Convert To Lowercase</button>                 
    <button type="button" disabled = {text.length ===0} onClick={handleClearClick} className="btn btn-primary mx-1 my-1">Clear Text</button>                 
    <button type="button" disabled = {text.length ===0} onClick={handleCopyClick} className="btn btn-primary mx-1 my-1">Copy Text</button>                 
    <button type="button" disabled = {text.length ===0} onClick={handleExtrClick} className="btn btn-primary mx-1 my-1">Remove Extra Space</button>                 
    </div>
          
    <div className='container my-3'>
      <h1>Your Text Summary</h1>    
      <p>{text.split(/\s+/).filter((element) => element.length !==0).length} words and {text.length} characters &#10072; {0.08 * text.split(" ").filter((element) => element.length !==0).length} Minutes of read</p>           
      <h2>Preview</h2>
      <p>{text.length>0 ? text: "Enter text in the text box to preview it here"}</p>

    </div>


</div>
  )
}
