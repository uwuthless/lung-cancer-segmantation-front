import React from "react";
import '../styles/range_input.css'
const VisualizeDicom = () => {


    return (
        <div className="ui container">
            <form action="/action_page.php">
              <input type="range" name="points" min="0" max="100"/>

            </form>
        </div>
    );
};

export default VisualizeDicom;
