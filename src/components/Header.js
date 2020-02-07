import React from "react";
import {Link} from "react-router-dom";

const Header = (props)=>{
    return (
        <div className="ui pointing menu">
            <Link to='/' className = 'item'>
                [Here goes the name of the project when you come up with one]
            </Link>
            <div className="right menu">

                    <button className="ui item button undo"
                    style={{padding:'0 3rem 0 3rem'}}>
                        <Link to={'/dicom/create'}>
                            <i className="plus square outline icon "/>
                            Add dicom
                        </Link>
                    </button>


            </div>

        </div>
    );
}

export default Header;
