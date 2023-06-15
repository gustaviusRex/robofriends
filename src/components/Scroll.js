<<<<<<< HEAD
import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border:'5px solid black', height:'800px'}}>
            {props.children}
        </div>
    )
};

=======
import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border:'5px solid black', height:'800px'}}>
            {props.children}
        </div>
    )
};

>>>>>>> fa22ea875ea448e9f2ef37f045396877c0254bb1
export default Scroll;