import Header from "./Header";
import EventDetails from "./EventDetails";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeatureSection";
import EligibilitySection from "./ElegibitySection";
import ParticipationSection from "./PerticipationSection";
import Footer from "./Footer";
import ApplicationSelection from "./ApllySection";


export default function Heropage() {
  return (
    <div >
      <Header />
      <EventDetails />
      <AboutSection />
      <FeaturesSection />
      <EligibilitySection />
      <ParticipationSection />
      <ApplicationSelection />
      <Footer />
    </div>
  );
}