<<<<<<< HEAD
import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange = {searchChange}
            />
        </div>
    )
}

=======
import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange = {searchChange}
            />
        </div>
    )
}

>>>>>>> fa22ea875ea448e9f2ef37f045396877c0254bb1
export default SearchBox