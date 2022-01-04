import React, {useState} from 'react'


export default function Textform(props) {

   
    const handleUpClick=()=>{
        console.log('Uppercase Click')
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick=()=>{
        console.log('Lowercase Click')
        let newText= text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleRevClick=()=>{
        console.log('Reverse Click')
        let newText= text.split("").reverse().join("");
        setText(newText)
        props.showAlert("Converted to Reversecase", "success")
    }
    const handleTitClick=()=>{
        console.log('TitleCase Click')
        let newText= text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        setText(newText)
        props.showAlert("Converted to Titlecase", "success")
    }
    const handleCapClick=()=>{
        console.log('Capitalize Click')
        let newText= text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText)
        props.showAlert("Converted to Capitalizecase", "success")
    }
    const handleClearClick=()=>{
        console.log('Clear Click')
        let newText= '';
        setText(newText)
        props.showAlert("Cleared", "success")
    }
    const handleCopy=()=>{
        console.log('Copy Click')
        // var text= document.getElementById('MyBox')
        // text.select()
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied To Clipboard", "success")
    }
    const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) ===0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
        props.showAlert("Converted to Alternatecase", "success")
    }
    const vowelCheck = ()=>{
        const count = text.match(/[aeiou]/gi).length;
        setText("You have "+count + " no of vowels");
        props.showAlert("Vowel Counted", "success")
    }
    const handleOnChange=(event)=>{
        console.log('Handle On Change')
        setText(event.target.value)
    }
   
    const handleExtraspace=()=>{
        let newText= text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed ExtraSpace", "success")
    }
    const [text , setText]= useState('')
    
    return (
        <>
        <div className="container" style={{color:props.mode=== 'light'?'#042743':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-4">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'light'?'white':'#042743', color:props.mode=== 'light'?'black':'white' }} id="MyBox" rows="8"></textarea>
  </div>
   <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
   <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
   <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Convert To CapitalizeCase</button>
   <button className="btn btn-primary mx-1 my-1" onClick={handleRevClick}>Convert To ReverseCase</button>
   <button className="btn btn-primary mx-1 my-1" onClick={handleTitClick}>Convert To TitleCase</button>
   <button className="btn btn-primary mx-1 my-1" onClick={onAlternatingCase}>Convert To AlternateCase</button>
   <button className="btn btn-primary mx-1 my-1" onClick={vowelCheck}>Convert To Vowels</button>
   <button className="btn btn-primary mx-1 my-1" onClick={handleExtraspace}>Remove Extra Space</button>
   <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
   <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
   </div>
   <div className="container" style={{color:props.mode=== 'light'?'#042743':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Character</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Mintes To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Somthing In The TextBox Above To Preview"}</p>
   </div>
   </>
    
    )
   
}
