import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Context from "./context/context";
import {Routes,Route} from "react-router-dom";
import Order from "./pages/Orders/Order";
import Product from "./pages/Product/Product";
import Customer from "./pages/Costumer/Costumer";
import {MainLayout} from "./components/Layouts/MainLayout";

function App() {
    const [open,setOpen] = React.useState<boolean>(false)

    React.useEffect(()=>{

        const changeNavbar=()=>{
            window.innerWidth <= 600 ? setOpen(false) : setOpen(true)
        }
       window.addEventListener('resize',changeNavbar)
        return ()=>{
           window.removeEventListener('resize',changeNavbar)
        }
    },[])


  return (
          <Context.Provider value={{open,setOpen}}>
              <NavBar/>
              <Routes>
                  <Route path="/" element={<MainLayout/>}>
                      <Route path="dashboard" element={<Dashboard/>}/>
                      <Route path="order" element={<Order/>}/>
                      <Route path='product' element={<Product/>}/>
                      <Route path='customer' element={<Customer/>}/>
                  </Route>
              </Routes>
          </Context.Provider>
  );
}

export default App;
