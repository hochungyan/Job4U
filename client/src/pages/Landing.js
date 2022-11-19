import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
const Landing=() =>{
  return (
  <main>
    <nav>
    <img src ={logo} alt ='JobsForU' className='logo' />
    </nav>
    <div className='container page'>
        <div className ="info">
            <h1> job
                <span> tracking</span> app
            </h1>
            <p>Get instant job notifications!
Apply direct from the job app!
Save jobs and searches!</p>
   <button className ='btn btn-hero'> Login/Register</button>
    </div>
    </div>
  </main>
  )
}

export default Landing