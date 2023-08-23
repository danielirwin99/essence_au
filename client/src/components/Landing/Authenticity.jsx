import { Link } from "react-router-dom";

const Authenticity = () => {
  return (
    <section className=" relative my-10 px-5 xl:px-0 w-full">
      <div className="flex flex-wrap items-center justify-center">
        <div className="absolute border-b border-gray-400 max-w-5xl lg:w-full -bottom-5 " />
        <div className="w-full xl:w-2/5 flex flex-col items-center text-center justify-normal">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 lg:mb-10 ">
            Recently Purchased a Fake?
          </h1>
          <h2 className="font-semibold md:text-lg lg:text-xl">
            All our items are 100% Authentic, doubled checked by our staff
            members
          </h2>
          <h2 className="mt-5 lg:mt-10 font-semibold text-gray-700">
            Have any doubts?
            <br /> Feel free to{" "}
            <Link to="/contact">
              <span className="text-blue-600 hover:opacity-80">Contact Us</span>
            </Link>{" "}
            directly.
          </h2>
          <Link href="/contact">
            <button className="loadMore">Contact Now</button>
          </Link>
        </div>
        <div className="w-full xl:w-2/5 xl:ml-8 mt-10 xl:mt-0 pb-5 lg:pb-0">
          <figure>
            <img
              className="w-full max-h-[400px] object-cover rounded-sm"
              src="https://cdn.sanity.io/images/c1chvb1i/production/e46a2944c46ad518ebcaa2d04f76d0ef764730b4-1100x735.jpg/Photo_06.jpg?fm=webp"
              alt=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Authenticity;
