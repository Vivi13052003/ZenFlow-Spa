
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
          <h2>meo cafe</h2>
          <>Thay doi o nhanh Dang Nhap</>
            <h2>meo cafe</h2>

            <h2>meo cafe</h2>
          <h2>meo cafe</h2>

        </Routes>
        </BrowserRouter>
    </>
 
  );
}

export default App;
