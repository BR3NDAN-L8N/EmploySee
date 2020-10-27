import React from 'react';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import ExpandLessSharpIcon from '@material-ui/icons/ExpandLessSharp';

const RenderSortButton = (props) => {

    // const properties = `onClick=${props.handleArrowChange} id=${props.id} data-arrow-direction=${props.arrowDirection}`

    return (
        <button onClick={props.handleArrowChange} id={props.id} data-arrow-direction={props.arrowDirection}>
        {/* // <div onClick={props.handleArrowChange} id={props.id} data-arrow-direction={props.arrowDirection}> */}
            {props.arrowDirection === "up" ? <ExpandLessSharpIcon /> : <ExpandMoreSharpIcon />}
        {/* </div> */}

        </button>
    )
}


export default RenderSortButton;