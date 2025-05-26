import {Dates} from './Dates.jsx'

export function Cards({movies, visibleMovies, handleSelectedMovie, handleTimelineMovies}) {
    return movies.map((movie, index) => {return visibleMovies[index] && (
    
        <div className="card" key={index}>
            <div className="card__top" onClick={() => handleSelectedMovie(index)}>
                <img src={movie.poster}/>
                <div className="card__infos">
                    <h3 className="card__title">{movie.title}</h3>
                    <h5 className="card__duration">{movie.duration}</h5>
                    <p className="card__description">{movie.description}</p>
                </div>
            </div>
            <Dates movie={movie} handleTimelineMovies={handleTimelineMovies}></Dates>
        </div>

    )})
}