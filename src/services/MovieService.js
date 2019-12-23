import movies from './movies.json';

export default class MovieService {
    constructor() {
        this.movies = movies;
    }

    getMovies() {
        return this.movies ? this.movies : [];
    }

    addMovie({title, subtitle, description, year, imageUrl}) {

        const movie = {
            id: movies.length + 1,
            title: title,
            subtitle: subtitle,
            description: description,
            year: year,
            imageUrl: imageUrl
        };
        
        this.movies.push(movie);
    
    }
}