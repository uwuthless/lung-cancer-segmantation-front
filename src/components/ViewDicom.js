import React from "react";
import {connect} from "react-redux";
import {getDicom} from "../reduxStuff/action_creators";
import Loading from "./Loading";
import ProposalsForDicomList from "./PredictionsForDicomList";

import '../styles/range_input.css'
import {BACKEND_IMAGE} from "../metadata/hardLinks";

const Context = React.createContext('');
class ViewDicom extends React.Component {

    onPredictionPick = (sliceN)=>{
        this.setState({rangeValue:sliceN})
    }





    state = {
        rangeValue:1
    }

    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getDicom(id)
    }

    conditionalRendering() {
        console.log(this.props.dicom)
        if (this.props.dicom === undefined) {
            return <Loading fullscreen/>
        }
        return (
            <div className="ui container">
                <div className="ui header">
                    {this.props.dicom.title}
                </div>
                <ProposalsForDicomList id = {this.props.match.params.id} onPrediction = {this.onPredictionPick} />

                <div>
                    <form>
                        <input type="range" name="points"
                               min="0"
                               max={this.props.dicom.imgAmount - 1}
                                // todo: change this
                               //max={256}
                               value={this.state.rangeValue}
                               onChange={(e)=>{
                                   console.log(e.target.value)
                                this.setState({rangeValue:e.target.value})
                               }
                               }/>
                    </form>
                    <img
                        src={`${BACKEND_IMAGE}/${this.props.dicom['_id']}/${this.state.rangeValue}`}
                        style={
                            {
                                width:'100%',
                                height:"auto"
                            }}
                    />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>{this.conditionalRendering()}</div>

        )
    }


}

const mapStateToProps = (state, ownProps) => {
    return {
        dicom: state.dicomsInApp[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {getDicom})(ViewDicom)
