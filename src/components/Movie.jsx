import { v4 as uuidv4 } from 'uuid';

export function Movie({movie, handleTimelineMovies}){
    function format_date(d){
        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

        const date = new Date(d)
        const day = date.getDate().toString().length == 1 ? `0${date.getDate()}` : date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear()
        return `${day} ${month} ${year}`;
    }

    let days = []
    let reservations = {}

    for (const reservation in movie.reservations) {
        days.push(format_date(reservation))
        reservations[format_date(reservation)] = []
        for (const cinema of movie.reservations[reservation]){
            for (const hour of cinema.hours){
                if (cinema.cinema == "Pathé Montpellier Odysseum - IMAX"){
                    reservations[format_date(reservation)].push(`${hour} - Pathé Odysseum`)
                } else {
                    reservations[format_date(reservation)].push(`${hour} - ${cinema.cinema}`)
                }
            }
        }
    }

    for (let hours in reservations){
        reservations[hours].sort()
    }

    const mois = {
        "Janvier": 0,
        "Février": 1,
        "Mars": 2,
        "Avril": 3,
        "Mai": 4,
        "Juin": 5,
        "Juillet": 6,
        "Août": 7,
        "Septembre": 8,
        "Octobre": 9,
        "Novembre": 10,
        "Décembre": 11
    };
      

    function formatTimeline(movie, day, hour){
        const [h,min] = hour.split(" - ")[0].split(":")
        const [_day, month, year] = day.split(" ")
        const startDate = new Date(Number(year), mois[month], Number(_day), Number(h)+1, Number(min))
        
        const durationSplit = movie.duration.split("h").map(Number);
        const durationMinutes = durationSplit[0]*60 + durationSplit[1] + 15;
        const endDate = new Date(startDate.getTime() + durationMinutes * 60000);

        return {
            id: uuidv4(),
            content: movie.title,
            start: startDate.toISOString().slice(0, 19),
            end: endDate.toISOString().slice(0, 19)
        }
    }

    return <>
    <div className="moviecard">
        <div className="card__top">
            <img src={movie.poster}/>
        </div>

        
        <div className="card__reservation">
            {days.map((day) => {return <div key={day}>
                <h5>{day}</h5>
                <div className="card__reservations">
                {reservations[day].map((hour, index) => {return <p className="card__reservation" key={index} onClick={() => handleTimelineMovies(formatTimeline(movie, day, hour))}>{hour}</p>
                })}
                </div>
            </div>})}
        </div>
    </div>
    </>
}