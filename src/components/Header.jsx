import React from 'react'
import logoHeader from '../assets/quiz-logo.png'

export default function Header ()  {
  return <header>
    <img src={logoHeader} alt='Header'/>
    <h1>React Quiz</h1>
    </header>
}
