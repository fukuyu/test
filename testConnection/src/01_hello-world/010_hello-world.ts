// const {
//     ClientSecretCredential,
//     DefaultAzureCredential,
//   } = require("@azure/identity");
//   const { ComputeManagementClient } = require("@azure/arm-compute");
  
//   // Azure authentication in environment variables for DefaultAzureCredential
//   var credentials: null = null;
//   const tenantId =
//     process.env["AZURE_TENANT_ID"] || "8d41d6d7-36ce-4e0c-8c6d-cf2c54c39039";
//   const clientId =
//     process.env["AZURE_CLIENT_ID"] || "60aedd7b-df23-4439-bc90-78737a3dfd8d";
//   const secret =
//     process.env["AZURE_CLIENT_SECRET"] || ".P38Q~djEg_ipKF8ZZEHaKXTlA-tWg8cbshPAb95";
//   const subscriptionId =
//     process.env["AZURE_SUBSCRIPTION_ID"] || "6388a8b1-d3ca-4872-b220-2f0e21e65586";
  
//   if (process.env.production) {
//     // production
//     credentials = new DefaultAzureCredential();
//   } else {
//     // development
//     credentials = new ClientSecretCredential(tenantId, clientId, secret);
//     console.log("development");
//   }
  
//   async function listVMs() {
//     // use credential to authenticate with Azure SDKs
//     const client = new ComputeManagementClient(credentials, subscriptionId);
  
//     // get details of each subscription
//     const listResult = new Array();
//     for await (const item of client.virtualMachines.listAll()) {
//       console.log(item);
//       listResult.push(item);
//     }
// }