import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// get the base url of the image api so we can send an http request to call the images from the api
const parent_url = "https://image.tmdb.org/t/p/original/";

// Pass prop onto this functional component to signify a title will be assigned else where so we can reuse this component.
const Media = ( { title, fetchAPI, nowPlaying }) => {

    // get movie details. Don't to initialize the state with an empty array so it's doesn't throw an error while the state is undefined
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    // display content
    useEffect(() => {
        // Asynchronous function used to make requests to third party applications
        async function fetchMedia() {
            // Await for a promise (answer) to be returned otherwise the HTTP request will not return a response
            const request= await axios.get(fetchAPI);
            // destructure the API to get the specific data we are looking for. In this case, it is results. We found this from our API using the browser console logs.
            setMovies(request.data.results);
            return request;
        }

        // call the function to execute it.
        fetchMedia();

        // any third party requests made, we have to assign to the useEffect array.
        // we use the fetchAPI because it is a prop and the data is pulled from outside this component.
    },[fetchAPI]);

    // an object from the react-youtube library to display the media player from youtube on our react project
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    
    const clickHandler = (movie) => {
        if(trailerURL){
            setTrailerURL("");
        }
        else{
            movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get("v"));
            })
            .catch(() => console.log("Something went wrong!"));
        }
    };

    return (
        // State is like short term memory. We store the values and format from memory when we refresh
        // Curly braces signify that you're inserting a JavaScript expression
        <section className='movies'>
            <h1>{title}</h1>
            <div className={'movies_list'}>
                {movies.map(movie => (
                    // Traverse through the list from the movies hook, populate the data inside movie. In other words, loop through the movies.
                    // Fetch the primary key/id for the movie assigned by the api
                    // A ternary condition to render posters if the prop nowPlaying is equal to true
                    <div className='movie_box' onClick={() => clickHandler(movie)}>
                        <img src={`${parent_url}${nowPlaying ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`movie_img ${nowPlaying && "nowPlaying_list"}`} key={movie.id} />
                        <div className="overlay">
                            <div className="overlay_content">
                                <h3 className='movie_title'>{movie?.name || movie?.title || movie?.original_title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </section>
    )
}

export default Media