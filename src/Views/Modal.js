import React from 'react'
import Checbox from '../Components/Checbox'
import checkboxes from '../Store/Reducer'

export default function Modal() {
    return (
        <div>
            <h1>Hello World !</h1>
            <Checbox 
               checkboxes={checkboxes} 

            />
        </div>
    )
}
