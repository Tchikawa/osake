import { call, put, takeEvery, all} from 'redux-saga/effects';
import { getOsakeList } from '../services'
import { GET_OSAKE_LIST, CHANGE_OSAKE_LIST } from '../utils/actionTypes';

function* fetchOsakeList() {
  const osakeList = yield call(getOsakeList) || [];
  yield put({ type: CHANGE_OSAKE_LIST, osakeList });
}

export default function* rootSaga() {
  yield all([
    takeEvery(GET_OSAKE_LIST, fetchOsakeList)
  ])
}
