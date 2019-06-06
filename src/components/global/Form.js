import React from 'react'

import Input from './Input'
import Button from './Button'


const formBoxStyle = {
    display: 'flex'
}

class Form extends React.Component {
    state = {
        fvalue: '',
        lvalue: ''
    }
    onFormSubmit = (evt) => {
        console.log('submit')
        evt.preventDefault()
        this.setState({
            fvalue: '',
            lvalue: ''
        })
    }
    onInputChange = (evt) => {
        console.log('input value:', evt.target.value)
        evt.preventDefault()
        let value = evt.target.value
        let name = evt.target.name
        console.log('target:', name)
        if (evt.target.name === 'fName') {
            this.setState({
                fvalue: value,
            })
        } else if (evt.target.name === 'lName') {
            this.setState({
                lvalue: value,
            })
        }

    }

    // onInputFChange = (evt) => {
    //     evt.preventDefault()
    //     let value = evt.target.value
    //     let name = evt.target.name
    //     console.log('target:', name)
    //     this.setState({
    //         fvalue: value,
    //     })
    // }
    // onInputLChange = (evt) => {
    //     evt.preventDefault()
    //     let value = evt.target.value
    //     let name = evt.target.name
    //     console.log('target:', name)
    //     this.setState({
    //         lvalue: value,
    //     })
    // }
    render() {
        console.log('inputValue value ===== >', this.state.inputvalue)
        return (
            <div style={formBoxStyle}>
                <form
                    onSubmit={this.onFormSubmit}
                >
                    <Input
                        name="fName"
                        inputValue={this.state.fvalue}
                        onInputChange={this.onInputChange}
                        placeholder="Enter your first name"
                    />
                    <Input
                        name="lName"
                        inputValue={this.state.lvalue}
                        onInputChange={this.onInputChange}
                        placeholder="Enter your last name"
                    />
                    <Button title="submit" />
                </form>

            </div>
        )
    }
}

export default Form