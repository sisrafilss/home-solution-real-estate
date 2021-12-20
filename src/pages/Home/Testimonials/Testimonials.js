import Testimonial from "../Testimonial/Testimonial";

import israfil_photo from "../../../images/Israfil-Hossen-Image.jpg";
import SectionHead from "../../Shared/SectionHead/SectionHead";

const testimonials = [
  {
    id: 1,
    name: "Israfil Hossen",
    description:
      "Sed ipsum posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo dui laoreet dignissim",
    image: israfil_photo,
  },
  {
    id: 2,
    name: "Israfil Hossen",
    description:
      "Sed ipsum posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo dui laoreet dignissim",
    image: israfil_photo,
  },
  {
    id: 3,
    name: "Israfil Hossen",
    description:
      "Sed ipsum posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo dui laoreet dignissim",
    image: israfil_photo,
  },
];

const Testimonials = () => {
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
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
