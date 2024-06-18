import React, { useState } from 'react';

function MoviesList() {
    // initializing the list of movies 
    const initialMovies = [
        { title: "Maverick", description: "Pilot that is a hero returns to his old base to teach younger pilots.", genre: "Action" },
        { title: "Captain Phillips", description: "True story of pirates capturing ships in the sea.", genre: "Drama" },
        { title: "Thomas Crown Affair", description: "A heist movie mixed with a bit of love.", genre: "Drama" },
        { title: "Armageddon", description: "A space disaster movie where oil drillers become astronauts to save the world.", genre: "Action" }
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [showMovies, setShowMovies] = useState(true);
    const [detailsVisible, setDetailsVisible] = useState({});
    // This is a bonus (if it works)
    const [showOnlyAction, setShowOnlyAction] = useState(false);

    // toggle details, conditional rendering 
    function toggleDetails(index) {
        const newDetailsVisible = { ...detailsVisible };
        newDetailsVisible[index] = !newDetailsVisible[index];
        setDetailsVisible(newDetailsVisible);
    }

    // remove a movie but i don't think i can use if/else 
    // function removeMovie(index) {
    //     const newMovies = [];
    //     for (let i = 0; i < movies.length; i++) {
    //     if (i !== index) {
    //         newMovies.push(movies[i]);
    //     }
    //     }
    //     setMovies(newMovies);
    // }

    // remove a movie
    function removeMovie(index) {
        const newMovies = movies.filter((_, i) => i !== index);
        setMovies(newMovies);
    }

    // filter movies based on genre but again don't think i am supposed to use if/else 
    /* This block of code is filtering the movies based on the genre. */
    // let filteredMovies;
    // if (showOnlyAction) {
    //     filteredMovies = movies.filter(movie => movie.genre === "Action");
    // } else {
    //     filteredMovies = movies;
    // }

    // filter movies based on genre (Bonus)
    const filteredMovies = showOnlyAction
    ? movies.filter(movie => movie.genre === "Action")
    : movies;

    return (
        <div>
            <button onClick={() => setShowMovies(!showMovies)}>
                {showMovies ? "Hide Movies" : "Show Movies"}
            </button>
            <button onClick={() => setShowOnlyAction(!showOnlyAction)}>
                {showOnlyAction ? "Show All Movies" : "Show Only Action Movies"}
            </button>
                {showMovies && (
                    <ul>
                        {filteredMovies.map((movie, index) => (
                            <li key={index}>
                                <span onClick={() => toggleDetails(index)}>{movie.title}</span>
                                <button onClick={() => removeMovie(index)}>Remove</button>
                                {detailsVisible[index] && <p>{movie.description}</p>}
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    );
}

export default MoviesList;

