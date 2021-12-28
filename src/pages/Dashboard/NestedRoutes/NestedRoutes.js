import React from "react";
import { Route, Routes } from "react-router-dom";
// import useFirebase from "../../../hooks/useFirebase";
import MyOrders from "../MyOrders/MyOrders";

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
      {/* <MyOrders setPageTitle={setPageTitle} /> */}
      {/* </Route> */}
      {/* <Route path={`${path}/payment/:paymentId`}>
                <Payment setPageTitle={setPageTitle} />
            </Route>
            <Route path={`${path}/review`}>
                <Review setPageTitle={setPageTitle} />
            </Route>
            <Route path={`${path}/logout`}>
                <LogOut setPageTitle={setPageTitle} />
            </Route>

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
