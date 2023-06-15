<<<<<<< HEAD
import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

=======
import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

>>>>>>> fa22ea875ea448e9f2ef37f045396877c0254bb1
export default Card;