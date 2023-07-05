import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Dash from "./components/Dashboard/Dash";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Retailer from "./components/Retailer";
import Manufacturer from "./components/Manufacturer";
import Farmer from "./components/Farmer";
import Consumer from "./components/Consumer";
import Supplier from "./components/Supplier";
import Manu from "./components/Manu";
import ManuDash from "./components/ManuDash";
import Farm from "./components/Farm";
import FarmDash from "./components/FarmDash";
import Reviews from "./components/Reviews";
import Directory from "./components/Directory";
import AddProducts from "./components/AddProducts";
import Products from "./components/Products";
import Traceability from "./components/Traceability";
import Tradeability from "./components/Tradeability";
import Reputation from "./components/Reputation";

const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{ login, userName, setLogin, setUserName }}>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Dash />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/farmer" element={<Farmer />} />
          <Route path="/consumer" element={<Consumer />} />
          <Route path="/retailer" element={<Retailer />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/manu" element={<Manu />} />
          <Route path="/manudash" element={<ManuDash />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/farmdash" element={<FarmDash />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/traceability" element={<Traceability />} />
          <Route path="/tradeability" element={<Tradeability />} />
          <Route path="/reputation" element={<Reputation />} />
        </Routes>
        <Footer />
      </div>
    </Appstate.Provider>
  );
}

export default App;
export { Appstate };
