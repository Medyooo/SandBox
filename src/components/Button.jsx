import { useState } from "react"


function Button (){
    const [click , setClick] = useState(0)

    const handleClick =() =>{
      
       setClick(click + 1)
    }
  return (
    <div>
    <p style={{color: '#fff'}} >Clicked {click} times</p>
    <button onClick={handleClick}>
      Click me !
    </button>

    <button onClick={()=>setClick(0)}>
      Reset
    </button>

      </div>
  )
}

export default Button
