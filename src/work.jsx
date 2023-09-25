import React from 'react';
import './work.css'
import {convertion,speakText,translation} from '../package/app.js'



export default function Work(){
    return (
        <div className='widget'>


       
        <button className='buttons'  onClick={()=>{
            speakText()
        }}> <img  className='mic' src={"https://cdn-icons-gif.flaticon.com/10690/10690147.gif"}></img></button>


        
        <button className='buttons' onClick={()=>{
              translation()
            }}><img  className='mic' src={"https://cdn-icons-gif.flaticon.com/11019/11019434.gif"}></img></button>


        <div className='convertion'>

        </div>
        </div>

    )
}