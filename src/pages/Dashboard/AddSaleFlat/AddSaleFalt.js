import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSaleFlat } from "../../../store/adminDashboard";

const AddSaleFalt = () => {
  const dispatch = useDispatch();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { name, description, detail, image, price } = data;
    const saleFlatInfo = {
      name,
      description,
      image,
      price,
      detail: detail.split("\n"),
    };
    dispatch(addSaleFlat(saleFlatInfo));
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="mb-3">Insert Apartment Detail</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name of Aparment"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Short Description in one paragraph"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Deatil</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter Detail Information in single or multiple paragraph"
              {...register("detail", { required: true })}
            ></textarea>
            {errors.detail && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Service Image URL"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Price integer value"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-primary fw-bold"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddSaleFalt;
