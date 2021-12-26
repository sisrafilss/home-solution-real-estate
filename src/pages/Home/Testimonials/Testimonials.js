import Testimonial from "../Testimonial/Testimonial";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import { useEffect, useState } from "react";
import { loadTestimonials } from "../../../store/testimonials";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector((state) => state.entities.testimonials.list);

  useEffect(() => {
    dispatch(loadTestimonials());
  }, []);

  const sectionHead = {
    title: "What Our Customers are Saying",
    subTitle: "Take a loot, what our customers are saying about our services",
  };

  return (
    <div>
      <div>
        <SectionHead sectionHead={sectionHead} />
      </div>
      <div className="container mb-5">
        <div className="row g-4">
          {/* Couldn't use slider for lack of time */}
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
