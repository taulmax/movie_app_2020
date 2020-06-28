import React from "react";
import Proptpyes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
    return (
        <h4>{title}</h4>
    )
}

Movie.propTypes = {
    id: Proptpyes.number.isRequired,
    year: Proptpyes.number.isRequired,
    title: Proptpyes.string.isRequired,
    summary: Proptpyes.string.isRequired,
    poster: Proptpyes.string.isRequired
}

export default Movie;