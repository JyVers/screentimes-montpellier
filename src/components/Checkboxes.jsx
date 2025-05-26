import { useState } from "react";

export function Checkboxes({movies, visibleMovies, handleMovieVisibility}){

    return (movies.map((movie, index) => {return (
        <label htmlFor={index} key={index}>
            <input type="checkbox" id={index} onChange={() => handleMovieVisibility(index)} checked={visibleMovies[index]}/>
            <span className="checkbox"></span>
            <p>{movie.title}</p>
        </label>
    )})

    )
}