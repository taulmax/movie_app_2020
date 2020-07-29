import React from "react";
import Proptpyes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: Proptpyes.number.isRequired,
    year: Proptpyes.number.isRequired,
    title: Proptpyes.string.isRequired,
    summary: Proptpyes.string.isRequired,
    poster: Proptpyes.string.isRequired,
    genres: Proptpyes.arrayOf(Proptpyes.string).isRequired
}

export default Movie;