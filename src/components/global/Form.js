import React from 'react'

import Input from './Input'
import Button from './Button'


const formBoxStyle = {
    display: 'flex'
}

class Form extends React.Component {
    state = {
        fValue: '',
        lValue: ''
    }
    onFormSubmit = (evt) => {
        console.log('submit')
        evt.preventDefault()
        this.setState({
            fValue: '',
            lValue: ''
        })
    }
    onInputLChange = (evt) => {
        console.log('input value:', evt.target.value)
        evt.preventDefault()
        let value = evt.target.value
        this.setState({
            lValue: value,
        })
    }
    onInputFChange = (evt) => {
        console.log('input value:', evt.target.value)
        evt.preventDefault()
        let value = evt.target.value
        let name = evt.target.name
        console.log('target:', name)
        this.setState({
            fValue: value,
        })
    }
    render() {
        return (
            <div style={formBoxStyle}>
                <form
                    onSubmit={this.onFormSubmit}>
                    <Input
                        name="fName"
                        inputValue={this.state.fValue}
                        onInputChange={this.onInputFChange}
                        placeholder="Enter your first name"
                    />
                    <Input
                        name="lName"
                        inputValue={this.state.lValue}
                        onInputChange={this.onInputLChange}
                        placeholder="Enter your last name"
                    />
                    <Button title="submit" />
                </form>

            </div>
        )
    }
}

export default Form