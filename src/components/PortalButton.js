import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton=({buttonclick})=>{
    return (
        <div>
            <button id="portal-button" onClick={buttonclick}>Click</button>
        </div>
        
    )
}
export default PortalButton;

//portal-button id will be used here for portal purpose
