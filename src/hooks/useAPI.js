import axios from "axios";
import { useEffect, useState } from "react";

export default function useAPI(path, query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_API_DOMAIN}${path}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${query}`
      )
      .then((res) => {
        setData(res?.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError({ ...err });
        setLoading(false);
      });
  }, [path, query]);

  return { data, loading, error };
}
