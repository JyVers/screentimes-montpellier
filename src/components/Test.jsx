export function Test({movies, visibleMovies}){
    const start_date = "Mon Feb 24 2025"
    const start_hour = "14:30"

    for (let visibleMovie in visibleMovies){
        if (visibleMovies[visibleMovie]){
            let first_reservation = ""
            for (let day in movies[visibleMovie]['reservations']){
                if (day == start_date){
                    for (let cinema of movies[visibleMovie]['reservations'][day]){
                        for (let hour of cinema['hours']){
                            if ((hour > start_hour && hour < first_reservation) || (hour > start_hour && first_reservation=="")){
                                first_reservation = hour
                                
                            }
                            //console.log(first_reservation)
                        }
                    }
                }
            }
        }
    }
}