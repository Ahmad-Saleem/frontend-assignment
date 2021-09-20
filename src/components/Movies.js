import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import useAPI from "../hooks/useAPI";

export default function Movies() {
  const { search } = useContext(SearchContext);
  const { data, loading, error } = useAPI("/search/movie", search);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      {data?.results?.map((movie) => (
        <div key={movie?.id}>{movie?.title}</div>
      ))}
    </div>
  );
}
