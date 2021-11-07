import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './Login';
import Player from './componentes/Player'
import './estilos/App.css';
import {
  redirectUrl,
  loginUrl,
  clientId,
  clientSecret
} from './spotify';

const code = new URLSearchParams(window.location.search).get('code');
console.log(code);

const App = () => {

  const [token, setToken] = useState('');

  useEffect(() => {
    if (code) {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('code', code);
      params.append('redirect_uri', redirectUrl); //Devuelve el authorization_code
      axios.post('https://accounts.spotify.com/api/token', params, {
        headers: {
          Authorization: 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64')),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(res => {
          console.log(res.data);
          setToken(res.data.access_token);
        })
    }
  }, []);

  const makeRequest = () => {
    // console.log(token);
    if (token) {
      axios.get('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })
        .then(res => console.log(res.data));
    }
  };
  

  return (
    <div className="App">
      {token ? <Player /> : <Login />}
    </div>


  );
};

export default App;
