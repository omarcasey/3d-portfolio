import React from "react";
import Tilt from 'react-tilted'
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
            scale={1.5}
            speed={1000}
          >
            <motion.img
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              key={technology.name}
              viewport={{ once: true }}
              className='object-cover h-24 w-24 md:w-28 md:h-28 xl:h-24 xl:w-24
            filter group-hover:grayscale transition duration-300 ease-in-out'
              src={technology.icon}
              alt='techimage' />
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
