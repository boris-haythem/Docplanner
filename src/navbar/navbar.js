import React from 'react'
import './navbar.css'



function navbar({navitems}){
    return(<div className='nav'>
    <div className="inner-style logo">
            <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"></img>
                <ul className='but-doc'>
                    {navitems.map(el=><li>{el.text}{el.drop&&<ul className="dropdown-menu">
                        {el.drop.map(el=><li> {el} </li>)}
                    </ul>}</li>)}

                </ul>
    </div></div>)
}
export default navbar