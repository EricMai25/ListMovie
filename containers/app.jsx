import React from 'react';
import MovieData from './list.jsx';
import Movies from './Movies.jsx';


export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render () {
        return (
        <div>
            <div>
                <h1>Movie List</h1>
                <Movies list={MovieData}/>
            </div>
        </div>

        )
    }
}