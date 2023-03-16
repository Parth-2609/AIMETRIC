import React from 'react';
import ReactDOM from 'react-dom/client';
// import './Main.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Poppins&family=Yeseva+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Oswald:wght@700&family=Poppins&family=Yeseva+One&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@700&family=Oswald:wght@500;700&display=swap');

</style>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-k6wansjgdbewnm1n.us.auth0.com"
    clientId="NtZ8k06PdrR4uJ4DYuTf8egTddpXi5ip"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>
);