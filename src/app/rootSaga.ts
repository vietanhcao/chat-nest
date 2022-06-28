// import citySaga from 'features/city/citySaga';
// import counterSaga from 'features/counter/counterSaga';
// import dashboardSaga from 'features/dashboard/dashboardSaga';
// import studentSaga from 'features/student/studentSaga';
import authSaga from 'src/features/auth/authSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  // console.log('rootSaga');
  yield all([
    // counterSaga(),
    authSaga(),
    // dashboardSaga(),
    // studentSaga(),
    // citySaga()
  ]);
}

// function* helloSaga() {
//   console.log('helloSaga');
// }

// function* printName() {
//   yield 'redux-saga';
// }

// function* hello() {
//   yield 'xin chao';
//   yield* printName(); //
//   yield 'ket thuc';
// }

// const interator = hello();

// console.log(interator.next());
// console.log(interator.next());
// console.log(interator.next());
