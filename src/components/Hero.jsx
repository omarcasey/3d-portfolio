import { motion } from "framer-motion";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  const [text] = useTypewriter({
    words: ['Code conqueror 👑', 'Pixel perfectionist 🖥️', 'Keyboard wizard 🧙‍♂️'],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Omar</span>
          </h1>
          {/* <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </h1> */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Frontend focused developer. <br className='sm:block hidden' />
            Bringing ideas to life through code.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;