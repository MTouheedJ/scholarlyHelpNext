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
  // import type { Metadata } from "next";
  
  // export const metadata: Metadata = {
  //   title: "Help Me Do My Chemistry Assignment | Chemistry Assignment Help | Scholarly Help",
  // };
interface PageProps {}
const Page: FC<PageProps> = ({}) => {
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
      <Subjects btnText={content.btnText} mainHeading={content.subjects.mainHeading} content={content.subjects.subjectsContent}/>
      <Faq content={content.faqContent} />
    </MainLayout>
  );
};
export default Page;

export function generateMetadata({}) {
  return {
    title: "Help Me Do My Chemistry Assignment | Chemistry Assignment Help | Scholarly Help",
    description: "Get flawless chemistry assignment help and uplift your grades. All you need to do is to ask Help me do my chemistry assignment."
  };
}