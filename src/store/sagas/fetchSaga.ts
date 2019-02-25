import { call, select } from 'redux-saga/effects'

export function* fetchData (customConfig: any = {}) {

  try {
    const config = composeConfig(customConfig)
    if (authorizationNeeded(config)) {
      let token = yield select(sessionTokenSelector)
      config.headers.Authorization = 'Bearer ' + token
    }
    const response = yield call(fetch, config.url + config.path, config.params);

    if (response.hasOwnProperty('error') || response.status !== 200) {
      console.log('Handle errors', response)
    }

    return response
  }

  catch(e) {
    console.log('Handle catch error', e)
  }
}


function composeConfig (custom: any) {
  const urlDomain = ''
  const defaultConfig = {
    url: urlDomain,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: '',
  }

  let newConfig = {
    ...defaultConfig,
    ...custom,
    headers: {
      ...defaultConfig.headers,
    }
  }
  if (custom.headers) {
    newConfig.headers = {
      ...newConfig.headers,
      ...custom.headers
    }
  }
  return newConfig
}

function authorizationNeeded (config: any) {
  return !config.hasOwnProperty('headers')
    || (config.hasOwnProperty('headers') && !config.headers.hasOwnProperty('Authorization'))
}
