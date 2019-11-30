import {CHANGE_INPUT, ADD_LIST, DELETE_ITEM,INIT_LIST} from './actionTypes'
const defaultState= {
    inputValue: '123',
    list: ["1"]
}
export default (state = defaultState, action) => {
    // reducer 不能修改state 
    debugger
    if (action.type === CHANGE_INPUT) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    } else if (action.type === ADD_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState;
    } else if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState;
    }else if (action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState;
    }
    return state;
}