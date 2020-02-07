import React from "react";

const Loading = (props)=>{

    const getLoading = ()=>{
        return(
            <div className="ui active inverted dimmer">
                <div className="ui text loader">{props.children}</div>
            </div>
        )
    }

    if(props.fullscreen !== true){
        return (
            <div className="ui segment" style={{minHeight: '5rem'}}>
                {getLoading()}
            </div>
        )
    }
    return (
          getLoading()
    );
}

export default Loading;
