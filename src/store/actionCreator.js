import {CHANGE_INPUT, ADD_LIST, DELETE_ITEM,INIT_LIST,GET_INIT_LIST} from './actionTypes'
import Axios from 'axios'
export const getChangeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const getAddListAction = (value) => ({
    type: ADD_LIST,
})
export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
export const initListAction = (data) => ({
    type: INIT_LIST,
    data
})
export const getInitListAction = () => ({
    type: GET_INIT_LIST,
})
//使用redux的中间件redux-thunk以后，dispatch函数不仅可以接受对象，还可以
//接受函数(该返回函数第一个参数是dispatch,第二个参数是getState),dispatch时如果action是函数则会执行该函数，
//action如果是对象，则会把对象传给store
export const getTodoListAction = () => {
    return (dispatch) => {
        Axios.get().then((res) => {
            const data = res.data;
            debugger
            const action = initListAction(data);
            dispatch(action);
        })
    }
}