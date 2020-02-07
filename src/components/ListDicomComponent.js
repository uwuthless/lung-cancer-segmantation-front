import React from "react";
import {getDicoms} from '../reduxStuff/action_creators'
import ListDicomItem from "./ListDicomItem";
import {connect} from "react-redux";
import Loading from "./Loading";
import _ from 'lodash'
class ListDicomComponent extends React.Component {

    state = {}

    componentDidMount() {
        this.props.getDicoms()
    }

    mapDicomsToListItems = () => {
        console.log('in ')
        console.log(this.props.dicoms)
        return Object.values(this.props.dicoms).map((dicom) => {

            return <ListDicomItem dicom={dicom} key={dicom['_id']}
            />
        })
    }

    conditionalRendering = () => {
        console.log(this.props.dicoms)
        if (_.isEmpty(this.props.dicoms)) {
            return <Loading fullscreen>Loading dicom list</Loading>
        }

        return (
            <div>
                {this.mapDicomsToListItems()}
            </div>
        );
    }


    render() {
        return this.conditionalRendering()
    }

};

const mapStateToProps = (state, ownProps) => {
    return {
        dicoms: state.dicomsInApp
    }
}

export default connect(mapStateToProps,
    {
        getDicoms
    })(ListDicomComponent);
