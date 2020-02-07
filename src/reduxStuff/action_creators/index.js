import myBackend from '../../axios'
import axios from 'axios'

import {ADD_DICOM, CREATE_DICOM, GET_ALL_DICOM, NEW_PREDICTIONS, NEW_PROPOSALS} from "../action_types";
import {BACKEND_CREATE_DICOM} from "../../metadata/hardLinks";

import history from '../../history'
const getDicoms = ()=>{
    return async (dispatch, getState)=>{
        console.log('getting dicoms all')
        try{
            const dicoms = await myBackend.get('/dicom/all');
            dispatch({
                type: GET_ALL_DICOM,
                payload: dicoms
            });
        }catch (e) {
            console.log(e)
        }

    }


}

const getDicom = (id)=>{
    return async (dispatch, getState)=>{
        console.log('getting dicom with id '+ id )
        try{
            const dicom = await myBackend.get(`/dicom/${id}`);
            dispatch({
                type: ADD_DICOM,
                payload: dicom
            });
        }catch (e) {
            console.log(e)
        }

    }


}

const getPredictions = (id)=>{
    return async (dispatch, getState)=>{
        console.log('getting dicom with id '+ id )
        try{
            console.log('the id is '+id)
            const predictions_enclosed = await myBackend.get(`/dicom/see/proposals/${id}`);
            const predictions = predictions_enclosed.data.predictions
            console.log(predictions)
            dispatch({
                type: NEW_PREDICTIONS,
                payload: predictions
            });
        }catch (e) {
            console.log(e)
        }

    }


}

const createDicom =({title, files}) =>{
    return async (dispatch, getState)=>{

        let fd = new FormData();
        console.log(`title: ${title}`)
        fd.append('title', title);


        Array.from(files).forEach(file => {
            //console.log(file)
            fd.append(file.name, file)
        });
        console.log('form data:')

        console.log(fd)

        for (var pair of fd.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }

        try {
            const response = await axios.post(BACKEND_CREATE_DICOM, fd, {
                headers: {
                    'Content-Type': `multipart/form-data`
                }
            })

            console.log(response)

            dispatch({
                type: CREATE_DICOM,
                payload: response
            })

            // const response = await axios({
            //     method: 'post',
            //     url: BACKEND_CREATE_DICOM,
            //     data: fd,
            //     headers: {
            //         'content-type': `multipart/form-data;`
            //     }
            // });
           // console.log(response)
        }catch (e) {
            console.log(e)
        }
        history.push('/')
        // dispatch({
        //     type: CREATE_DICOM,
        //     payload:
        // })

        //const dicom = await myBackend.post(`/dicom/${id}`);
    }
}

export {getDicoms, getDicom, createDicom,getPredictions}
