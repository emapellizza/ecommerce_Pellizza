import {BrowserRouter, Routes, Route} from "react-router-dom"

//header y footer
import NavBar from "./components/NavBar/NavBar"
//import Footer from ""./components/NavBar/Footer"

//pages
import PageNotFound from "./components/Pages/NotFound"
import HomePage from "./components/Pages/Home"
import DetailPage from "./components/Pages/Detail"
import CartPage from "./components/Pages/Cart"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:id" element={<DetailPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
         
      </BrowserRouter>
  
    </div>
  );
}

export default App;
