import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import Users from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.css";
import NavTabs from "./components/NavTabs";
import ListMyRide from "./pages/ListMyRide";
import FindMyRide from "./pages/FindMyRide";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import UserProvider from "./context/UserContext";
import Profile from "./pages/Profile";
import BookMyRide from "./pages/BookMyRide";
import BookedRentalSuccess from "./pages/BookedRentalSuccess";
import CreatedListingSuccess from "./pages/CreatedListingSuccess";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// color pallete for the site
var bgColors = {
  Timberwolf: "#eadeda",
  Cinerous: "#998888",
  "Pale Silver": "#bfb8ad",
  "Burnt Umber": "#823329",
  Brandy: "#8a3033",
};

function LayOut({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <UserProvider>
          <LayOut>
            <NavTabs />
            <div className="bgSiteTimber" style={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/users" element={<Users />} />
                <Route path="/list-my-ride" element={<ListMyRide />} />
                <Route path="/find-my-ride" element={<FindMyRide />} />
                <Route path="/login" element={<Login />} />
                <Route path="/book-my-ride/:car_id" element={<BookMyRide />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/booked-rental-success"
                  element={<BookedRentalSuccess />}
                />
                <Route
                  path="/created-listing-success"
                  element={<CreatedListingSuccess />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </LayOut>
        </UserProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
