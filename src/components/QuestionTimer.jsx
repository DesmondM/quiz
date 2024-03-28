import React, {useEffect, useState} from 'react'
export default function QuestionTimer({timeout, onTimeout}){
    const [remainingTime, setRemainingTime]= useState(timeout)
    
    useEffect(()=>{
        //After the 'timeout' has passed, call the 'onTimeout' function
        setTimeout(onTimeout, timeout)
    },[onTimeout, timeout])

    useEffect(()=>{
        setInterval(()=>{
            setRemainingTime((prevTime)=>prevTime-100)
        }, 100)
    }, [])
    return <progress id="question-time" max={timeout} value={remainingTime}/>
}
