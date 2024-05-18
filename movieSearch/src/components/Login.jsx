import { regEmail } from "../utils/constanst";
import axios from 'axios'
import swAlert from 'sweetalert2'
import { Navigate, useNavigate} from 'react-router-dom'

const Login = () => {
const navigate = useNavigate()


const submitHandler = (e) => {
  e.preventDefault();
  const email = e.target.email.value
  const password = e.target.password.value
  if(email === '' || password === '') {
    swAlert.fire(
      'Los campos no pueden estar vacios'
      )
  }
  if(email !== '' && !regEmail.test(email)) swAlert.fire(
    'Debes ingresar un email valido'
    )
  //mail: challenge@alkemy.org
  //password: react
  axios
    .post('http://challenge-react.alkemy.org', {email, password})
    .then(res => 
      {
        const accessToken = res.data.token
        sessionStorage.setItem('token', accessToken)
        navigate('/listado')

      }
      
    )
    .catch(err=> {if(err.response.status === 401) swAlert.fire('Usuario o contraseña invalidos')})

}

let token = sessionStorage.getItem('token')


  return (
    <>
      {token && <Navigate to='/'/>}
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",  minHeight: '100vh' }}>
        <form onSubmit={submitHandler} style={{display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: "white", boxShadow: "2px 2px 10px 10px black", padding: 50}} id="login">
          <h2 style={{textAlign: "center"}}>LOGIN</h2>

          <label>
            <span>Email</span> 
            <br />
            <input type='text' name="email" />
          </label>
          <label>
            <span>Password</span>  
            <br />
            <input type="password" name="password" />
          </label>
          <div style={{display: "flex", justifyContent:"center", marginTop: 10}}>
            <button type="submit" >Ingresar</button>
          </div>
        </form>
    </div>
    </>
  )
}

export default Login
