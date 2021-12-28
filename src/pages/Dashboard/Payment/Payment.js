import React from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../store/adminDashboard";

const Payment = () => {
  const dispatch = useDispatch();
  dispatch(setPageTitle({ title: "Payment" }));

  return (
    <div>
      <h2 className="display-4 text-center mt-5">
        Payment system is Comming Soon!
      </h2>
    </div>
  );
};

export default Payment;
