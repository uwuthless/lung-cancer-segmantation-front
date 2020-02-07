import React from "react";

class PredictionsForDicomListItem extends React.Component{

    render(){
        console.log(this.context)
        return (
        <div onClick={()=>{this.props.onPrediction(this.props.sliceN)}}
        style={{
            display: 'inline-block',
            backgroundColor: '#f77e8c',
            border: '0.5rem solid #8c343e',
            borderRadius: '0.5rem',
            margin: '0 1rem 1rem 0',
            padding: '0.25rem 0.25rem 0.25rem 0.25rem '
        }}>
            <p style={{
                display: 'inline-block',
                margin: '0 0.25rem 0 0'
            }}>Prediction on slice </p>

            <p style={{
                display: 'inline-block',
                color: '#2c467d',
                margin: '0 0 0.5rem 0'
            }}>
                #{this.props.sliceN}
            </p>
            <p>Click here to go to it</p>
        </div>
    )}
}



export default PredictionsForDicomListItem;

