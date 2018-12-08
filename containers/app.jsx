import React from 'react';
import MovieData from './list.jsx';
import Movies from './Movies.jsx';
import Search from './Search.jsx';
import Add from './add.jsx'


export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            add: '',
            myMovieList: [],
            tempMovies : null,
            userAdded : [],
            movies: []
        }
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        this.setState({
            movies : this.state.tempMovies
        })
        event.preventDefault();
    }
    componentDidMount(){
        this.setState({
            movies: this.state.myMovieList
        })
    }
    searchType(value){
        if(!value){
            this.setState({
                movies : this.state.myMovieList
            })
        }else{
            this.state.myMovieList.forEach((movie)=>{
                console.log(movie)
                var arr =[]
                if(movie['title'].includes(value)){
                    arr.push(movie)
                    this.setState({
                        tempMovies : arr
                    })
                }
            })
            
        }
    }
    addMovie(value){
        this.state.myMovieList.push({title: value})
        console.log(this.state.myMovieList)
        this.searchType(value)
    }

    render () {
        return (
        <div>
            <div>
                <Search change={this.searchType.bind(this)} click={this.handleSubmit} sValue={this.state.search}/>
            </div>
            <div>
                <Add addTo={this.addMovie.bind(this)}/>
            </div>
            <div>
                <Movies list={this.state.movies}/>
            </div>
        </div>

        )
    }
}