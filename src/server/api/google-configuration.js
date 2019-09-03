import {google} from 'googleapis';

const googleConfig = {
    clientId: "73971589892-5l9jbc8rv7bvv46qg9oluhj9rc766ace.apps.googleusercontent.com",
    clientSecret: "mbnJxiF4etAuDUyvme4fv-ap",
    redirect: 'http://localhost'
};

/**
 * Crea el google auth, el cual accederá a la API de Google
 */
function createConnection(){
    return new google.auth.OAuth2(googleConfig. clientId, googleConfig.clientSecret, googleConfig.redirect);
}