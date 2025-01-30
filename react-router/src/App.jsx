import './App.css';
// import  { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import {BrowerRouter}
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </main>
  )
}

export default App;
