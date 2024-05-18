import React, { createContext, useContext, useEffect, useState } from 'react'

export const favCtx = createContext()
export const favAddOrRemCtx = createContext()

export function useFavAddOrRemCtx(){
    return useContext(favAddOrRemCtx)
}
export function useFavCtx(){
    return useContext(favCtx)
}

export function FavProvider (props) {
    
    
    const [favoritos, setFavoritos] = useState([])
    
    useEffect(()=>{
        const favInLocal = localStorage.getItem('favs')
        if(favInLocal !== null){
            const favArray = JSON.parse(favInLocal)
            setFavoritos(favArray)
        }
    }, [])
    
    
    
    
    const addOrRemoveFav = e =>{

        let favMovies = localStorage.getItem('favs');
        let tempFavMovies 
        console.log('Favs en storage', favMovies)
        
        if(favMovies === null){
            tempFavMovies = []  
            console.log('no habia favoritos', tempFavMovies)
          } else {
            tempFavMovies = JSON.parse(favMovies)
            console.log('si habia favoritos', tempFavMovies)
        
          }
        
        const btnInfo = e.currentTarget.parentElement;
        const urlImg = btnInfo.querySelector('img').getAttribute('src');
        const title = btnInfo.querySelector('h5').innerText
        const overview = btnInfo.querySelector('p').innerText
        const movieId = e.currentTarget.dataset.movieId
        const movieData = {
            movieId, title, urlImg, overview
        }
        console.log('movie Sel', movieData)
        let movieIsInArray = tempFavMovies.find(oneMovie => {
          return oneMovie.movieId === movieData.movieId
        }
      )
      
        if(!movieIsInArray) {
          tempFavMovies.push(movieData);
          localStorage.setItem('favs', JSON.stringify(tempFavMovies));
          setFavoritos(tempFavMovies)
          console.log("Se agrego la pelicula")
        } else {
          let moviesLeft = tempFavMovies.filter(oneMovie => {
            return oneMovie.movieId !== movieIsInArray.movieId})
          console.log("Se elimino la pelicula", movieIsInArray.title, 'asi quedo moviesLeft', moviesLeft, 'tempfav', tempFavMovies)
          localStorage.setItem('favs', JSON.stringify(moviesLeft))
          setFavoritos(moviesLeft)
      }} 

  return (
    <favCtx.Provider value={favoritos}>
        <favAddOrRemCtx.Provider value={addOrRemoveFav}>
            {props.children}
        </favAddOrRemCtx.Provider>
     </favCtx.Provider>
  )
}

export default FavProvider