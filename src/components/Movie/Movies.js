import React, { Component } from 'react';
import MovieList from './MovieList';
import NewMovieForm from './NewMovieForm';
import movies from '../../services/movies.json';

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            movies: movies,
        };
    }

    //componentDidMount() {
    //    this.setState(() => ({ movies: this.state.service.getMovies() }));
    //}
   
    
    addMovie(movie) {
        this.setState({movies: [...movies, movie]});
    }

    render() {

        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={this.state.movies} />
                        <NewMovieForm addMovie={(movie) => this.addMovie(movie)}/>
                    </div>
                </div>
            </div>
        );
    }
}