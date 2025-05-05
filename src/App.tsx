import './App.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Main from './components/Main.tsx'

function App() {

  return (
    <>
      <Header />
      <hr className='w-[40%] opacity-80 mx-auto text-[#606060]' />
      <Main />
      <hr className='w-[40%] opacity-80 mx-auto text-[#606060]' />
      <Footer />
    </>
  )
}

export default App
