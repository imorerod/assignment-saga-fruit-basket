import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getElements() {
    try {
        const elementResponse = yield axios.get('/fruit');
        console.log(elementResponse);
        yield put({
            type: 'SET_BASKET',
            payload: elementResponse.data
        })
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default getElements;