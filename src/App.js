
import Header from "./component/header";
import Home from "./component/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/contact";
import Store from "./component/store";


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
          <h2>IdOK</h2>
       <h1>Abc</>
          <>Thay doi o 123123</>
        </Routes>
        </BrowserRouter>
    </>
 
  );
}

export default App;
