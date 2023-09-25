
const translation=()=>{
    console.log("translation")
    const func=async ()=>{
    const selectedText = window.getSelection().toString();
    console.log(selectedText)
    const data =await fetch('https://sore-puce-toad-kilt.cyclic.cloud/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: selectedText }),
    })
        .then(response => response.json())
        .then(data => {
            const translation= data.translation;
            document.querySelector('.convertion').innerHTML=translation
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}
func();
}



window.onload=()=>{
    document.querySelector('.convertion').innerHTML="No Text Selected"
}







    
// document.addEventListener('click',()=>{
//     console.log("click kiya hai ")
//     // console.log(window.getSelection())
    
// })





function speakText() {
    const textInput = document.querySelector('.convertion').innerHTML
    if (textInput) {
        const voices = speechSynthesis.getVoices();
        console.log(voices)
      const utterance = new SpeechSynthesisUtterance(textInput);
    // Choose a voice from the available voices
    // utterance.voice=voices[12]
    // console.log(voices[12])
    utterance.lang = 'hi-IN'
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}
}




const convertion =()=>{
    
}



export  {convertion,speakText,translation}