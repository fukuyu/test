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
  
  if (process.env.production) {
    // production
    credentials = new DefaultAzureCredential();
  } else {
    // development
    credentials = new ClientSecretCredential(tenantId, clientId, secret);
  }
  
  async function listVMsStatus() {
    // Set params to only ask for status
    const virtualMachinesListAllOptionalParams = { statusOnly: "true" };
  
    const computeClient = new ComputeManagementClient(
      credentials,
      subscriptionId
    );
  
    const result = new Array();
    for await (const item of computeClient.virtualMachines.listAll(
      virtualMachinesListAllOptionalParams
    )) {
      result.push(item);
    }
    result.map((vm) => {
      console.log(`${vm.name}`);
      vm.instanceView.statuses.map((status: { displayStatus: any; time: any; }) => {
        console.log(
          `---${status.displayStatus} ${status.time ? status.time : ""}`
  
          /*
          Example: 
            johnsmithvm6859
            ---Provisioning succeeded Thu Oct 28 2021 10:41:03 GMT-0700 (Pacific Daylight Time)
            ---VM running
          */
        );
      });
    });
  }
  
  listVMsStatus()
    .then((result) => {
      console.log("done");
    })
    .catch((ex) => {
      console.log(ex);
    });