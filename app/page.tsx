import AcademicPartner from "./components/AcademicPartner/AcademicPartner";
import Hero from "./components/Hero/Hero";
import Qualities from "./components/Qualities/Qualities";
import SiteReviews from "./components/SiteReviews/SiteReviews";
import ExcellenceProof from "./components/ExcellenceProof/ExcellenceProof";
import Process from "./components/Process/Process";
import { processContent } from "./components/Process/content";
import Samples from "./components/Samples/Samples";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import Faq from "./components/Faq/Faq";
import MainLayout from "./MainLayout";
import { content } from "./content";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

const WhyScholarly = dynamic(
  () => import("./components/WhyScholarly/WhyScholarly"),
  {
    ssr: false,
  }
);


const Home: NextPage = () => {
  return (
    <div>
      <MainLayout>
        {/* Include various components */}
        <Hero content={content.heroContent} />
        <Qualities />
        <SiteReviews />
        <AcademicPartner
          btnText={content.btnText}
          mainHeading={content.academic.mainheading}
          content={content.academic.academicContent}
        />
        <WhyScholarly
          header={content.whyScholarly}
          content={content.whyScholarly.whyScholarlyContent}
        />
        <ExcellenceProof
          btnText={content.btnText}
          content={content.excellenceProofContent}
        />
        <Process content={processContent} />
        <Samples btnText={content.btnText} />
        <CustomerReviews btnText={content.btnText} />
        <Faq content={content.faqContent} />
      </MainLayout>
    </div>
  );
};

export default Home;


export function generateMetadata({}){
  return{
    title:"Academic Writing Services | Online Help with Money Back Guarantee - Scholarly Help",
    description: "Scholarly Help’s academic writing services are both affordable and high-quality. We are reliable online tutors. For higher scores on your tests, homework, and assignments, rely on our subject specialists. We can also assist you with writing an essay."
  }
}