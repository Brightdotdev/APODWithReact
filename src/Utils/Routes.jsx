import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import {dateLoader, nasaLoader } from "./Api"
import ErrorPage from "../Pages/ErrorPage"
import Details from "../Pages/Details"
import FourOhFour from "../components/FourOhFour"

  
 
 
 const router  = createBrowserRouter([
    {
    path :"/", 
    element : <App/>, 
    // loader : nasaLoader,
    errorElement : <ErrorPage/>},
  
    { path : '*',
      element : <FourOhFour/>},

    { path : 'details/:date',
      // loader : dateLoader,
      element : <Details/>},
  ])
  





export default router