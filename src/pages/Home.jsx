import { useState } from 'react';
import Navbar from '../components/NavbarSection/Navbar';
import Hero from '../components/HeroSection/Hero';
import Testimonials from '../components/TestimonialsSection/Testimonials';
import Menu from '../components/MenuSection/Menu';
import Footer from '../components/FooterSection/Footer';
import Modal from '../components/Modal/Modal';
import Privacy from '../components/FooterSection/Privacy';
import Terms from '../components/FooterSection/Terms';
import OrderModalContent from '../components/Modal/OrderModalContent';
import About from '../components/AboutSection/About';

export default function Home() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);

  return (
    <div>
      <Navbar onOpenOrder={() => setShowOrderModal(true)} />
      <Hero onOpenOrder={() => setShowOrderModal(true)} />
      <Testimonials />
      <Menu />
      <About />
      <Footer
        onOpenPrivacy={() => setShowPrivacy(true)}
        onOpenTerms={() => setShowTerms(true)}
      />
      {/* Modals */}
      <Modal
        title="Privacy Policy"
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      >
        <Privacy />
      </Modal>
      <Modal
        title="Terms of Service"
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
      >
        <Terms />
      </Modal>
      <Modal
        title="Order Now"
        isOpen={showOrderModal}
        onClose={() => setShowOrderModal(false)}
      >
        <OrderModalContent />
      </Modal>
    </div>
  );
}
