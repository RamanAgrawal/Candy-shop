import classes from './Input.module.css'
import React from 'react'
const Input =React.forwardRef( (props,ref)=>{
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input required style={props.style} ref={ref} {...props.input} />
    </div>
})

export default Input