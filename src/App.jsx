import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectWizard from './pages/ProjectWizard';
import Footer from './components/Footer';
import MainSections from './components/MainSections';
import ServicePage from './pages/ServicePage';
import { services } from './data/ServiceData';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      
      <main className="pt-20">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-me" element={<ProjectWizard />} />

          {/* Dynamic routes for each service */}
          {services.map((service, index) => (
            <Route 
              key={index}
              path={`/services/${service.id}`} 
              element={<ServicePage title={service.title} image={service.image} description={service.description} />} 
            />
          ))}
        </Routes>
        <MainSections services={services} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;