import { makeActionCreator } from '../utility/makeActionCreator'

export const LOAD_JSON_PLACEHOLDER = 'LOAD_JSON_PLACEHOLDER'
export const loadJSONPlaceholder = makeActionCreator(LOAD_JSON_PLACEHOLDER)

export const SET_JSON_PLACEHOLDER = 'SET_JSON_PLACEHOLDER'
export const setJSONPlaceholder = makeActionCreator(SET_JSON_PLACEHOLDER, 'value')
