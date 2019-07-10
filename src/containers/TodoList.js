import {connect} from 'react-redux'
import React, {Component} from 'react'
import Todo from '../components/Todo'
import {toggleTodo} from '../actions'

class TodoList extends Component{
    checkTodo=(index)=>{
        this.props.dispatch(toggleTodo(index))
    }
    
    render(){
        const todoTag = this.props.list.map(
            (todo, index) =><Todo key={index}{...todo} 
            onClick={
                ()=> this.checkTodo(index)
            } />
        )
        return (
            <ul>
                {todoTag}
            </ul>
        )
    }
}

const mapStateToPtops = (state)=>{
     return state.todo   
}

export default connect(mapStateToPtops)(TodoList)