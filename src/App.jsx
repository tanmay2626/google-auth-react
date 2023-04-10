import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import './App.css';

function App() {
  const [ user, setUser ] = useState({});

  const handleCallbackResponse = (res) =>{
    console.log(res.credential);
    const cred = jwt_decode(res.credential);
    console.log(cred);
    setUser(cred);
    document.getElementById("signIn").hidden = true;
  }

  const handleSignOut = () =>{
    setUser({});
    document.getElementById("signIn").hidden = false;
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

    google.accounts.id.prompt();
  },[])

  return (
    <div className="App">
    <div id='signIn'></div>
    {
      Object.keys(user).length !=0 &&
      <button onClick={handleSignOut}>Signout</button>
    }
    {
      user && <h1>{user.name}</h1>
    }
    </div>
  )
}

export default App
