import { put } from 'redux-saga/effects';
import axios from 'axios';

function* deleteFruit(action) {
    try {
        yield axios.delete(`/fruit/${action.payload}`); // 
        yield put({
            type: 'GET_FRUIT'
        });
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default deleteFruit;