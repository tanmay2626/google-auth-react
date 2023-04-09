import { useEffect } from 'react'
import jwt_decode from "jwt-decode";
import './App.css'

function App() {

  const handleCallbackResponse = (res) =>{
    const user = jwt_decode(res.credential);
    console.log(user);
  }
  
  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id : "73911737589-pet5993a7ellig1aikd1ljlf65ecdopf.apps.googleusercontent.com",
      callback : handleCallbackResponse
    },[])

    google.accounts.id.renderButton(
      document.getElementById('signIn'),
      { theme : "outline", size : "large" }
    )
  },[])

  return (
    <div className="App">
    <div id='signIn'></div>
    </div>
  )
}

export default App
