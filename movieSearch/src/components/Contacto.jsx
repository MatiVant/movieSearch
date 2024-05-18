import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Contacto = () => {
  

  const estilo = { display: "flex", justifyContent: "center" };
  const navigate = useNavigate();
  function handdleSubmit(e)  {

    e.preventDefault()
    Swal.fire({
      title: "GRACIAS",
      text: "Pronto nos comunicamos con vos!",
      icon: "success",
      timer: 3000
    })
    navigate('/listado')

  }

  return (
    <div className="container">
    <div
      className="container text-center"
      style={{ backgroundColor: "#222222", padding: 30 }}
      >
      <div className="row" style={estilo}>
        <div className="col">
          <img src="./Libros.jpg" alt="ImagenContacto" />
        </div>
        <div className="col" style={estilo}>
          <p style={{ textAlign: "justify", color: "white" }}>
            Imagina una página web que evoca la nostalgia de los videoclubes de
            antaño, donde el amor por el cine clásico se combina con la
            tecnología moderna de búsqueda. Al ingresar a la página, te recibe
            una interfaz con diseño vintage que imita las estanterías de madera
            llenas de cintas VHS y carátulas de películas. Cada sección de la
            página está diseñada para parecerse a diferentes áreas de un
            videoclub tradicional, como "Novedades", "Clásicos", y "Culto".
          </p>
        </div>
      </div>
      <br />
      <div className="row" style={estilo}>
        <p style={{ textAlign: "justify", color: "white" }}>
          La barra de búsqueda, situada en el centro de la página, tiene el
          aspecto de un antiguo catálogo de fichas, invitando a los usuarios a
          explorar películas por título, actor, director o año. Los resultados
          de búsqueda aparecen como si fueran cintas VHS que puedes "sacar"
          virtualmente de los estantes, con opciones para leer sinopsis
          detalladas, reseñas de época, y ver tráilers estilo retro <br />{" "}
          <br /> Además, la página cuenta con un área de "Recomendaciones de la
          semana", que simula una pizarra donde el personal del videoclub
          sugiere películas basadas en los gustos de los usuarios, junto con
          anécdotas cinematográficas y trivia. Todo esto acompañado de una
          música de fondo que remite a las bandas sonoras de los 80 y 90,
          completando la atmósfera nostálgica y acogedora de un videoclub.
        </p>
      </div>
      <form onSubmit={handdleSubmit} style={{ backgroundColor: "#dddddd", padding: 50, margin: "50px 200px 0px 200px" }}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Tu nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Juan Domingo Peron"
            />
          <label for="exampleFormControlInput1" class="form-label">
            Tu correo
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Consulta          
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Dejanos tu comentario"
            ></textarea>
        </div>
        <select class="form-select" aria-label="Default select example">
          <option selected>Como nos conociste</option>
          <option value="1">Por Facebook</option>
          <option value="2">Por Instagram</option>
          <option value="3">Me conto un amigo</option>
        </select>
        <button type="submit" class="btn btn-primary mt-5">Submit</button>

      </form>
      <button className="mt-4" type="button" onClick={() => navigate(-1)}>
        Volver
      </button>
  </div>

    
    </div>
  );
};

export default Contacto;
