import React from "react";
import { categories } from "../../../Data";
import Categories from "./Categories";

import { motion } from "framer-motion";

const Courses = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="bg-[#D3D3D3] section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Why should you{" "}
          <span className="text-[#6969]">
            {" "}
            <br />
            Trust Us?
          </span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tempora illo laborum ex cupiditate tenetur doloribus non velit atque
          amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
          sit! Lorem ipsum dolor sit amet.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-20 gap-8 "
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
    </div>
  );
};

export default Courses;
