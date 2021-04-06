import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'


export default function Checbox(props) {
        const [checkedItems, setCheckedItems] = useState({}); //plain object as state
      
        const handleChange = (event) => {
            // updating an object instead of a Map
            setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
        }
      
        useEffect(() => {
          console.log("checkedItems: ", checkedItems);
        }, [checkedItems]);  

      
    return (
        <div>
          {
              props.checkboxes.map((item, index) => (
                <Form.Check key={index} type="checkbox" label={item.label} name={item.name} onChange={handleChange}/>
              ))
          }
        </div>
    )
}
