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
import NavTabs from './components/NavTabs';
import RentalForm from './pages/RentalForm';
import Rentals from './pages/Rentals';

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
                path="/rentalform" 
                element={<RentalForm />}
              />
               <Route 
                path="/rentals" 
                element={<Rentals />}
              />
              <Route 
                path="/login" 
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


