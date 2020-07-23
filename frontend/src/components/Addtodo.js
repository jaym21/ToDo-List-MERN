import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class Addtodo extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: ''
        }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
        
    updateInput(e){
    this.setState({userInput : e.target.value})
    }

    handleSubmit(e) {
        this.props.addTodo(this.state.userInput)
        this.setState({userInput : ''})
    }

    render() {
        return (
            <>
                <input type="text" placeholder="Add a Todo" onChange={this.updateInput}/>
                <button onClick={this.handleSubmit}>+</button>
            </>
        )
    }
}

export default connect(null, {addTodo})(Addtodo)