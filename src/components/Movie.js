import moment from "moment";
import useAPI from "../hooks/useAPI";
import { ModalHeader } from "../styled/Modal";

export default function Movie({ movieId }) {
  const { data, loading, error } = useAPI(`/movie/${movieId}`, "");
  return (
    <>
      <ModalHeader title={data?.title} />
      <article className="flex">
        <img
          src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${data?.poster_path}`}
          alt={data?.title}
          width="266px"
          height="auto"
        />
        <div className="flex__column p-l-4">
          <span>
            <strong>Release date: </strong>
            {moment(data?.release_date).format("MMMM DD, YYYY")}
          </span>
          <p>{data?.overview}</p>
          <span>
            <strong>{data?.vote_average}</strong>
            {" / 10 "}
            {`(${data?.vote_count} total votes)`}
          </span>
        </div>
      </article>
    </>
  );
}
