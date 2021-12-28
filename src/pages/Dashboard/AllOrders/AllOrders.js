import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  approveOrder,
  deleteOrder,
  loadOrders,
  setPageTitle,
} from "../../../store/adminDashboard";

const AllOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.entities.adminDashboard.orders);

  // Set page title
  dispatch(setPageTitle({ title: "All Orders" }));

  // const [orders, setOrders] = useState([]);
  //   const [ordersChange, setOrdersChange] = useState(false);

  // Load all orders from Server
  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  // Handle Order Status
  const handleApprove = (id) => {
    dispatch(approveOrder(id));
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, want to delete?");
    if (proceed) {
      dispatch(deleteOrder(id));
    }
  };
  return (
    <div className="container py-4">
      <div className="orders-container">
        {/* <h1 className={orders.length && "hidden"}>There is no Order Yet!</h1> */}
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Service Name</th>
                <th scope="col">Ordered By</th>
                <th scope="col">Placed At</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
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
                  <td> {order?.email} </td>
                  <td> {order?.placedAt} </td>
                  <td> {order?.status} </td>
                  <td> {order?.orderType} </td>
                  <td
                    // onClick={() => handleCancelOrder(order._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Actions
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-dark actions-container"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li
                          onClick={() => handleApprove(order?._id)}
                          className="dropdown-item"
                        >
                          Approve
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li
                          onClick={() => handleDelete(order?._id)}
                          className="dropdown-item"
                        >
                          Delete
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
