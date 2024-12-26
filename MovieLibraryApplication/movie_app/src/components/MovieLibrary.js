import {useState} from 'react'
import MovieCard from './MovieCard'
export default function MovieLibrary(){
const[movies,setMovies]=useState([{ id: 1, title: "Inception", genre: "Sci-Fi", releaseYear: 2010, isFavorite: false },
    { id: 2, title: "The Dark Knight", genre: "Action", releaseYear: 2008, isFavorite: false },
    { id: 3, title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014, isFavorite: false },
    { id: 4, title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994, isFavorite: false },
    { id: 5, title: "The Godfather", genre: "Crime", releaseYear: 1972, isFavorite: false }])

function toggleFavorite(id){
const updateMovie =movies.map((movie)=>(
    movie.id === id ? {...movie ,isFavorite:!movie.isFavorite}: movie
))
setMovies(updateMovie)
}
return (
<div style={{padding:"20px",fontFamily:"Arial, sans-serif"}}>
    <h1>🎬Movie Library</h1>
    <form action="">
        <h2>Add new Movie</h2>
        <div style={{marginBottom:"10px"}}>
            <label style={{display:"block",marginBottom:"5px"}}>Title</label>
            <input 
            type="text" 
            name="title" 
            placeholder='Enter movie title' 
            style={{
                width:"50%",
                padding:"8px",
                borderRadius:"4px",
                border:"1px solid #ccc"
            }}
            required/>
        </div>
        <div style={{marginBottom:"10px"}}>
            <label style={{display:"block",marginBottom:"5px"}}>Genre</label>
            <input 
            type="text" 
            name="genre" 
            placeholder='Enter movie genre' 
            style={{
                width:"50%",
                padding:"8px",
                borderRadius:"4px",
                border:"1px solid #ccc"
            }}
            required/>
        </div>
        <div style={{marginBottom:"10px"}}>
            <label style={{display:"block",marginBottom:"5px"}}>Release Year</label>
            <input 
            type="text" 
            name="Genre" 
            placeholder='Enter release year' 
            style={{
                width:"50%",
                padding:"8px",
                borderRadius:"4px",
                border:"1px solid #ccc"
            }}
            required/>
        </div>
        
    </form>
    <div>
      {
        movies.map((movie)=>(
         <MovieCard Key={movie.id} movie={movie} toggleFavorite={toggleFavorite}/>
        ))
      }
    </div>
</div>
)
}