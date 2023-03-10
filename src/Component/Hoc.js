import React from 'react';


function Hoc(props){
    return(
        <>
        <div>
        <props.data/>
        </div>

        
        </>
    )
}
export default Hoc;