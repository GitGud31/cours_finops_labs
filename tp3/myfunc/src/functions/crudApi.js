const { CosmosClient } = require("@azure/cosmos");

// Connection details
const endpoint = process.env.COSMOS_DB_ENDPOINT;
const key = process.env.COSMOS_DB_KEY;
const databaseId = "usersdb";
const containerId = "users";

// Initialize Cosmos Client
const client = new CosmosClient({ endpoint, key });

module.exports = async function (context, req) {
  const container = client.database(databaseId).container(containerId);

  if (req.method === "GET") {
    const { resources: users } = await container.items.readAll().fetchAll();
    context.res = {
      status: 200,
      body: users,
    };
  } else if (req.method === "POST") {
    const userData = req.body.data;
    const { resource: createdItem } = await container.items.create(userData);
    context.res = {
      status: 201,
      body: { message: "User added!", user: createdItem },
    };
  } else if (req.method === "PUT") {
    const userId = req.body.id;
    const userData = req.body.data;
    await container.item(userId).replace(userData);
    context.res = {
      status: 200,
      body: "User updated!",
    };
  } else if (req.method === "DELETE") {
    const userId = req.body.id;
    await container.item(userId).delete();
    context.res = {
      status: 200,
      body: "User deleted!",
    };
  } else {
    context.res = {
      status: 400,
      body: "Method not supported!",
    };
  }
};
