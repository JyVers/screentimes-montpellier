import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import larrow from '../img/l-arrow.svg';
import rarrow from '../img/r-arrow.svg'

const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

export function Dates({movie, handleTimelineMovies}){
    let todayDate = new Date("March 01, 2025")
    let today = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate())

    const [date, setDate] = useState(today);
    const day = date.getDate().toString().length == 1 ? `0${date.getDate()}` : date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear()
    const date_format = `${day} ${month} ${year}`;
    
    const handleDateIncrement = (index) => setDate(new Date(date.getTime() + 86400*1000))
    const handleDateDecrement = (index) => setDate(new Date(date.getTime() - 86400*1000))

    // Ajoute les réservations correspondant à la date dans [reservations]
    let reservations = []
    let reservations_by_day = movie.reservations[date.toDateString()]
    if (reservations_by_day){
        for (let reservation of reservations_by_day){
            for (let hour of reservation.hours){
                if (reservation.cinema == "Pathé Montpellier Odysseum - IMAX"){
                    reservations.push(`${hour} - Pathé Odysseum`)
                } else {
                    reservations.push(`${hour} - ${reservation.cinema}`)
                }
            }
        }
    }

    function formatTimeline(movie, date, reservation){
        const [hours, minutes] = reservation.split(" - ")[0].split(":").map(Number);

        const startDate = new Date(date);
        startDate.setHours(hours+1, minutes, 0, 0);
        
        const durationSplit = movie.duration.split("h").map(Number);
        const durationMinutes = durationSplit[0]*60 + durationSplit[1] + 15;
        const endDate = new Date(startDate.getTime() + durationMinutes * 60000);

        return {
            id: uuidv4(),
            content: movie.title,
            start: startDate.toISOString().slice(0 ,19),
            end: endDate.toISOString().slice(0, 19)
        }
    }

    reservations.sort()

    return <>
    
        <div className="date">
            <img src={larrow} onClick={handleDateDecrement}/>
            <h5>{`${date_format}`}</h5>
            <img src={rarrow} onClick={handleDateIncrement}/>
        </div>
        <div className="card__reservations">
            {reservations.map((reservation, index) => {return (
                <p className="card__reservation" key={index} onClick={() => handleTimelineMovies(formatTimeline(movie, date, reservation))}>
                    {reservation}
                </p>
            )})}
        </div>

    </>
    
    
}