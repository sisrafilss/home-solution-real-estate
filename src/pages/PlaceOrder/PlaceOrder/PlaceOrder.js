import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import { loadSingleFlatDetail } from "../../../store/flatSale";
import { saveOrderToDb, clearOrderInfo } from "../../../store/orders";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import FlatDetail from "../FlatDetail/FlatDetail";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { id } = useParams();
  const { user } = useFirebase();
  const dispatch = useDispatch();
  const insertedId = useSelector(
    (state) => state.entities.orders.orderSavedToDbInfo.insertedId
  );

  // Set product detail to the store
  useEffect(() => {
    dispatch(loadSingleFlatDetail(id));
  }, []);

  const flatDetail = useSelector(
    (state) => state.entities?.saleFlats?.flatDetail
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const order = {
      ...data,
      placedAt: new Date().toLocaleString(),
      flatDetail,
    };
    console.log(order);
    dispatch(saveOrderToDb(order));
    // if (insertedId) {
    //   alert("Order Placed Successfully!");
    //   dispatch(clearOrderInfo());
    // }
  };

  return (
    <div>
      <Navigation />
      <FlatDetail />

      <div>
        <div className="form-container">
          <div className="mb-4">
            <h2>Please Confirm the Detail and Place an Order</h2>
          </div>
          <form onClick={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                defaultValue={user?.displayName}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Full Address</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Full Address"
                {...register("address", { required: true })}
              ></textarea>
              {errors.address && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="City name"
                {...register("city", { required: true })}
              />
              {errors.city && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <input
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              type="submit"
              className="btn btn-primary fw-bold"
              value="Place Order"
            />
          </form>
          {/* {orderSuccess && (
            <div
              className="alert alert-success mt-5 alert-dismissible fade show"
              role="alert"
            >
              Order Placed Successfully.
              <button
                onClick={() => setOrderSuccess(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )} */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlaceOrder;
