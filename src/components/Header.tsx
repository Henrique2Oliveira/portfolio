import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
function Header() {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={variants}
      className="flex flex-col bg-gradient-to-b from-[#514e3d] to-midnight  text-light p-2 md:p-4 h-screen justify-center items-center gap-y-3">
      <motion.div
        initial={{ scale: 0, rotate: 180, y: -100 }}
        animate={{ scale: 1, rotate: 0, y: 0, transition: { duration: 1 } }}
        className="w-32 h-32 md:w-50 md:h-50 rounded-full overflow-hidden shadow-[-4px_5px_0px_0px_rgba(0,_0,_0,_0.3)]">
        {/* Profile picture */}
        <img src="/portfolio/profile.jpg" className="object-cover w-full h-full " alt="Profile picture" />
      </motion.div>

      <h1 className="text-2xl font-bold md:text-5xl bg-gradient-to-l to-[#eeeeee] from-[#ece09c]  bg-clip-text text-transparent">Henrique Oliveira</h1>

      <p className="rounded-full bg-secondary w-fit px-3 italic">Full-Stack Developer </p>
      <p className="text-sm">Azores, Portugal</p>
      <div className="flex gap-x-2 flex-wrap justify-center items-center mt-4">
        <motion.button
          initial={{ scale: 0, x: -200 }}
          animate={{ scale: 1, x: 0, transition: { duration: 1 } }}
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 10px rgba(0,0,0,0.3)' }}
          className="rounded font-light md:p-2 m-1 bg-white hover:bg-[#f86b00] transition-colors hover:text-white w-fit md:text-2xl text-black shadow-[-1px_6px_0px_0px_rgba(0,_0,_0,_0.9)] "><a href="https://github.com/Henrique2Oliveira" target="_blank" rel="noopener noreferrer" className="hover:px-5 px-4 py-4 transition-all duration-100 ease-in-out"><FaGithub className='inline' /> Github</a></motion.button>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1, x: 0, transition: { duration: 1 } }}
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 10px rgba(0,0,0,0.3)' }}
          className="rounded font-light md:p-2 m-1 bg-white hover:bg-[#357fff] transition-colors hover:text-white w-fit md:text-2xl text-black shadow-[-1px_6px_0px_0px_rgba(0,_0,_0,_0.9)] "><a href="https://www.linkedin.com/in/henrique-oliveira-37620227a/" target="_blank" rel="noopener noreferrer" className="hover:px-5 px-4 py-4 transition-all duration-100 ease-in-out"><FaLinkedin className='inline' />LinkedIn</a></motion.button>
        <motion.button

          initial={{ scale: 0, x: 200 }}
          animate={{ scale: 1, x: 0, transition: { duration: 1 } }}
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 10px rgba(0,0,0,0.3)' }}
          className="rounded font-light  md:p-2 m-1 bg-white hover:bg-[#364664fe] transition-colors hover:text-white w-fit md:text-2xl text-black shadow-[-1px_6px_0px_0px_rgba(0,_0,_0,_0.9)] "><a href="mailto:henriqueoliveira_2021@outlook.com" className="hover:px-5 px-4 py-4 transition-all duration-100 ease-in-out"><MdOutlineMailOutline className='inline' />Email</a></motion.button>
      </div >

    </motion.header >

  )
}

export default Header
