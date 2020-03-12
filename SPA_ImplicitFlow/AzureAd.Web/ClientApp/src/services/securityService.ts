import * as Msal from "msal";
import {authority, CLIENT_ID} from "../appsettings";
import {AuthError, AuthResponse, UserAgentApplication} from "msal";

const config : Msal.Configuration = {
    auth: {
        clientId: CLIENT_ID,
        authority: authority,
        redirectUri: window.location.origin,
        postLogoutRedirectUri: window.location.origin
    },
    cache: {
        cacheLocation: "sessionStorage"
    }
};

const apiAuthParams: Msal.AuthenticationParameters = {
    scopes: [config.auth.clientId]
};

let userAgentApplication: UserAgentApplication;
userAgentApplication = new UserAgentApplication(config);

userAgentApplication.handleRedirectCallback((authErr: AuthError, response?: AuthResponse) => {
    //TODO: validate the id token
    if (authErr) {
        console.error(authErr);
    }
});

const signInUser = () => {
    userAgentApplication.loginRedirect(apiAuthParams);
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

