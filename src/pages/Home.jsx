import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Testimonials from '../components/TestimonialsFolder/Testimonials';
import Menu from '../components/MenuFolder/Menu';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Privacy from '../components/Privacy';
import Terms from '../components/Terms';
import OrderModalContent from '../components/OrderModalContent';
import About from '../components/About';

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
