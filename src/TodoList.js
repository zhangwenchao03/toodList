import React, {Fragment} from 'react';
import TodoItem from './TodoItem';
import store from './store';
import {getChangeInputAction, getAddListAction, getDeleteItemAction, getInitListAction} from './store/actionCreator'
class TodolList extends React.Component  {
  constructor (props) {
    super(props);
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteSelf = this.deleteSelf.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render () {
    return (
      <Fragment >
        <label htmlFor="inputArea">输入</label>
        <input 
          id = "inputArea"
          value = {this.state.inputValue}
          onChange = {this.handleChange}
          ref = {(inpu) => {this.inref=inpu}}
        ></input>
        <button onClick={this.handleClick}>提交</button>
        <ul>
          {
            this.getItem()
          }
        </ul>
      </Fragment>
    );
  }
 handleStoreChange () {
   this.setState(store.getState());
 }
  handleChange (e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
     const value = this.inref.value
    // this.setState(() => ({
    //   inputValue: value
    // }
    // ))
    const action = getChangeInputAction(value)
    store.dispatch(action);
  }
  handleClick () {
    // this.setState({
    //   list: this.state.list.concat(this.state.inputValue),
    //   inputValue: ''
    // })
    // this.setState((pre) =>({
    //   list:[...pre.list, pre.inputValue],
    //   inputValue: ''
    // }))
    const action = getAddListAction()
    store.dispatch(action)
  }
  deleteSelf (index) {
    // this.setState(() => {
    //   const list = [...this.state.list]
    //   list.splice(index, 1)
    //   return {
    //     list
    //   }
    // })
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  getItem () {
   return this.state.list.map((item, index) =>(
      <TodoItem
        content = {item}
        index = {index}
        onDelete = {this.deleteSelf}
        key = {index}
      ></TodoItem>
    ))
  }
  componentDidMount () {
    // axios.get('/api/todolist')
    // .then(() => {alert('succ')})
    // .catch(() =>{alert("error")})
    //通过redux-thunk中间件，dispatch可以接受方法，实现在方法的action中调用异步方法获取数据
    // const action = getTodoListAction()
    // store.dispatch(action)

    //使用redux-saga中间件以后 dispatch的action可以被reducer获取也可以被saga获取
    //可以把异步请求放到一起处理
    const actionSaga = getInitListAction();
    store.dispatch(actionSaga);
  }
}
export default TodolList;
