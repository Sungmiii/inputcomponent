import React from 'react'

import Input from './Input'
import Button from './Button'


const formBoxStyle = {
    display: 'flex'
}

class Form extends React.Component {
    state = {
        inputvalue: '',
        fvalue: '',
        lvalue: ''
    }
    onFormSubmit = (evt) => {
        console.log('submit')
        evt.preventDefault()
        this.setState({
            inputvalue: '',
            fvalue: '',
            lvalue: ''
        })
    }
    // onInputChange = (evt) => {
    //     console.log('input value:', evt.target.value)
    //     evt.preventDefault()
    //     let value = evt.target.value
    //     let name = evt.target.name
    //     console.log('target:', name)
    //     this.setState({
    //         inputvalue: value,
    //     })
    // }

    onInputFChange = (evt) => {
        evt.preventDefault()
        let value = evt.target.value
        let name = evt.target.name
        console.log('target:', name)
        this.setState(prevState => {
            return {
                ...prevState, fvalue: value,
            }
        }, () => console.log(this.state.fvalue))
    }
    onInputLChange = (evt) => {
        evt.preventDefault()
        let value = evt.target.value
        let name = evt.target.name
        console.log('target:', name)
        this.setState(prevState => {
            return {
                ...prevState, lvalue: value,
            }
        }, () => console.log(this.state.lvalue))
    }
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
                        onInputChange={this.onInputFChange}
                        placeholder="Enter your first name"
                    />
                    <Input
                        name="lName"
                        inputValue={this.state.lvalue}
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