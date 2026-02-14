import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [undotext, setUndotext] = useState([])
  const [redotext, setRedotext] = useState([])
  const boxRef = useRef()

  useEffect(()=>{
    console.log("text:", text, "undo:", undotext, "redotext:" , redotext )
    boxRef.current.focus()
  },[])

  const handleChange=(value)=>{
      const newValue = value
      setText(newValue);
      setUndotext((prev)=> [...prev,text])
      setRedotext([])
  }
  

  const handleUndo=()=>{
          //set the last value of undotext and push that value to redo
          if (undotext.length === 0) return;
          const lastValue = undotext[undotext.length - 1]
          setText(lastValue )
          const undoAry = undotext.slice(0,-1)
          setUndotext(undoAry)
          setRedotext(prev=> [...prev, text])

  }

  const handleRedo=()=>{
          //when i do undo this the last text must be added to redotext 
          if (redotext.length === 0) return;
          const forwardValue = redotext[redotext.length -1]
          setText(forwardValue )
          const redoAry = redotext.slice(0,-1)
          setRedotext(redoAry) 
           setUndotext(prev=> [...prev, text])
    }

  return (
    <> 
      <div>
        <textarea name="" ref={boxRef} value={text} onChange={(e)=>{handleChange(e.target.value)}} id="">
        
      </textarea>
      <div className='divButton'>
       <button onClick={()=>{handleUndo()}} onK>undo</button>
       <button onClick={()=>{handleRedo()}}>redo</button>
      </div>
      
      </div>
    </>
  )
}

export default App
