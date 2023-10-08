import React from 'react';
import './demo.css'

export default function Demo(){
    return(
        <div className='alert'>
        <div onClick={()=>{
            document.querySelector(".alert").style.display="none"
        }} ><h1>Information</h1><img src={"https://cdn-icons-gif.flaticon.com/8362/8362307.gif"}></img></div>
        <div className='upper_component'>
  <p>This website demonstrates the functionality of our translation platform.</p>
  <ul>
    <li>To experience the translation feature:</li>
    <li>Simply highlight the text you want to translate.</li>
    <li>Located at the bottom left corner, there's a dedicated  <strong>"Translate"</strong> button waiting for your selection. <alert> and wait till translated it might take time </alert></li>
    <li>By clicking this button, you will instantly receive the translated version of the highlighted text.</li>
  </ul>
  <p>This demonstration provides a sneak peek into the final version of our program, which will have the capability to generate translations for the entire website with just one click.</p>
  <p>In addition to text translation, our platform also offers an integrated text-to-speech feature.</p>
  <ul>
  <li>After the translation of highlighted text </li>
  <li>To hear the text spoken aloud:</li>
    <li>Click on the microphone icon provided.</li>
  </ul>
  <p>This showcases the versatility and accessibility of our website translation tool, making multilingual content readily available and audible to all users.</p>
        </div>
        </div>
    )
}
