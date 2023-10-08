import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './component/page'
import {convertion,speakText,translation} from '../package/app.js'
import Work from './work'
import Demo from './component/demo'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
    <Work/>
    <Page/>
    <Demo/>
    </div>
  )
}

export default App
