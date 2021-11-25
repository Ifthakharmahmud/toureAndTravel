import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Account/Login";
import Registration from "./Components/Account/Registration";
import AddPackage from "./Components/AddPackage/AddPackage";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Nopage from "./Components/Common/Nopage/Nopage";
import Home from "./Components/Home/Home";
import Singleservice from "./Components/Home/Services/Singleservice/Singleservice";
import ManageOrders from "./Components/ManageOrders/ManageOrders";
import MyOrders from "./Components/MyOrders/MyOrders";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"> <Home></Home></Route>
          <Route path="/home"> <Home></Home></Route>
          <Route path="/login"> <Login></Login></Route>
          <Route path="/registration"> <Registration></Registration> </Route>
          <PrivateRoute exact path="/service/:serviceId"><Singleservice></Singleservice></PrivateRoute>
          <PrivateRoute path="/new_package">
            <AddPackage></AddPackage>
          </PrivateRoute>
          
          <PrivateRoute exact path="/place_order/:orderId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute  path="/manage_orders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute  path="/my_orders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          

          <Route path='/*'><Nopage></Nopage></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
