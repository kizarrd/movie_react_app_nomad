import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie( { id, title, year, genres, summary, poster } ) {
    return (
        <Link to = {{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                genres,
                summary,
                poster
            }
        }}>
        <div className="movie">
            <img className="movie__poster" src={ poster } alt={ title } />
            <div className="movie__info">
                <h3 className="movie__title">{ title }</h3>
                <h5 className="movie__year">{ year }</h5>
                <div className="movie__genres">{ genres.map(
                    (genre, index) => (
                        <li key={ index }>{ genre }</li>
                    )
                ) }</div>
                {
                    summary.length > 180 &&
                    <p className="movie__summary">
                        { summary.slice(0, 180) } ...
                    </p>
                }
                {
                    summary.length <= 180 &&
                    <p className="movie__summary">
                        { summary }
                    </p>
                }

            </div>
        </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;