import Intro from './components/Intro.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustBand from './components/TrustBand.jsx';
import WhatIs from './components/WhatIs.jsx';
import How from './components/How.jsx';
import Steps from './components/Steps.jsx';
import Price from './components/Price.jsx';
import Clinician from './components/Clinician.jsx';
import OtherInjections from './components/OtherInjections.jsx';
import Testimonials from './components/Testimonials.jsx';
import BeforeAfter from './components/BeforeAfter.jsx';
import Faq from './components/Faq.jsx';
import Clinics from './components/Clinics.jsx';
import Footer from './components/Footer.jsx';
import MobileBar from './components/MobileBar.jsx';

export default function App() {
  return (
    <>
      <Intro />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TrustBand />
        <WhatIs />
        <How />
        <Steps />
        <Price />
        <Clinician />
        <OtherInjections />
        <Testimonials />
        <BeforeAfter />
        <Faq />
        <Clinics />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
