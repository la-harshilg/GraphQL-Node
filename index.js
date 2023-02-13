const path = require("path");
const express = require("express");
// const { buildSchema } = require("graphql");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
// const { graphqlHTTP } = require("express-graphql");
const { ApolloServer } = require("apollo-server-express");

const typeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

//! in schema means required

async function startApolloServer() {
  const app = express();
  const schema = makeExecutableSchema({
    typeDefs: typeArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema: schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(3000, () => {
    console.log("Listening to port 3000.......");
  });
}

// const root = {
//   products: require("./products/products.model"),
//   orders: require("./orders/orders.model"),
// };

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

startApolloServer();
