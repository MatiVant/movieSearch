import React from 'react'
import { useNavigate } from 'react-router-dom'
import swAlert from "sweetalert2";


const Buscador = () => {

    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim()
        navigate(`/busqueda?keyword=${keyword}`)
        // e.currentTarget.keyword.value = " "
    }
    return (
   <>

    <form onSubmit={submitHandler}>
          <label className='form-label mx-2'>
            <input className="form-control" type='text' name="keyword" placeholder="Palabra clave..." />
          </label>
          <button  className='btn btn-success ml-2' type="submit">Buscar</button>
    </form>
   </> 
  )
}

export default Buscador