import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Login from './Pages/LoginPages/Login'
import reportWebVitals from './reportWebVitals';
import MapExp from './Pages/MapExp';
import Task from './Pages/Task'
import ToDoListPage from './Pages/ToDoListPage';
import FormSubmission from './Pages/FormSubmission';
import CreditCard from './Pages/CreditCard';
import Jokes from './Pages/Jokes';
import { Provider } from 'react-redux';
import CounterApp from './Redux/CounterApp';
import store from './Redux/store';
import ToggleSwitch from './Redux/Toggle/ToggleSwitch';
const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = { HOME: 'Home', LOGIN: 'Login', FORMSUBMISSION: 'FormSubmission', CREDITCARD: 'CreditCard', JOKES: 'Jokes' }

root.render(
  <React.StrictMode>
    <App />
    {/* <MapExp /> */}
    {/* <Task /> */}
    {/* <ToDoListPage /> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.FORMSUBMISSION} element={<FormSubmission />} />
          <Route path={routes.CREDITCARD} element={<CreditCard />} />
          <Route path={routes.JOKES} element={<Jokes />} />

        </Route>
      </Routes>
    </BrowserRouter> */}
    <Provider store={store}>
      {/* <CounterApp /> */}
      {/* <ToggleSwitch /> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
