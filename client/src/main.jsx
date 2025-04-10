import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Home from './Home.jsx';
import Success from './Success.jsx';
import AppContextProvider from './context/AppContext.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import { Provider } from 'react-redux';
import store from './store';
import GroceryList from './GroceryList.jsx';
// import HomePage from './HomePage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<App />}>
      <Route path="home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="success" element={<Success />} />
      <Route path="grocery" element={<GroceryList />} />
      {/* <Route index element={<HomePage />} />  */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppContextProvider>
  </React.StrictMode>
);