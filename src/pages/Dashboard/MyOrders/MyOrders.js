import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import { cancellAnOrder, loadMyOrders } from "../../../store/userDashboard";

const MyOrders = () => {
  const { user } = useFirebase();
  const dispatch = useDispatch();
  const myOrders = useSelector((state) => state.entities.userDashboard.myOrders);
  //   const [productState, setProductState] = useState(false);

  // Load my orders from database
  useEffect(() => {
    dispatch(loadMyOrders(user.email));
  }, []);

  // handle Cancel/delete order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are sure, want to cancell?");
    if (proceed) {
        dispatch(cancellAnOrder(id));
    }
  };

  return (
    <div className="container">
      <div className="orders-container">
        {myOrders.length > 0 ? (
          <div>
            <h2 className="display-5 text-center my-4">
              Your All Orders: {myOrders.length < 1 ? 0 : myOrders.length}{" "}
            </h2>
            <div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Placed At</th>
                    <th scope="col">Order Status</th>
                    <th scope="col">Type</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  {myOrders?.map((order) => (
                    <tr key={order?._id}>
                      <th scope="row">
                        {" "}
                        {
                          <img
                            src={order?.flatDetail?.image}
                            style={{ height: "40px", width: "40px" }}
                            className="img-fluid"
                            alt=""
                          />
                        }{" "}
                      </th>
                      <td> {order?.flatDetail?.name} </td>
                      <td> ${order?.flatDetail?.price} </td>
                      <td> {order?.placedAt} </td>
                      <td> {order?.status} </td>
                      <td> {order?.orderType} </td>
                      <td>
                        {order?.payment ? (
                          "Paid"
                        ) : (
                          <Link
                            to={`/dashboard/payment`}
                            className="btn-primary btn btn-sm"
                          >
                            Pay
                          </Link>
                        )}
                      </td>
                      <td
                        onClick={() => handleDeleteOrder(order._id)}
                        style={{ cursor: "pointer" }}
                      >
                        X
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h1 className="text-center py-5">You have no Order Yet!</h1>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
