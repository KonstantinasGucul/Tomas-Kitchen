import Menu from '../components/MenuFolder/Menu';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Testimonials from '../components/TestimonialsFolder/Testimonials';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      <Menu />
    </div>
  );
}
