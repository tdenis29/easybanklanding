import React from 'react'
import logo from '../assets/logo.svg'
import MobileModal from './Modal'

export default function Navbar () {
    const [show, setShow] = React.useState(false)

    function toggleNav (){
        setShow(prevShow => !prevShow)
        document.getElementById('hamburger').classList.toggle('is-active')
    }
    return (
        <header>

          <div className="logo-container">  
            <img className="logo" alt="logo" src={logo}/>
          </div>
     
            <MobileModal 
            show={show}
            />

          <div className='menu-container'>
            <button onClick={toggleNav} id="hamburger" className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>  
                <nav className="dt-nav-container">
                    <ul className="dt-nav-parent">
                        <li className='dt-nav-item'>Home</li>
                        <li className='dt-nav-item'>About</li>
                        <li className='dt-nav-item'>Contact</li>
                        <li className='dt-nav-item'>Blog</li>
                        <li className='dt-nav-item'>Careers</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}