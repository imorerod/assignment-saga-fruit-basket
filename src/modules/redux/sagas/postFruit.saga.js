import { put } from 'redux-saga/effects';
import axios from 'axios';

function* postFruit(action) {
    try {
        yield axios.post('/fruit', action.payload);
        yield put({
            type: 'GET_FRUIT'
        });
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default postFruit;