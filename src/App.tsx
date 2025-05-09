import './App.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Main from './components/Projects.tsx'
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          zIndex: 1000,
          backgroundColor: "#fff",
        }}
      />
      <Header />
      <hr className='w-[40%] opacity-80 mx-auto text-[#606060]' />
      <Main />
      <hr className='w-[40%] opacity-80 mx-auto text-[#606060]' />
      <Footer />
    </>
  )
}

export default App
