// const {
//   ClientSecretCredential,
//   DefaultAzureCredential,
// } = require("@azure/identity");
// const { ComputeManagementClient } = require("@azure/arm-compute");

// // Azure authentication in environment variables for DefaultAzureCredential
// let credentials: null = null;
// const tenantId =
// process.env["AZURE_TENANT_ID"] || "8d41d6d7-36ce-4e0c-8c6d-cf2c54c39039";
// const clientId =
// process.env["AZURE_CLIENT_ID"] || "60aedd7b-df23-4439-bc90-78737a3dfd8d";
// const secret =
// process.env["AZURE_CLIENT_SECRET"] || ".P38Q~djEg_ipKF8ZZEHaKXTlA-tWg8cbshPAb95";
// const subscriptionId =
// process.env["AZURE_SUBSCRIPTION_ID"] || "6388a8b1-d3ca-4872-b220-2f0e21e65586";

// const resourceGroupName = "HAL-OH22-RG-IHIW4C-GroupA";
// const vmResourceName = "testConnection";

// if (process.env.production) {
//   // production
//   credentials = new DefaultAzureCredential();
// } else {
//   // development
//   credentials = new ClientSecretCredential(tenantId, clientId, secret);
//   console.log("development");
// }

// async function stopVM() {
//   const computeClient = new ComputeManagementClient(
//     credentials,
//     subscriptionId
//   );
//   const result = await computeClient.virtualMachines.beginPowerOff(
//     resourceGroupName,
//     vmResourceName,
//     "AbortSignalLike"
//   );
//   return result;
// }

// stopVM()
//   .then((result) => {
//     console.log(JSON.stringify(result));
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// /*

// Stop operation results:

// {
//   "startTime":"2021-10-27T16:35:59.6006484+00:00",
//   "endTime":"2021-10-27T16:35:59.850632+00:00",
//   "status":"Succeeded",
//   "name":"1773c5e7-d904-4f98-b2a6-6e2f2465407f"
// }

// */