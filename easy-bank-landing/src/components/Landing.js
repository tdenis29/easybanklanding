import React from 'react'
import hero from '../assets/image-mockups.png'
import dtbg from '../assets/bg-intro-desktop.svg'


export default function Landing () {
    return (
        <div className="landing-container">
          
            <div className='landing-img-container'>
                <img className='dt-landing-img' alt="" src={dtbg}></img>
                <img className="landing-img" alt="" src={hero}/>
            </div>
            <div className="landing-text-container">
                <h1 className="landing-headline">Next generation Digital Thinking</h1>
                <p className="landing-support">Take your financial life online. Your EasyBank account will be a one-stop shop for spending, saving, budgeting, investing and much more.</p>
                <div className='landing-button-container'>
                <button className="landing-button">Request Invite</button>    
            </div>
            </div>
        </div>
    )
}