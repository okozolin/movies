import React, {useState, useEffect} from 'react';
import Navigation from "../shared/Navigation";
import ShowItem from "../shared/ShowItem";
import {apiRequest} from "../../services/api";

const MovieIndex = (props) => {
    console.log("inside MovieIndex - props", props);
    const [movies, setMovies ]= useState([]);

    // the code will run once when the function is run (mounted) for first time
    useEffect(() => {
        // once

        apiRequest().then( data => setMovies(data));

        // unmount when element dead print the message
        return () => console.log("I'm dead");
        }, []);

    return (
        <div>
            <h1>Movies index</h1>
            <Navigation/>
            { movies.map( movie => (
                <>
                <pre>
                    {JSON.stringify(movie, 1, 1)}
                </pre>
                <ShowItem url={movie.thumbnailUrl} id={movie.id}/>
                </>

                )
            ) }
        </div>
    );
}
export default MovieIndex;


