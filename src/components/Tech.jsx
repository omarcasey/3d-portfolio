import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My proficiencies</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-12'>
        {technologies.map((technology, index) => (
          <Tilt
            key={technology.name}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.5}
            transitionSpeed={1000}
            className="w-24 h-24 md:w-28 md:h-28 xl:h-24 xl:w-24"
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className='w-full h-full object-cover filter group-hover:grayscale transition duration-300 ease-in-out'
              src={technology.icon}
              alt={technology.name}
            />
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
