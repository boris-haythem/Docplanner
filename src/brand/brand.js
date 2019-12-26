import React from 'react'
import './brand.css'
function brand({brands}){
    return(<div className='inner-style brand-section'>
        <h1>We are a global company<br/>with local culture</h1>
        <ul className="brands-logos">
            {brands.map(el=><li>
                <a href={el.href} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="32" viewBox="0 0 200 32">
                        <path d={el.d} />
                    </svg>
                </a>
            </li>)}
        </ul>
    </div>)
}
export default brand