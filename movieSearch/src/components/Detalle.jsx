import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_KEY, URL_BASE, imgPath } from "../utils/constanst";

const Detalle = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  let navigate = useNavigate();
  let token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let movieId = query.get("movieId");
  const endpoint = `${URL_BASE}movie/${movieId}?api_key=${API_KEY}&language=es-ES`
  console.log(endpoint);

  useEffect( ()=>{
    axios
      .get(endpoint)
      .then((response) => {
      const details = response.data
      console.log(details)
      setMovieDetails(details)
    })
  }, [movieId]
  )

  return (
    <>
      {!token && navigate("/")}
      {!movieDetails && "cargando..."}
      {movieDetails &&
      <div className="row p-5" style={{backgroundColor: "gray", opacity: 0.9, minHeight: "100vh", color:"white"}}>
        <h2 style={{fontSize: 50}}>Detalle de la pelicula</h2>
        <div className="col-4">
        <img
                    src={`${imgPath}/${movieDetails.poster_path}`}
                    className="img-fluid"
                    alt="movieposter"
                  />
             </div>
        <div className="col-8" >
          <h4 >Titulo: {movieDetails.title}</h4>
          <h5>Lenguaje: {movieDetails.spoken_languages[0].name || "No hay lenguajes disponibles"}</h5> 
          <h5>
            Resena: {movieDetails.overview}
          </h5>
          <ul>
          {movieDetails.genres.map((len, idx)=> (<li key={idx}>Genero {idx+1}: {len.name} </li>))}
  
          </ul>
        </div>
        <div style={{display: "flex", justifyContent: "flex-end "}}>
        <button type="button" style={{width: "15vh", height: "8vh", }} onClick={()=> navigate(-1)}>Volver</button>
        </div>
      </div>
        
      }
    </>
  );
};

export default Detalle;
