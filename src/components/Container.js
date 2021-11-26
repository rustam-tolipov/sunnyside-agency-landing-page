import LandingPage from './LandingPage';
import Descriptions from './Descriptions';
import Testimonials from './Testimonials';
import Show from './Show';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import NotFound from './NotFound';

const Container = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Descriptions />
              <Testimonials />
              <Show />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Container;
