import React, { useState, useEffect, useRef } from "react";
import { Timeline } from "vis-timeline/standalone";
import { DataSet } from "vis-data";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";

export function CinemaTimeline({timelineMovies, setTimelineMovies}) {
    const [selectedFilms, setSelectedFilms] = useState([]);
    const timelineRef = useRef(null);

    // Utilisation de useEffect pour configurer la timeline chaque fois que `timelineMovies` change
    useEffect(() => {
        if (!timelineRef.current || !timelineMovies) return;

        // Données des séances de cinéma
        const items = new DataSet(timelineMovies);

        // Options de la timeline
        const options = {
            editable: false, // Désactive les modifications
            stack: true, // Empêche le chevauchement vertical
            margin: { item: 10 },
            horizontalScroll: true,
            zoomable: false
        };

        // Création de la timeline
        const timeline = new Timeline(timelineRef.current, items, options);

        timeline.on('click', (e) => {
            setTimelineMovies(timelineMovies.filter(movie => movie.id !== e.item))
        })

        // Nettoyage de la timeline au démontage du composant ou avant une mise à jour
        return () => timeline.destroy();
    }, [timelineMovies]); // Ajout de `timelineMovies` dans les dépendances

    return (
        <div>
            <div ref={timelineRef} />
        </div>
    );
}
