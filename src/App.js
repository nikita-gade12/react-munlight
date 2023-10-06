import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

import './styles/footer.scss'
import './styles/App.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/contact.scss';
import './styles/mediaquery.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
