import {combineReducers} from 'redux'
import todo from './todoReducer'
import setVisible from './visibleReducer'

const todoApp = combineReducers(
    { 
        todo:todo, 
        visible:setVisible 
    }
)
export default todoApp;