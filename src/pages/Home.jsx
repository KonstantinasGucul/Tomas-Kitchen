import Menu from '../components/Menu';
// import Testimonials from '../components/Testimonials';
// import CTA from '../components/CTA';
// import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// export default function Home() {
//   return (
//     <div>
//       <Testimonials />
//       <CTA />
//       <Footer />
//     </div>
//   );
// }
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
    </div>
  );
}
