import React from 'react'
import './service.css'


function services({service}){
    return (
    <div className='inner-style service-section'>
        {service.map(el=>
            <div className={'division-inner '+el.classdiv}>
        <h2>{el.h2}</h2>
        <h1>{el.h1}</h1>
        <div className="style-select">
            {el.select&&<select>{el.select.map(el2=><option value={el2.value}>{el2.text}</option>)}</select>}
            <img className={el.classimg} src={el.src}></img>
        </div>
    </div>)
        
        }

    </div>)
}
export default services