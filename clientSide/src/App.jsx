import { Route, Routes } from "react-router-dom";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AuthLayout from "./components/authLayout";
import AdminLayout from "./pages/auth/admin-view/AdminLayout";
import AdminFeatures from "./pages/auth/admin-view/Features";
import AdminOrders from "./pages/auth/admin-view/Orders";
import AdminProducts from "./pages/auth/admin-view/Products";
import AdminDashboard from "./pages/auth/admin-view/Dashboard";
import ShoppingLayout from "./pages/auth/shopping-view/Layout";
import NotFound from "./pages/auth/not-found/Not-found";
import ShoppingHome from "./pages/auth/shopping-view/Home";
import ShoppingListing from "./pages/auth/shopping-view/Listing";
import ShoppingCheckout from "./pages/auth/shopping-view/Checkout";
import ShoppingAccount from "./pages/auth/shopping-view/Account";
import CheckAuth from "./components/common/Check-auth";
import UnauthPage from "./pages/unauth-page/Index";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = false;
  const user = null;

const {user, isAuthenticated} = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component */}
      <h1>Header component</h1>

      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="features" element={<AdminFeatures />} />
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        <Route path="unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
