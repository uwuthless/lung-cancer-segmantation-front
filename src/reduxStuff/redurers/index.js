import {combineReducers} from 'redux'
import _ from 'lodash'
import {ADD_DICOM, CREATE_DICOM, GET_ALL_DICOM, NEW_PREDICTIONS, NEW_PROPOSALS} from "../action_types";
import {reducer as formReducer} from "redux-form";

const dicomsInApp = (state = {}, action) => {
    switch (action.type) {

        case ADD_DICOM:
            console.log('adding dicom:')
            console.log(action)
            return {...state, [action.payload.data['_id']]: action.payload.data}
        case GET_ALL_DICOM:
            console.log('dicoms:')
            console.log(_.keyBy(action.payload.data, '_id'))
            return _.keyBy(action.payload.data, '_id')
        case CREATE_DICOM:
            console.log('creating dicom:')
            console.log(action)
            return {...state, [action.payload.data['_id']]: action.payload.data}
        case NEW_PREDICTIONS:
            console.log('replacing PREDICTIONS with new ones: ')
            console.log({...state, predictions: action.payload})
            return {...state, predictions: action.payload}
        default:
            return state
    }
}

export default combineReducers({dicomsInApp, form: formReducer})
