import { put } from 'redux-saga/effects';
import axios from 'axios';

function* postElements(action) {
    try {
        yield axios.post('/fruit', action.payload);
        yield put({
            type: 'FETCH_ELEMENTS'
        });
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default postElements;