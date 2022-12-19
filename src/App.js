import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {NavbarComponent} from "./Navbar/NavbarComponent";
import {Home} from "./Components/Home";
import {CreateProduct} from "./Components/CreateProduct";
import {AllProducts} from "./Components/AllProducts";
import {CreateDelivery} from "./Components/CreateDelivery";
import {AllData} from "./Components/AllData";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent/>
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/createProduct" element={<CreateProduct/>}/>
          <Route exact path ="/allProducts" element={<AllProducts/>}/>
          <Route exact path ="/createDelivery" element={<CreateDelivery/>}/>

          <Route exact path ="/allData" element={<AllData/>}/>
          <Route path = "*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
