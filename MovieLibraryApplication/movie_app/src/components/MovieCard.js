export default function MovieCard({ movie, toggleFavorite }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2>{movie.title}</h2>
        <p>
          <strong>Genre:</strong>
          {movie.genre}
        </p>
        <p>
          <strong>ReleaseYear:</strong>
          {movie.releaseYear}
        </p>
      </div>
      <button
        style={{
          backgroundColor: movie.isFavorite ? "#ff6347" : "#008cba",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "8px 16px",
          cursor: "pointer",
        }}
        onClick={() => toggleFavorite(movie.id)}
      >
        {movie.isFavorite ? "UnFavorite" : "Favorite"}
      </button>
    </div>
  );
}
