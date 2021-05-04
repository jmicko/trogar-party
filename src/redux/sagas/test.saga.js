import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

// get all feedback from db
function* testSaga(action) {
    try {
    //   const response = yield axios.get('/api/');
    //   console.log('back from server', response.data.rows);
  
      // now that the session has ended on the server
      // remove the client-side user object to let
      // the client-side code know the user is logged out
      yield put({ type: 'RETURN_TEST_3', payload: 'payload from saga file' });
    } catch (error) {
      console.log('Feedback get request failed', error);
    }
  }

function* loginSaga() {
    yield takeLatest('TEST_SAGA', testSaga);
  }
  
  export default loginSaga;
  