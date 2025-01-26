import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Ticket from "./pages/Ticket/Ticket";

import Layout from "./layouts/Layout/Layout";

import './App.css';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/ticket/trains' element={<Ticket type='trains' /> } />
        <Route path='/ticket/seats' element={<Ticket type='seats' />} />
        <Route path='/ticket/passengers' element={<Ticket type='passengers' />} />
        <Route path='/ticket/payment' element={<Ticket type='payment' />} />
        <Route path='/ticket/check' element={<Ticket type='check' />} />

        {/* 
        <Route path="/sucsess" element={<Sucsess />} />        
        <Route path="*" element={<NotFound />} /> */}
      </Route>
    )
  );

  return (
    <RouterProvider router={routes} />
  )
}

export default App;