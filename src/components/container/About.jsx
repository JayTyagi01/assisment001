import React from "react";
import about from "../../assets/About.jpeg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            About <br /> <span className="text-[#6969]">Us</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            blanditiis, explicabo nisi sapiente pariatur illo, quo at ratione
            voluptatem commodi id odio autem similique maiores nesciunt quos
            placeat alias aperiam distinctio repudiandae? Repellendus nemo unde
            sequi aperiam, corrupti magnam aliquid expedita sed, accusamus
            officiis ab at harum et nesciunt quibusdam!
          </p>
          <button className="text-white py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold bg-[#6969]">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
