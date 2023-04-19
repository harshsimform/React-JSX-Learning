// to connect our react app with Browser's URL we need "BrowserRouter"
// "Routes" are used to contain paths must be inside BrowserRouter
// "Route" will include specific path in it with component
import {
  BrowserRouter,
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Routing/Navbar";
import About from "./Routing/About";
import Blog from "./Routing/Blog";
import Contact from "./Routing/Contact";
import Footer from "./Routing/Footer";
import PageNotFound from "./Routing/PageNotFound";
import Home from "./Routing/Home";
import "./AppRoute.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    // Nested routing 👇️
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/footer" element={<Footer />} />
      {/* 👇️ only match this when no other routes match  */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const AppRoute = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* Nested routing 👇️  */}
    //     <Route path="/" element={<Home />}>
    //       <Route path="/about" element={<About />} />
    //       <Route path="/blog" element={<Blog />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/footer" element={<Footer />} />
    //       {/* 👇️ only match this when no other routes match */}
    //       <Route path="*" element={<PageNotFound />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
};

export default AppRoute;

/* Simple Routing  */
/* <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/blog" element={<Blog />} />
<Route path="/footer" element={<Footer />} />
<Route path="*" element={<PageNotFound />} /> */
