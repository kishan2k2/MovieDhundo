import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const handleClick = async () => {
    // Fetch movie details from the OMDB API using the imdbID
    const omdbAPI = `https://www.omdbapi.com?apikey=b6003d8a&i=${imdbID}`;
    try {
      const response = await fetch(omdbAPI);
      const data = await response.json();
      console.log(data)
      if (data && data.imdbID) {
        // Redirect to the specific URL with the retrieved IMDb ID
        window.location.href = `https://vidsrc.xyz/embed/movie/${data.imdbID}`;
      } else {
        alert(`https://vidsrc.in/embed/movie/${data.imdbID} not found`);
      }
    } catch (error) {
      console.error("Error fetching movie details", error);
    }
  };
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} onClick={handleClick}/>
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}
export default MovieCard;


// Tera jo react ka app hai usmein jab movie ke poster pe click karte hai toh usko https://vidsrc.to/embed/movie/{id} pe redirect karde and id ko omdb API se retrieve karle jaise poster ko retrieve kara tha. For example https://vidsrc.to/embed/movie/tt4154796 this is for avengers end game. This is for movie and TV show only. Yeah muhammad taha ko bhi forward karde, tum karo nah karo vo karlega hopefully.
