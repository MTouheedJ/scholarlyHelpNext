
import { FC } from "react";
import { content } from "./content";
import Hero from "@/app/components/Hero/Hero";
import Qualities from "@/app/components/Qualities/Qualities";
import SiteReviews from "@/app/components/SiteReviews/SiteReviews";
import AcademicPartner from "@/app/components/AcademicPartner/AcademicPartner";
import ExcellenceProof from "@/app/components/ExcellenceProof/ExcellenceProof";
import Process from "@/app/components/Process/Process";
import { processContent } from "@/app/components/Process/content";
import Samples from "@/app/components/Samples/Samples";
import CustomerReviews from "@/app/components/CustomerReviews/CustomerReviews";
import Faq from "@/app/components/Faq/Faq";
import MainLayout from "@/app/MainLayout";
import Subjects from "@/app/components/Subjects/Subjects";
import ExamType from "@/app/components/ExamType/ExamType";
import VariousName from "@/app/components/VariousName/VariousName";
import dynamic from "next/dynamic";

const WhyScholarly= dynamic(() => import("@/app/components/WhyScholarly/WhyScholarly"), {
  ssr: false,
  });
interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  // return <div>test</div>
  return (
    <MainLayout>
      <Hero content={content.heroContent} />
      <Qualities />
      <SiteReviews />
      <WhyScholarly header={content.whyScholarly} content={content.whyScholarly.whyScholarlyContent} />
      <AcademicPartner btnText={content.btnText}  mainHeading={content.academic.mainheading} content={content.academic.academicContent}/>
      <ExcellenceProof btnText={content.btnText}  content={content.excellenceProofContent} />
      <Process content={processContent} />
      <Samples btnText={content.btnText}/>
      <CustomerReviews btnText={content.btnText}/>
      <ExamType content={content.examTypeContent}/>
      <VariousName mainHeading={content.variousNames.mainHeading} content={content.variousNames.variousNamesContent}/>
      <Subjects btnText={content.btnText} mainHeading={content.subjects.mainHeading} content={content.subjects.subjectsContent}/>
      <Faq content={content.faqContent} />
    </MainLayout>
  );
};
export default Page;

export function generateMetadata({}) {
  return {
    title: "Do My Exam Help | Pay Someone to Take my Online Exam - Scholarly Help",
    description: "In search to pay someone to take my exam online? We got you covered. Our team of test takers for hire is ready to assist with all kinds of online exam help."
  };
}