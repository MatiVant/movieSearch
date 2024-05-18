import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imgPath } from "../utils/constanst";
import { favAddOrRemCtx, favCtx, useFavAddOrRemCtx, useFavCtx } from "../FavProvider";



export const Favoritos = (props) => {

  const addOrRemoveFav = useFavAddOrRemCtx(favAddOrRemCtx)
  const favorite = useFavCtx(favCtx)
  console.log(favorite, "valor favorite")
  
  return (
    <>
      {!favorite.length && <div className="col-12 text-danger" style={{textAlign: "center", fontSize: 50, backgroundColor: "white", marginBottom: 30}}> No tenes nigun favorito</div>}
      <div className="container text-center">
        <h1 style={{ color: "white", fontSize: 80 }}>Peliculas Favoritas</h1>

        <div className="row">
          {favorite.map((mov, idx) => {
            return (
              <div className="col" key={idx}>
                <div
                  className="card my-4"
                  style={{ width: "18rem", padding: 20 }}
                >
                  <img
                    src={`${imgPath}/${mov.urlImg}`}
                    className="card-img-top"
                  />
                  <button
                    onClick={(e) => addOrRemoveFav(e)}
                    className="favourite-btn"
                    data-movie-id={mov.movieId}
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

export default Favoritos;
