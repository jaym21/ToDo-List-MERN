import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'



class Todo extends React.Component {
    constructor(props){
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete () {
        this.props.deleteTodo(this.props.todo._id)
    }

    render() {
        const {todo} = this.props
        return(
            <div className="todolist">
                <i className="fa fa-trash" aria-hidden="true"
                onClick={this.handleDelete}
                ></i> 
                <li>{todo.text}</li>
            </div>
            )      
        }
}

export default connect(null, {deleteTodo})(Todo )
