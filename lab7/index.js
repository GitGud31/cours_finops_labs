const { BlobServiceClient } = require('@azure/storage-blob');

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AzureWebJobsStorage);

module.exports = async function (context, req) {
    const containerName = 'mycontainer'; // Use your existing container name
    const blobName = `message-${Date.now()}.txt`; // Unique blob name
    const content = "Hello, World! This message is saved in Blob Storage.";

    // Get a container client
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Create the container if it doesn't exist
    await containerClient.createIfNotExists();

    // Get a block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // Upload data to the blob
    await blockBlobClient.upload(content, Buffer.byteLength(content));

    context.res = {
        status: 200,
        body: `Blob ${blobName} uploaded successfully!`
    };
};
