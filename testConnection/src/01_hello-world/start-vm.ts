import 'dotenv/config'
const {
    ClientSecretCredential,
    DefaultAzureCredential,
  } = require("@azure/identity");
  const { ComputeManagementClient } = require("@azure/arm-compute");
  
  // Azure authentication in environment variables for DefaultAzureCredential
  let credentials: null = null;
  
  const tenantId =
  process.env["AZURE_TENANT_ID"] || process.env.AZURE_TENANT_ID;
const clientId =
  process.env["AZURE_CLIENT_ID"] || process.env.AZURE_CLIENT_ID;
const secret =
  process.env["AZURE_CLIENT_SECRET"] || process.env.AZURE_CLIENT_SECRET;
const subscriptionId =
  process.env["AZURE_SUBSCRIPTION_ID"] || process.env.AZURE_SUBSCRIPTION_ID;
  
  const resourceGroupName = process.env.RESOURCE_GROUP;
  const vmResourceName = "testConnection";
  
  if (process.env.production) {
    // production
    credentials = new DefaultAzureCredential();
  } else {
    // development
    credentials = new ClientSecretCredential(tenantId, clientId, secret);
    console.log("development");
  }
  
  async function startVM() {
    const computeClient = new ComputeManagementClient(
      credentials,
      subscriptionId
    );
    const result = await computeClient.virtualMachines.beginStart(
      resourceGroupName,
      vmResourceName,
      "AbortSignalLike"
    );
    return result;
  }
  
  startVM()
    .then((result) => {
      console.log(JSON.stringify(result));
    })
    .catch((err) => {
      console.log(err);
    });
  
  /*
  
  Start operation results:
  
  {
    "startTime":"2021-10-27T16:35:59.6006484+00:00",
    "endTime":"2021-10-27T16:35:59.850632+00:00",
    "status":"Succeeded",
    "name":"1773c5e7-d904-4f98-b2a6-6e2f2465407f"
  }
  
  */