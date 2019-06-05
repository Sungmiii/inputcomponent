import React from 'react'


const inputStyle = {
    width: '200px',
    height: '25px',
    borderRadius: '3px',
    marginRight: '5px',
    padding: '5px',
    border: '1px solid #999'
}

const Input = (props) => {
    return (

        <input
            style={inputStyle}
            type="text"
            name={props.name}
            value={props.inputValue}
            onChange={props.onInputChange}
            placeholder={props.placeholder}
            onFocus={(evt) => evt.target.placeholder = ''}
            onBlur={(evt) => evt.target.placeholder = `${props.placeholder}`}
        />

    )
}


export default Input