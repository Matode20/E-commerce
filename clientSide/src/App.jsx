import { Route, Routes } from "react-router-dom";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AuthLayout from "./components/authLayout";
import AdminLayout from "./pages/auth/admin/layout";
import AdminFeatures from "./pages/auth/admin-view/features";
import AdminOrders from "./pages/auth/admin-view/orders";
import AdminProducts from "./pages/auth/admin-view/products";
import AdminDashboard from "./pages/auth/admin-view/dashboard";
import ShoppingLayout from "./pages/auth/shopping-view/layout";
import NotFound from "./pages/auth/not-found";
import ShoppingHome from "./pages/auth/shopping-view/home";
import ShoppingListing from "./pages/auth/shopping-view/listing";
import ShoppingCheckout from "./pages/auth/shopping-view/checkout";
import ShoppingAccount from "./pages/auth/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";

function App() {
  const isAuthenticated = false;
  const user = null;
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
      </Routes>
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
      <Route path="*" element={<NotFound />}></Route>
    </div>
  );
}

export default App;
