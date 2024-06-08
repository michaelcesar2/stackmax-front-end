import AboutUs from '@/components/AboutUs';
import Assessments from '@/components/Assessments';
import ClientsSection from '@/components/ClientsSection';
import HomePage from '@/components/HomePage';
import Quality from '@/components/Quality';
import AssessmentsSlide from '@/components/AssessmentsSlide';
import Services from '@/components/Services';
import Headline from '@/components/Headline';
import Consultancy from '@/components/Consultancy';

export default function Home() {
  return (
    <div>
      <HomePage></HomePage>
      <Quality></Quality>
      <Services></Services>
      <ClientsSection></ClientsSection>
      <AboutUs></AboutUs>
      <AssessmentsSlide></AssessmentsSlide>
      <Assessments></Assessments>
      <Headline></Headline>
      <Consultancy></Consultancy>
    </div>
  );
}
