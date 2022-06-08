import 'dotenv/config'
const {
    ClientSecretCredential,
    DefaultAzureCredential,
  } = require("@azure/identity");
  //const { ResourceManagementClient } = require("@azure/arm-resources");
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
  
  async function deleteResourceGroup() {
    // Create Azure SDK client for Resource Management such as resource groups
    const computeClient = new ComputeManagementClient(
      credentials,
      subscriptionId
    );
  
    const result = await computeClient.virtualMachines.beginDelete(
      resourceGroupName,
      vmResourceName,
      "AbortSignalLike"
    );
    console.log(JSON.stringify(result));
  }
  
  deleteResourceGroup()
    .then((result) => {
      console.log(result);
    })
    .catch((ex) => {
      console.log(ex);
    });