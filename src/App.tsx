import Header from './components/Header/index.tsx';
import Hero from './components/Hero/index.tsx';
import About from './components/About/index.tsx';
import BusRoute from './components/BusRoute/index.tsx';
import Footer from './components/Footer/index.tsx';

import './components/Header/style.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <BusRoute />
      <Footer />
    </>
  )
}

export default App
