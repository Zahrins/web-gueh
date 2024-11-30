import React, {Component} from 'react'
import Button from './Button';

class FormInput extends Component {

    state = {
        text : ""
        }
        change = e => {
        this.setState ({text : e.target.value })
        }
        submit = e => {
        e.preventDefault ()
        if(this.state.text !== "" ) {
        this.props.add(this.state.text)
        }
        this.setState ({
        text : ""
        })
        }

    render() {
        return (
            <form style={inputForm } onSubmit ={this.submit} className="form">
            <input
            type="text"
            onChange ={this.change}
            value={this.state.text}
            placeholder ="add task"
            className="input-form"
            />
            <Button text="add" action={this.submit} />
            </form>
        )
    }
}

export default FormInput;

const inputForm ={
    background : "#fff",
    color : "#fff",
    display: "flex",
    alignItems : "center"
    }