import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take, takeLatest, cancel } from 'redux-saga/effects';
import authApi from 'src/api/authApi';
import { authAction, LoginPayload } from './authSlice';

// function* handleLogout() {
//   yield delay(500);
//   console.log('handleLogout');
//   localStorage.removeItem('access_token');

//   // yield put(push('/login'));
// }

/**
 * @desc B1: thực thi action
 * B2 login gọi api
 * B2.1 Hiển thị thanh (loading)
 * B2' logout gọi api
 * B3 kiểm tra
 * Nếu thành công -> redirect admin
 * Nếu thát bại show message
 */
// function* watchLoginFlow() {
//   //loop
//   while (true) {
//     const isLoggedIn = localStorage.getItem('access_token');
//     if (!isLoggedIn) {
//       const action: PayloadAction<LoginPayload> = yield take(authAction.login.type); //take is blocking wait and run code below and excuse again when logout dispatch
//       yield fork(handleLogin, action.payload); //  non-blocking
//     }

//     yield take(authAction.logout.type); //wait and run code below
//     yield call(handleLogout); // call blocking
//   }
// }

// export function* authSaga() {
//   yield fork(watchLoginFlow);
// }

function* handleLoginSaga(action: PayloadAction<LoginPayload>) {
  try {
    // console.log('handleLogin', payload);
    const response: { data: any } = yield call(authApi.postLogin, action.payload);
    yield put(authAction.loginSuccess(response?.data?.data));
  } catch (error: any) {
    console.log(error);
    yield put(authAction.loginFailed(error.response?.data?.errMsg || 'Có lỗi xảy ra'));
  }
}
function* handleVerifyPinSaga(action: PayloadAction<{ pin: string; user: string }>) {
  try {
    // console.log('handleLogin', payload);
    const response: { errMsg: string; status: string } = yield call(
      authApi.postVerifyPin,
      action.payload.pin,
      action.payload.user
    );
    if (response.status === 'error') {
      yield put(authAction.verifyPinFailed(response.errMsg || 'Có lỗi xảy ra'));
    } else {
      yield put(authAction.verifyPinSuccess());
    }
  } catch (error: any) {
    console.log(error);
    yield put(authAction.verifyPinFailed(error.response?.data?.errMsg || 'Có lỗi xảy ra'));
  }
}

export default function* authSaga() {
  yield takeLatest(authAction.login.toString(), handleLoginSaga);
  yield takeLatest(authAction.verifyPin.toString(), handleVerifyPinSaga);
  // yield debounce(500, studentActions.setFilterWithDebounce.type, handleSearchDebounce);
}
