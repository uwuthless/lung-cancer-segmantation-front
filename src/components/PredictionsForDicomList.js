import React from "react";
import {getDicoms, getPredictions} from '../reduxStuff/action_creators'
import ListDicomItem from "./ListDicomItem";
import {connect} from "react-redux";
import Loading from "./Loading";
import _ from 'lodash'
import PredictionsForDicomListItem from "./PredictionsForDicomListItem";


class PredictionsForDicomList extends React.Component {

    state = {}

    componentDidMount() {
        this.props.getPredictions(this.props.id)
    }

    mapPredictionsToListItems = () => {
        return this.props.predictions.sort(function(a, b) {
            return a - b;
        }).map((predN)=>{
           return <PredictionsForDicomListItem key={predN} sliceN={predN} onPrediction = {this.props.onPrediction} />
        })
    }

    conditionalRendering = () => {
        console.log(this.props.predictions)
        if (_.isEmpty(this.props.predictions)) {
            return ( <Loading >Loading proposals list </Loading> )
        }

        return (
            <div>
                {this.mapPredictionsToListItems()}
            </div>
        );
    }

    render() {
        return this.conditionalRendering()
    }

};

const mapStateToProps = (state, ownProps) => {
    return {
        predictions: state.dicomsInApp['predictions']
    }
}

export default connect(mapStateToProps,
    {
        getDicoms, getPredictions
    })(PredictionsForDicomList);
