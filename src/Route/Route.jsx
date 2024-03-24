import { Route, Routes } from "react-router-dom";
import Layout from '../Layout/Layout';
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/Forms/SignIn";
import Profile from "../components/Profile/Profile";
import About from './../Pages/About/About';
import Blog from './../Pages/Blog/Blog';
import Books from './../Pages/Books/Books';
import Contract from './../Pages/Contract/Contract';
import Home from './../Pages/Home/Home';
import DashHome from "../Dashboard/Pages/DashHome/DashHome";
import DashProducts from "../Dashboard/Pages/DashProducts/DashProducts";
import DashUsers from "../Dashboard/Pages/DashUsers/DashUsers";
import DashLayout from "../Dashboard/DashLayout/DashLayout";
import DashAddProduct from "../Dashboard/Pages/DashAddProduct/DashAddProduct";
import SignUp from "../Pages/Forms/SignUp";

const AppRouter = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route  element={<DashLayout />}>
          <Route path="/dashboard" element={<DashHome />} />
          <Route path="/dashproducts" element={<DashProducts />} />
          <Route path="/dashusers" element={<DashUsers />} />
          <Route path="/dashaddproduct" element={<DashAddProduct />} />
        </Route> 
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
