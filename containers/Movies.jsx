import React from 'react';
import IndMovies from './IndMovie.jsx';

const movieRender = (props)=>{
    return(
        <div >
            {props.list.map(disk=>
            <IndMovies key={disk.title} movie={disk}/>
            )}
        </div>

    )
}

export default movieRender 