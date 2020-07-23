import React from 'react'
import {connect} from 'react-redux'
import {getTodos} from '../actions'
import Todo from './Todo'

class ListTodos extends React.Component{
    componentDidMount(){
        this.props.getTodos()
    }
    render() {
        const {todos} = this.props
        return(
           <ol>
               {
                   todos.map(todo => <Todo key={todo._id} todo={todo}/>)
               }
           </ol>
        )
    }
}

const mapStatetoProps = (state) => ({
    todos: state.todos
})

export default connect(mapStatetoProps, {getTodos})(ListTodos)