import React from "react";
import { Route, Routes } from "react-router-dom";
import AddSaleFalt from "../AddSaleFlat/AddSaleFalt";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllOrders from "../AllOrders/AllOrders";
import LogOut from "../LogOut/LogOut";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import AddRentFalt from "../AddRentFlat/AddRentFlat";

const NestedRoutes = () => {
  //   const { admin } = useFirebase();
  return (
    <Routes>
      {/* Separate Dashboard default page for admin ad subscriber */}
      {/* {
                admin ? <AdminRoute exact path={`${path}`}>
                    <ManageAllOrders setPageTitle={setPageTitle} />
                </AdminRoute> :
                    <Route exact path={`${path}`}>
                        <MyOrders setPageTitle={setPageTitle} />
                    </Route>
            } */}
      <Route path="my-orders" element={<MyOrders />} />
      <Route path="payment" element={<Payment />} />
      <Route path="review" element={<Review />} />
      <Route path="logout" element={<LogOut />} />
      <Route
        path="orders"
        element={
          <AdminRoute>
            <AllOrders />
          </AdminRoute>
        }
      />
      <Route
        path="add-sale-flat"
        element={
          <AdminRoute>
            <AddSaleFalt />
          </AdminRoute>
        }
      />
      <Route
        path="add-rent-flat"
        element={
          <AdminRoute>
            <AddRentFalt />
          </AdminRoute>
        }
      />

      {/* 


            <AdminRoute path={`${path}/manage-all-orders`}>
                <ManageAllOrders setPageTitle={setPageTitle} />
            </AdminRoute>
            <AdminRoute path={`${path}/add-product`}>
                <AddProduct setPageTitle={setPageTitle} />
            </AdminRoute>
            <AdminRoute path={`${path}/make-admin`}>
                <MakeAdmin setPageTitle={setPageTitle} />
            </AdminRoute>
            <AdminRoute path={`${path}/manage-products`}>
                <ManageProducts setPageTitle={setPageTitle} />
            </AdminRoute> */}
    </Routes>
  );
};

export default NestedRoutes;
