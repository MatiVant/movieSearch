import { useEffect, useState, useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { API_KEY, URL_BASE, imgPath } from "../utils/constanst";
import { favCtx, favAddOrRemCtx } from "../FavProvider";

//Como funciona el REDIRECT en react Router 6

const Listado = () => {
  const movieList = useLoaderData();


  const favorites = useContext(favCtx);
  const addOrRemoveFav = useContext(favAddOrRemCtx);

  let navigate = useNavigate();
  let token = sessionStorage.getItem("token");
  // const [movieList, setMovieList] = useState([]);
  // setMovieList(listaLoad.results);

  // useEffect(() => {
  //   const endpoint = `${URL_BASE}discover/movie?api_key=${API_KEY}&page=1&language=es-ES&`;
  //   axios
  //     .get(endpoint)
  //     .then((res) => {
  //       const movies = res.data;
  //       setMovieList(movies.results);
  //     })
  //     .catch((err) => {
  //       swAlert.fire("Hubo un error intente mas tarde \n" + err.message);
  //     });
  // }, [setMovieList]);

  return (
    <>
      {!token && navigate("/")}
      <div className="container text-center">
        <h1 style={{ color: "white", fontSize: 80 }}>Listado de Peliculas</h1>

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
                  <button
                    onClick={(e) => addOrRemoveFav(e)}
                    className="favourite-btn"
                    data-movie-id={mov.id}
                  >
                    🔥
                  </button>
                  <div className="card-body">
                    <h5 className="card-title">{mov.title}</h5>
                    <p className="card-text" style={{ fontSize: 15 }}>
                      {mov.overview.substring(0, 200)}
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

        <Link to={-1}>
          <button type="button" className="btn btn-secondary btn-lg">
            Go Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Listado;
