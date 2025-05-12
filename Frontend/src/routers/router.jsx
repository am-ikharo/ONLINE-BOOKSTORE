import * as React from "react";
import * as ReactDOM from "react-dom";
import {createBrowserRouter} from "react-router-dom";
import App from '../App.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path:'/',
            element: <h1>Home</h1>
        },
        {
            path:'/orders',
            element: <div>Orders</div>
        }
    ]
   
  },
]);

export default router;
