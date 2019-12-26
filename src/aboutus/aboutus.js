import React from 'react'
import './aboutus.css'

function aboutus(){
    return (<div className='aboutus'>
        <div className="inner-style main-making">
        <img className="lead__logo" src="https://www.docplanner.com/img/sygnet.png" />
        <h1>Making the healthcare experience more human</h1>
        </div>
        <div className="inner-style making-text">
        <div className="division-inner">
            <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
        </div>
        <div className="division-inner"><p>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
        </div>
        </div>

    </div>)
}

export default aboutus