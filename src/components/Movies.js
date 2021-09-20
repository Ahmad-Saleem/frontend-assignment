import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import useAPI from "../hooks/useAPI";
import MovieCard from "./MovieCard";

export default function Movies() {
  const { search } = useContext(SearchContext);

  const path = search && search !== "" ? "/search/movie" : "/movie/popular";
  const { data, loading, error } = useAPI(path, search);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <section>
      <h3 style={{ textAlign: "left" }}>Most Recent Movies</h3>
      <div className="movies-grid">
        {data?.results?.map((movie) => (
          <MovieCard
            key={movie?.id}
            image={`${process.env.REACT_APP_API_BASE_IMAGE_URL.replace(
              "original",
              "w500"
            )}${movie?.poster_path}`}
          >
            <h4>{movie?.title}</h4>
          </MovieCard>
        ))}
      </div>
    </section>
  );
}
