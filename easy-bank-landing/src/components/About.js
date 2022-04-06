import React from 'react'

import online from '../assets/icon-online.svg'
import budget from '../assets/icon-budgeting.svg'
import onboard from '../assets/icon-onboarding.svg'
import api from '../assets/icon-api.svg'


export default function About () {
    return (
        <div className="about-container">
            <div className="about-header">
                <h2 className="about-title">Why choose Easybank?</h2>
                <p className="about-info">We leverage Openbanking to turn your account into a financial hub. Control your finances like never before.</p>
            </div>

            <div className='Icard-container'>         
                <div className="ICard">
                    <div className="ICard-top">
                        <img alt="" className="ICard-img" src={online}/>
                    </div>
                    <div className="ICard-body">
                        <h2 className="ICard-title">Online Banking</h2>
                        <p className="ICard-info">We leverage Open Banking to turn your bank account infto a financial hub.
                        Control your finances like never before!</p>
                    </div>
                </div>

                <div className="ICard">
                    <div className="ICard-top">
                        <img alt="" className="ICard-img" src={budget}/>
                    </div>
                    <div className="ICard-body">
                        <h2 className="ICard-title">Simple Budgeting</h2>
                        <p className="ICard-info">See exactly where your money goes each month. Recieve notifications when you're close to hitting your limits.</p>
                    </div>
                </div>

                <div className="ICard">
                    <div className="ICard-top">
                        <img alt="" className="ICard-img" src={onboard}/>
                    </div>
                    <div className="ICard-body">
                        <h2 className="ICard-title">Fast Onboarding</h2>
                        <p className="ICard-info">We don't do branches. Open your account and take control of your finances now!</p>
                    </div>
                </div>


                <div className="ICard">
                    <div className="ICard-top">
                        <img alt="" className="ICard-img" src={api}/>
                    </div>
                    <div className="ICard-body">
                        <h2 className="ICard-title">Open API</h2>
                        <p className="ICard-info">Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            
         </div>
        </div>
    )
}