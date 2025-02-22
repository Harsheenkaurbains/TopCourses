import React from "react";
import "./Spinner.css";

function Spinner(){
    return(
        <div className="flex flex-col items-center space-y-2">
            <div                 className='custom-loader'></div>
        <p className="text-bgDark text-[25px] font-semibold">Loading....</p>
        </div>
    )
}

export default Spinner;
