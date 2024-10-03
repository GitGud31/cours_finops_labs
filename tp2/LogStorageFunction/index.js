const { BlobServiceClient } = require("@azure/storage-blob");
const connectionString = process.env.AzureWebJobsStorage;
const blobServiceClient =
  BlobServiceClient.fromConnectionString(connectionString);
const containerName = "logs";

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const logData = req.body;

  if (!logData) {
    context.res = {
      status: 400,
      body: "Invalid JSON",
    };
    return;
  }

  const blobName = `log_${logData.user_id}_${Date.now()}.json`;
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    await blockBlobClient.upload(
      JSON.stringify(logData),
      JSON.stringify(logData).length
    );
    context.res = {
      status: 200,
      body: `Log stored successfully in blob: ${blobName}`,
    };
  } catch (err) {
    context.res = {
      status: 500,
      body: `Error storing log: ${err.message}`,
    };
  }
};
