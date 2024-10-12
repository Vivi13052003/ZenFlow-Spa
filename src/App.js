
import Header from "./component/header";
import Home from "./component/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./component/store";
import Contact from "./component/contact";







function App() {
  return (
    <>
      
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <h1>Thay doi</h1>
        </Routes>
        </BrowserRouter>
    </>
 
  );
}

export default App;
