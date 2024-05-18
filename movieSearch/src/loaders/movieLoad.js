import axios from "axios";
import swAlert from "sweetalert2";
import { API_KEY, URL_BASE } from "../utils/constanst";

const endpoint = `${URL_BASE}discover/movie?api_key=${API_KEY}&page=1&language=es-ES&`;


// Función para cargar datos
export const loadMovie = async () => {
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
