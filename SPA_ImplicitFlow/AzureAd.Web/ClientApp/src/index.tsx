import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { isSignedIn, signInUser } from "services/securityService";

if (!isSignedIn()) {
    signInUser();
}
else if(isSignedIn()){
    ReactDOM.render(<App/>, document.getElementById('root'));
}
else{
    console.error('Error while authenticating');
}

