import React, { useState } from 'react'

export default function Myaccodion({ question, answer, id }) {
    const [show, setShow] = useState(true)
    return (
        <>
            <div className="main-heading">
                <p onClick={()=>setShow(!show)}><i className="fa-solid fa-plus"></i></p>
                <h3> {question} {id} </h3>
            </div>
            {
                show && <p className='answers'> {answer} </p>
            }
        </>
    )
}
