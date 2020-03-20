import * as Msal from "msal";
import {authority, CLIENT_ID} from "../appsettings";
import {AuthError, AuthResponse, UserAgentApplication} from "msal";

const config : Msal.Configuration = {
    auth: {
        clientId: CLIENT_ID,
        authority: authority,
        redirectUri: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        validateAuthority: false
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
    }
};

const apiAuthParams: Msal.AuthenticationParameters = {
    scopes: [`openid`]
};

let userAgentApplication: UserAgentApplication;
userAgentApplication = new UserAgentApplication(config);

const signInUser = () => {
    userAgentApplication.loginPopup(apiAuthParams).then((loginResponse) => {
        window.location.href = window.location.origin;
    }).catch((error: AuthError) => {
        if(error.errorCode === 'AADB2C90091'){
            window.location.href = window.location.origin;
        }
    });
};

const isSignedIn = () => {
    return userAgentApplication.getAccount() && !userAgentApplication.isCallback(window.location.hash);
};

const signOut = () => {
    userAgentApplication.logout();
};

function getAccountName() {
    const account = userAgentApplication.getAccount();
    return account && account.userName;
}

const getAccessTokenSilently  = async () : Promise<AuthResponse>  => {
        return await userAgentApplication.acquireTokenSilent(apiAuthParams);
};

export {isSignedIn, getAccessTokenSilently, signInUser, signOut, getAccountName };

