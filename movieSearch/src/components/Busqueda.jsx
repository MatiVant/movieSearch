import React, { useEffect, useState } from "react";
import { API_KEY, URL_BASE, imgPath } from "../utils/constanst";
import swAlert from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

export const Busqueda = () => {
  // const movieLis = useLoaderData()
  // console.log(movieLis)
  const [movieList, setMovieList] = useState([]);
  const query = new URLSearchParams(window.location.search);
  const keyword = query.get("keyword");
  

  useEffect(() => {
    const endpoint = `${URL_BASE}search/movie?api_key=${API_KEY}&page=1&language=es-ES&query=${keyword}`;
    axios
      .get(endpoint)
      .then((res) => {
        const movies = res.data;
        setMovieList(movies.results);
        console.log(movies.results)
        if(movies.results.length < 0) {
          swAlert.fire("No hay peliculas con esa palabra")
        }

      })
      .catch((err) => {
        swAlert.fire("Hubo un error intente mas tarde \n" + err.message);
      });
  }, [keyword, movieList]);

  return (
    <>
      {/* {!token && navigate('/')} */}
      <div className="container text-center">
        <h1 style={{color: 'white'}}>Resultados de la busqueda: {keyword}</h1>

        <div className="row">
          {movieList.map((mov, idx) => {
            return (
              <div className="col" key={idx}>
                <div
                  className="card my-4"
                  style={{ width: "18rem", padding: 20 }}
                >
                  <img
                    src={`${imgPath}/${mov.poster_path}`}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{mov.title}</h5>
                    <p className="card-text" style={{ fontSize: 15 }}>
                      {mov.overview?.substring(0, 200)}
                    </p>
                    <Link
                      to={`/detalle?movieId=${mov.id}`}
                      className="btn btn-primary"
                    >
                      Detalles{" "}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Link to="/">
          <button type="button" className="btn btn-secondary">
            Go Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Busqueda;
