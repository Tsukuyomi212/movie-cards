import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            title: '',
            subtitle: '', 
            description: '', 
            year: '',
            imageUrl: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange (event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        const {title, subtitle, description, year, imageUrl} = this.state;
        const movie = {
            id: Math.random(),
            title: title,
            description: description,
            subtitle: subtitle,
            year: year,
            imageUrl: imageUrl
        };
        this.props.addMovie(movie);
    }
    render() {
        const {title, subtitle, description, year, imageUrl} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter movie title: </label>
                    <input type='text' required value={title} name='title' onChange={this.handleChange}/>
                    <label>Enter subtitle: </label>
                    <input type='text' required value={subtitle} name='subtitle' onChange={this.handleChange}/>
                    <label>Enter description: </label>
                    <input type='text' required value={description} name='description' onChange={this.handleChange}/>
                    <label>Enter year:</label>
                    <input type='number' required name='year' value={year} onChange={this.handleChange}/>
                    <label>Enter image URL: </label>
                    <input type='url' required value={imageUrl} name='imageUrl' onChange={this.handleChange}/>
                    <input type='submit' value='submit' />
                </form>
            </div>
        );
    }
}

NewMovieForm.propTypes = {
    addMovie: PropTypes.func
};

export default NewMovieForm;
