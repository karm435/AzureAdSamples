# AzureAdSamples
My trials working with Azure Ad. Don't judge me by UI :)

# Implicit Flow 
I follow the steps mentioned in [Microsoft docs](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-aspnet-core-webapp#startup-class)

To know more about Implicit flow I would suggest go through these links
* [MSDN oauth2 implicit grant flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow)
* [Auth0 Implicit Flow](https://auth0.com/docs/flows/concepts/implicit)

To run the sample you might want to do few things
1. Create an Azure Ad tenant
2. Register your app in the Azure Ad
..1. Create .env.development file in the ClientApp and update the clientId and tenantId
3. Follow steps mentioned in blog [here] https://www.rahulpnath.com/blog/dot-net-core-api-and-azure-ad-groups-based-access/ by fellow colleague [Rahul](https://github.com/rahulpnath) to create security groups and enable Menifest to get those groups in Claims.
4. After creating the groups update the appsettings.json in Web project to reflect those changes under AdConfig section. 
5. Logout and login to the app to reflect these changes in the app.


