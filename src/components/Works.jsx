import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  bulletPoints,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const bounceTransition = {
    y: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeOut",
      repeatDelay: 0.2,
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl w-full max-w-[1100px]"
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        scale={1.02}
        transitionSpeed={2000}
        perspective={1000}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image container with parallax */}
          <div className="relative md:w-[400px] w-full h-[300px]">
            <div className="tilt-inner">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl saturate-200"
                style={{ transform: 'translateZ(20px)' }}
              />
              <div className="absolute top-3 right-3 card-img_hover" style={{ transform: 'translateZ(40px)' }}>
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content container with parallax */}
          <div className="flex-1 py-2" style={{ transform: 'translateZ(30px)' }}>
            <h3 className="text-white font-bold text-[28px]">{name}</h3>
            <p className="mt-2 text-secondary text-[16px]">{description}</p>
            
            {/* Learn More Button */}
            {bulletPoints && bulletPoints.length > 0 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-[14px] text-white-100 font-semibold flex items-center gap-2 hover:text-white transition-colors group"
              >
                {isExpanded ? 'Show Less' : 'Learn More'}
                <motion.span 
                  className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  animate={!isExpanded ? { y: [0, 6, 0] } : {}}
                  transition={!isExpanded ? bounceTransition : {}}
                >
                  ▼
                </motion.span>
              </button>
            )}
            
            {/* Bullet Points with Animation */}
            <AnimatePresence>
              {isExpanded && bulletPoints && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 list-disc list-inside space-y-2">
                    {bulletPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-secondary text-[14px]"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Tags */}
            <div className="mt-4 flex flex-row flex-wrap gap-2">
              {tags.map((tag) => (
                <div 
                  key={`${name}-${tag.name}`}
                  className="flex items-center gap-2"
                >
                  <div className={`w-2 h-2 rounded-full ${tag.color}`}></div>
                  <p className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below are my featured SaaS platforms, chosen to highlight my expertise
          in building and scaling data-intensive applications using modern web
          technologies and cloud infrastructure. While they represent just a
          portion of my work, these projects best demonstrate my capabilities in
          creating innovative, user-focused solutions.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col items-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
