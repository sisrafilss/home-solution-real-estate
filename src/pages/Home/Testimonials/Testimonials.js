import Testimonial from "../Testimonial/Testimonial";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import { useEffect, useState } from "react";

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('https://mighty-woodland-85261.herokuapp.com/testimonials')
    .then(res => res.json())
    .then(data => setTestimonials(data));
  }, [])

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
