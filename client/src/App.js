import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import UserForm from './pages/UserForm';
import 'bootstrap/dist/css/bootstrap.css';
import NavTabs from './components/NavTabs'

import UserProvider from './context/UserContext';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// color pallete for the site 
var bgColors = { "Timberwolf": "#eadeda",
                    "Cinerous": "#998888",
                    "Pale Silver": "#bfb8ad",
                    "Burnt Umber": "#823329",
                    "Brandy": "#8a3033",
};


function App() {
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavTabs />
        <UserProvider>
          <div className=" min-100-vh bgSiteTimber">
            <Routes>
              <Route 
                path="/" 
                element={<Home />}
              />
              <Route 
                path="/signup" 
                element={<UserForm />}
              />
              <Route 
                path="/users" 
                element={<Users />}
              />
              <Route 
                path="/login" 
                // component={Login}
                element={(
                  <Login />
                )}
                
              />
              <Route 
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </div>
        </UserProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;

// commenting out this portion is for when we are ready to render Rent My Ride/delete turtle shit :)
// import "./App.css";
// // after some troubleshooting, i found that we will need to follow newer syntax in order to render react-router-dom version 6.  (i.e. include <Route> inside of <Routes>)
// import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Booking from "./pages/Booking";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<Home />} />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//           <Route path="booking" element={<Booking />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
