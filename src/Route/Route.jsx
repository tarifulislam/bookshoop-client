import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Layout from './../Layout/Layout';
import About from './../Pages/About/About';
import Blog from './../Pages/Blog/Blog';
import Books from './../Pages/Books/Books';
import Contract from './../Pages/Contract/Contract';
import SignIn from './../Pages/Forms/SignIn';
import SignUp from './../Pages/Forms/SignUp';
import Home from './../Pages/Home/Home';

const myRouter = createBrowserRouter([
  {
    path: "/",
    element:  <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/books",
        element: <Books></Books>
      },
      {
        path: "/contract",
        element: <Contract></Contract>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ]
  },
]);

export default myRouter;
