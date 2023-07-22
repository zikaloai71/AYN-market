import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product"
import PrivateRoute from "./components/PrivateRoute";

import { ApolloProvider } from "@apollo/client";
import {client} from "./apollo/setup";
import ProfileDirect from "./pages/ProfileDirect";
import Cart from "./pages/Cart";
import CategoryProducts from "./pages/CategoryProducts";
import EmailConfirm from "./pages/EmailConfirm";
import ResetPassword from "./pages/ResetPassword";
import CheckOut from "./pages/CheckOut";

import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";

import NotFound from "./pages/NotFound";
import CustomerOrders from "./pages/CustomerOrders";

function App() {

  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfileDirect/>} />
            <Route path="/profile/orders/:id" element={<CustomerOrders/>} />
      </Route>

      <Route path="/LogIn" element={<LogIn/>} />
      <Route path="/SignUp" element={<SignUp/>} />
     
      <Route path="/emailConfirm/:uid/:token" element={<EmailConfirm/>} />
      <Route path="/resetPassword/:uid/:token" element={<ResetPassword/>} />
       
      <Route path="/products/:category" element={<CategoryProducts/>} />

      <Route path="/product" element={<Product/>} />
      
    
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkOut" element={<CheckOut/>}/>
    
      
      <Route path="/payment/success/*" element={<PaymentSuccess />} />
      <Route path="/payment/cancel/*" element={<PaymentCancel />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
    <Footer />
  </BrowserRouter>
  </ApolloProvider>
  )
  }
export default App
