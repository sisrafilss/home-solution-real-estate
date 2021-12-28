import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { makeAnAdmin, setPageTitle } from "../../../store/adminDashboard";

const MakeAdmin = () => {
  const dispatch = useDispatch();
  // Set page title
  dispatch(setPageTitle({ title: "Make Admin" }));

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(makeAnAdmin(data.email));
    console.log(data.email);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Enter email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-warning">This field is required</span>
          )}
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
