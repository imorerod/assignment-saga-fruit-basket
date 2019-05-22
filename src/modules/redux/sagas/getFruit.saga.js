import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getFruit() {
    try {
        const fruitResponse = yield axios.get('/fruit');
        yield put({
            type: 'SET_BASKET',
            payload: fruitResponse.data
        })
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default getFruit;