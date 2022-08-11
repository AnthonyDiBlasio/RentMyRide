require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const { User, Car } = require('./models');

const  { authMiddleware } = require('./utils/auth')

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// const seedData = require('./seeds/seedData.json')
const carData = require('./seeds/seedCar.json');
const userData = require('./seeds/seedUser.json');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.post("/seedDatabase", async (req, res) => {
      if (req.body.SEEDPASS === process.env.SEEDPASS) {
        await User.deleteMany({});
        await Car.deleteMany({});

        const users = await User.insertMany(userData);
        const cars = await Car.insertMany(carData);
        res.json(users, cars);
      }
      else {
        res.json("this is not working")
      }
    });

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
