import { take, put, apply, call } from 'redux-saga/effects'

import { LOAD_JSON_PLACEHOLDER, setJSONPlaceholder } from '../actions'
export function* loadJSONPlaceholderSaga() {
  while (true) {
    yield take(LOAD_JSON_PLACEHOLDER)
    /* eslint-disable-next-line no-undef */
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos/1')
    if (Object.prototype.hasOwnProperty.call(response, 'error')) {
      // errorHandler(response.error)
      // tslint:disable:no-console TODO
      console.log(response.error, response)
    }
    if (response.status !== 200) {
      // return errorHandler(response)
      console.log('an error occurred. no error prop', response)
    }
    const data = yield apply(response, response.json, [])

    yield put(setJSONPlaceholder(data.title))
  }
}
