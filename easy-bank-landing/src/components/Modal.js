import React from 'react'

export default function MobileModal (props){
    
    if(props.show === false){
        return null
    }
    return (
        <>
        <div className="overlay" id="overlay">
        <div className="modal">
                <nav className="mb-nav-container">
                    <ul className="mb-nav-parent">
                        <li className='mb-nav-item'>Home</li>
                        <li className='mb-nav-item'>About</li>
                        <li className='mb-nav-item'>Contact</li>
                        <li className='mb-nav-item'>Blog</li>
                        <li className='mb-nav-item'>Careers</li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}