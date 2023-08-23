import Rating from "@mui/material/Rating";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { testimonial } from "../../data/Testimonials";

const Testimonials = () => {
  return (
    <section className="max-w-[90vw] mx-auto">
      <div className="testContainer">
        <OwlCarousel
          className="owl-theme"
          items={4}
          margin={0}
          nav={true}
          dots={false}
          responsive={{
            0: {
              items: 2,
            },
            500: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 3,
            },
            1500: {
              items: 3,
            },
          }}
        >
          {testimonial.map((test) => (
            <div className="testBox">
              <figure className="w-full">
                <img className="testSneaker" src={test.image} alt="" />
              </figure>
              <div className="testInitials">
                <p className="text-lg font-semibold">{test.initials}</p>
              </div>
              <div>
                <h1 className="mt-3">{test.name}</h1>
                <p className="text-xs my-2 font-light">{test.date}</p>
                <p className="text-sm font-semibold mb-2">
                  {test.description}"
                </p>
                <Rating name="read-only" value={5} readOnly />
              </div>
            </div>
          ))}
        </OwlCarousel>
        
      </div>
    </section>
  );
};

export default Testimonials;
