import { lazy, Suspense, useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { SearchContext } from "../context/SearchContext";
import useAPI from "../hooks/useAPI";
import MovieCard from "./MovieCard";

const Movie = lazy(() => import("./Movie"));
const Modal = lazy(() => import("../styled/Modal"));

export default function Movies() {
  const [movieId, setMovieId] = useState(null);

  const { search } = useContext(SearchContext);
  const { showModal, setShowModal } = useContext(ModalContext);

  const path = search && search !== "" ? "/search/movie" : "/movie/popular";
  const { data, loading, error } = useAPI(path, search);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <section>
        <h3>Most Recent Movies</h3>
        <div className="movies-grid">
          {data?.results?.map((movie) => (
            <a
              key={movie?.id}
              href={`#${movie?.title?.replaceAll(" ", "_")}`}
              onClick={() => {
                setShowModal(true);
                setMovieId(movie.id);
              }}
              id={movie?.title?.replaceAll(" ", "_")}
            >
              <MovieCard
                image={`${process.env.REACT_APP_API_BASE_IMAGE_URL.replace(
                  "original",
                  "w500"
                )}${movie?.poster_path}`}
                rating={movie?.vote_average}
              >
                <h4>{movie?.title}</h4>
              </MovieCard>
            </a>
          ))}
        </div>
      </section>
      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <Modal>
            <Movie movieId={movieId} />
          </Modal>
        </Suspense>
      )}
    </>
  );
}
