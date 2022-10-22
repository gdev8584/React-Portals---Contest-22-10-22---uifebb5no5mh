import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
 const [text, setText] = useState("")
 const [data, setData] = useState("")
 const handleInput = ()=>{
   setData(text)
   setText("")
 }
   


  return (
    
    <div id="main">
      <input id="input" value={text} onChange={(e)=>(setText(e.target.value))}></input><br/>
      <PortalButton buttonclick={handleInput} /><br/>
      <PortalTextArea value={data}/>
    </div>
  )
}


export default App;
