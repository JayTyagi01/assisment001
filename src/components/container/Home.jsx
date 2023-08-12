import React from "react";
import hero from "../../assets/hero.png";

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section bg-[#dbd9d9]" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Your Trusted
            <br />
            Consulting Partner
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            laudantium vel laboriosam rem nam architecto esse, quaerat omnis
            praesentium perferendis, doloribus numquam corrupti vero. Est animi
            quis reprehenderit corporis assumenda.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-[#6969] rounded-lg mr-4 text-sm">
              Explore Our Services
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
