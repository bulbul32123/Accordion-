import React, { useState } from 'react'
import { questions } from './Api';
import './Accodion.css';
import Myaccodion from './Myaccodion';
export default function Accodion() {
    const [data, setData] = useState(questions)
    return (
        <>
          <section className='main-div'>
          <h1>React Interview Questions</h1>
            {
                data.map((value) => {
                    return <Myaccodion key={value.id}  {...value}/>
                })
            }
          </section>
        </>
    )
}
