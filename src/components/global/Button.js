import React from 'react'


const buttonStyle = {
    width: '100px',
    height: '37px',
    backgroundColor: 'skyblue',
    color: '#fff',
    textTransform: 'uppercase',
    borderRadius: '3px',
    marginRight: '5px',
    padding: '5px',
    border: 'none'

}
const Button = (props) => {
    return (
        <button type="submit" style={buttonStyle}>{props.title}</button>
    )
}

export default Button