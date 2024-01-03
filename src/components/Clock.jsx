import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [date , SetDate] = useState(new Date())
   
   useEffect(() =>{

    const Interval = setInterval(()=>tick(),1000)
        return () => {clearInterval(Interval)}
    }, [])

    const tick = () =>{
        SetDate(new Date())
    }

  return (

   <h3 style={{color: '#fff'}}>{date.toLocaleTimeString()}</h3>
  )
}

export default Clock
