# AzureAdSamples
My trials working with Azure Ad. Don't judge me by UI :)

This is the beginning and I am hoping to evolve it over time to make it look more professional. :)

# Implicit Flow 
In this sample I have tried to do
1. Use Implicit flow to Authenticate the User
2. Add Authorization using Groups in Ad. 

I follow the steps mentioned in [Microsoft docs](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-aspnet-core-webapp#startup-class)

To know more about Implicit flow I would suggest go through these links
* [MSDN oauth2 implicit grant flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow)
* [Auth0 Implicit Flow](https://auth0.com/docs/flows/concepts/implicit)

To run the sample you might want to do few things
1. Create an Azure Ad tenant
2. Register your app in the Azure Ad
..1. Create .env.development file in the ClientApp and update the clientId and tenantId
3. Follow steps mentioned in blog [here](https://www.rahulpnath.com/blog/dot-net-core-api-and-azure-ad-groups-based-access/) by fellow colleague [Rahul](https://github.com/rahulpnath) to create security groups and enable Manifest to get those groups in Claims.
4. After creating the groups update the appsettings.json in Web project to reflect those changes under AdConfig section. 
5. Logout and login to the app to reflect these changes in the app.

# SPA B2C

If you follow the steps in the documentation you will have an Azure Ad B2c tenant and user flow to sign in and sign up a user. 


you would need to createa a .env.developement file next to the .env file in the root folder and update following variables

REACT_APP_CLIENT_ID=
REACT_APP_TENANT_ID=
REACT_APP_TENANT_NAME=
REACT_APP_SUSI_FLOW_ID= 

Also, I am loading the SPA from the aspnet core web app. So in my case the redirect url in the app registration is https://localhost:44321, which can be found in the launchSettings.json
