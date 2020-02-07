import React from "react";
import myBackend from '../axios'
import {Link} from 'react-router-dom'
import Loading from "./Loading";

class ListDicomItem extends React.Component {
    state = {imgSource: null}

    async componentDidMount() {
        console.log(this.props)
        console.log('this props')
        const res = await myBackend.get(`/dicom/icon/${this.props.dicom['_id']}`);
        console.log(res.data)
        console.log(await myBackend.get('/dicom/icon/1'));
        this.setState({
            imgSource: res.data
        })
        console.log('url:')
        console.log(res)
    }



    condRend(){
        if(this.state.imgSource ===null){
            return  <Loading> Loading stuff... </Loading>
        }
        return (
            <Link to={`/dicom/view/${this.props.dicom['_id']}`}>

                        <div className="ui container" style = {
                            {
                                background: '#fcfcfc',
                                boxShadow:' 0 0 10px rgba(0,0,0,0.5)',
                                padding: '10px'
                            }} >
                            <div className="ui stackable center aligned two column grid">
                                <div className="middle aligned row">
                                    <div className="column">
                                        <img className="ui small bordered image centered" src={this.state.imgSource}/>
                                    </div>
                                    <div className="column">
                                        {this.props.dicom.title}
                                    </div>
                                </div>
                            </div>
                        </div>



            </Link>
        );
    }

    render() {
        return (
            <div  style={{maxWidth: '50%',margin: "0 auto"}}>
                {this.condRend()}
            </div>
        );
    }


};

export default ListDicomItem;
