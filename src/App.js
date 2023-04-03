import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Page404 from './pages/Page404';

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='about'
          element={<About />}
        />
        <Route
          path='services'
          element={<Services />}
        />
        <Route
          path='contact'
          element={<Contact />}
        />
        <Route
          path='*'
          element={<Page404 />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
