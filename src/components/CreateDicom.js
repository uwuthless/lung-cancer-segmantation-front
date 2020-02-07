import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

import {createDicom} from "../reduxStuff/action_creators";
class CreateDicom extends React.Component {
    state = {files:[]}
    textInput({input, label, meta}) {
        console.log(input)
        return (
            <div>
                <label>{label}</label>
                <input onChange={input.onChange} value={input.value}/>
                {meta.touched ? meta.error: ''}
            </div>
        )
    }

    adaptFileEventToValue = delegate => e => delegate(e.target.files)

    FileInput2 = ({
                           input: {
                               value: omitValue,
                               onChange,
                               onBlur,
                               ...inputProps
                           },
                           meta: omitMeta,
                           ...props
                       }) =>
        <input
            onChange={this.adaptFileEventToValue(onChange)}
            onBlur={this.adaptFileEventToValue(onBlur)}
            type="file"
            {...inputProps}
            {...props}
            multiple
        />


    FileInput = ({input, label, meta}) => {
        return (
            <div >
                <label>{label}</label>

                <input
                    onChange={
                        ( e ) => {
                            input.onChange()
                            e.preventDefault();
                            // convert files to an array
                            const files = [ ...e.target.files ];
                            this.setState({files})
                            console.log('files have been changed. New files:')
                            console.log(files)
                        }
                    }
                    value={input.value}
                    type="file"
                    className={'field'}
                    accept='.dcm'
                    style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
                    multiple

                />
                 {this.state.files === undefined || this.state.files.length === 0 && meta.touched ? meta.error: ''}
            </div>
        );
    }
    onSubmit = (formValues) => {
        console.log(123)
        console.log(formValues)
        console.log('submitted')
        this.props.createDicom(formValues)
    }

    render() {


        return (
            <div className="ui container">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                    <Field name="title" component={this.textInput} label='Описание DICOMа'/>
                    <Field name="files" component={this.FileInput2} label='Выберите файлы'/>
                    <button className="ui bottom attached button fluid primary"> Submit this shit </button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    console.log(formValues)
    if (!formValues.title) {
        errors.title = 'Enter title for this DICOM!'
    }

    if(!formValues.files){
        console.log('FILES:')
        console.log(formValues.files)
        errors.files = 'Select files of this DICOM!'
    }
    return errors
}

const CreatedCreateDicom = connect(null, {createDicom})(CreateDicom)

export default reduxForm({
    form: 'createDicom',
    validate
})(CreatedCreateDicom);
