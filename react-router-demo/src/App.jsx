import "./App.css";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
