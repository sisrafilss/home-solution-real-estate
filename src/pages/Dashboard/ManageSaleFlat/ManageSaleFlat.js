import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteSaleFalt,
  getAllSaleFlats,
  setPageTitle,
} from "../../../store/adminDashboard";

const ManageSaleFlat = () => {
  const dispatch = useDispatch();

  // Set page title
  dispatch(setPageTitle({ title: "Manage Sale Flats" }));

  const saleFlats = useSelector(
    (state) => state.entities.adminDashboard.allSaleFlats
  );

  // Load all products from database
  useEffect(() => {
    dispatch(getAllSaleFlats());
  }, []);

  // Handle delete a product
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, want to delete?");
    if (proceed) {
      dispatch(deleteSaleFalt(id));
    }
  };

  return (
    <div className="container">
      <div className="orders-container">
        {/* <h1 className={myOrders.length && "hidden"}>You have no Order Yet!</h1> */}
        <h2 className="display-5 text-center my-4">Manage Sale Flats</h2>
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {saleFlats.map((product) => (
                <tr key={product._id}>
                  <th scope="row">
                    {" "}
                    {
                      <img
                        src={product?.image}
                        style={{ height: "40px", width: "40px" }}
                        className="img-fluid"
                        alt=""
                      />
                    }{" "}
                  </th>
                  <td> {product?.name} </td>
                  <td> ${product?.price} </td>
                  <td
                    // onClick={() => handleCancelOrder(order._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <button
                      onClick={() => handleDelete(product?._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
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

export default ManageSaleFlat;
