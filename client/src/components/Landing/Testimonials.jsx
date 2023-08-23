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
                <h1 className="mt-3">{test.name}.</h1>
                <p className="text-xs my-2 font-light">{test.date}</p>
                <p className="text-sm font-semibold mb-2">
                  {test.description}"
                </p>
                <Rating name="read-only" value={5} readOnly />
              </div>
            </div>
          ))}
        </OwlCarousel>
        {/* <div className="testBox">
          <figure className="testSneakerContainer">
            <img
              className="testSneaker"
              src="https://images.unsplash.com/photo-1584539696499-bff0b4768e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt=""
            />
          </figure>
          <div className="testInitials">
            <p className="text-lg font-semibold">JR</p>
          </div>
          <div>
            <h1 className="mt-3">Jasmine Rice.</h1>
            <p className="text-xs my-2 font-light">3/5/2023</p>
            <p className="text-sm font-semibold mb-2">
              "10/10 would recommend to anyone"
            </p>
            <Rating name="read-only" value={5} readOnly />
          </div>
        </div> */}
        {/* <div className="hidden md:flex testBox">
          <figure className="testSneakerContainer">
            <img
              className="testSneaker"
              src="https://images.unsplash.com/photo-1595805719192-b31da140a625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </figure>
          <div className="testInitials">
            <p className="text-lg font-semibold">SG</p>
          </div>
          <div>
            <h1 className="mt-3">Samwise Gamgee.</h1>
            <p className="text-xs my-2 font-light">1/29/2023</p>
            <p className="text-sm font-semibold mb-2">
              "Pair came so quick, very happy customer"
            </p>
            <Rating name="read-only" value={5} readOnly />
          </div>
        </div> */}
        {/* <div className="testBox !hidden xl:!flex">
          <figure className="testSneakerContainer">
            <img
              className="testSneaker"
              src="https://images.unsplash.com/photo-1605983721413-99266a61f830?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt=""
            />
          </figure>
          <div className="testInitials">
            <p className="text-lg font-semibold">JP</p>
          </div>
          <div>
            <h1 className="mt-3">Jake Proudscott.</h1>
            <p className="text-xs my-2 font-light">2/25/2023</p>
            <p className="text-sm font-semibold mb-2">
              "Will be shopping here again no problem."
            </p>
            <Rating name="read-only" value={5} readOnly />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
