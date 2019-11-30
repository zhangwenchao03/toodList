import {takeEvery, put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import {initListAction} from './actionCreator'
import axios from 'axios'
//generator 函数
function* todoSagas() {
  yield takeEvery(GET_INIT_LIST,getInitList)
}
function* getInitList() {
  try {
    // const res = yield axios.get("./");
    // const action = initListAction(res.data);
    // yield put(action);
  } catch (error) {
    
  }

}
export default todoSagas;