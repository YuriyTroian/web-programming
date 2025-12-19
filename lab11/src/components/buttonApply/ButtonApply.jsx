import React from "react";

import './buttonApply.css'

function ButtonApply({ onClick }) {
    return(
        <div className="button__apply">
            <button className="apply-button" onClick={onClick}>
                Apply
            </button>
        </div>

    );
}

export default ButtonApply;