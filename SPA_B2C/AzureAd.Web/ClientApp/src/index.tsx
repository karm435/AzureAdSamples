import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { isSignedIn } from "services/securityService";
import {LandingPage} from "./views/LandingPage/LandingPage";

if (!isSignedIn()) {
    ReactDOM.render(<LandingPage/>, document.getElementById('root'));
}
else if(isSignedIn()){
    ReactDOM.render(<App/>, document.getElementById('root'));
}
else{
    console.error('Error while authenticating');
}
