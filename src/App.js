
import { Route, Routes } from 'react-router-dom';
import './Assets/global.css'
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import MediaComp1 from './Components/mediaComp1/mediaComp1';
import About from './Pages/About/About';
import Contact from './Pages/Contact/contact';

import Home from './Pages/Home/home';
import Shop from './Pages/Shop/shop';

function App() {
  return (
    <div className="App">
      <MediaComp1 />
      <Header />

        <Routes >
         <Route path='/' element = {<Home />} />
         <Route path='/About' element = { <About />} />
         <Route path='/Shop' element = { <Shop />} />
         <Route path='/Contact' element = { <Contact /> } />
         
        </Routes>

      <Footer />
     </div>
  );
}

export default App;
