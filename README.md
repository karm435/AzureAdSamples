# AzureAdSamples
My trials working with Azure Ad. Don't judge me by UI :)

# Implicit Flow 
To run the sample you might want to do few things
1. Create an Azure Ad tenant
2. Register your app in the Azure Ad
..1. Create .env.development file in the ClientApp and update the clientId and tenantId
3. Follow steps mentioned in blog [here] https://www.rahulpnath.com/blog/dot-net-core-api-and-azure-ad-groups-based-access/ by fellow colleague [Rahul](https://github.com/rahulpnath) to create security groups and enable Menifest to get those groups in Claims.
4. After creating the groups update the appsettings.json in Web project to reflect those changes under AdConfig section. 
5. Logout and login to the app to reflect these changes in the app.


