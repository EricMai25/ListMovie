import React from 'react';
import Movies from './Movies.jsx'
const listMovie = (props)=>(
    <div>
        <div className="eachMovie">
            <p className="title">{props.movie.title}</p>
        </div>
    </div>
)

export default listMovie