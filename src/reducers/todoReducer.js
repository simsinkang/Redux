const todos = (state = {list:[]}, action ) => {
    switch(action.type){
        case 'ADD_TODO':
            const newList = [...state.list, {text: action.text, completed: false}]
            state = Object.assign({}, state, {list: newList})
                break
            case 'TOGGLE_TODO':
                const toggleList = 
                state.list.map((todo, index) => 
                index === action.index ? {...todo, completed: !todo.completed}: todo )
                state = Object.assign({}, state, {list: toggleList})
                break;
                default:
                    return state
    }
    return state
}
    
export default todos