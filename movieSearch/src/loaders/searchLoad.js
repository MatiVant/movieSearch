import axios from "axios";
import swAlert from "sweetalert2";
import { API_KEY, URL_BASE } from "../utils/constanst";

const query = new URLSearchParams(window.location.search);
const keyword = query.get("keyword");
const endpoint = `${URL_BASE}search/movie?api_key=${API_KEY}&page=1&language=es-ES&query=${keyword}`;

// Función para cargar datos
export const loadMovieSearch = async () => {
  try {
    // Realizar la petición GET
    const response = await axios.get(endpoint);
    // Devolver los datos recibidos
    
    return response.data.results;
  } catch (error) {
    // Manejar el error
    swAlert.fire("Hubo un error intente mas tarde \n" + error.message);
    // Opcionalmente puedes manejar el error de manera diferente o devolver algo específico
    throw error;
  }
};
