import MainLayout from "@/app/MainLayout";
import AcademicPartner from "@/app/components/AcademicPartner/AcademicPartner";
import CustomerReviews from "@/app/components/CustomerReviews/CustomerReviews";
import ExcellenceProof from "@/app/components/ExcellenceProof/ExcellenceProof";
import Faq from "@/app/components/Faq/Faq";
import Hero from "@/app/components/Hero/Hero";
import Process from "@/app/components/Process/Process";
import { processContent } from "@/app/components/Process/content";
import Qualities from "@/app/components/Qualities/Qualities";
import Samples from "@/app/components/Samples/Samples";
import SiteReviews from "@/app/components/SiteReviews/SiteReviews";
import Subjects from "@/app/components/Subjects/Subjects";
import dynamic from "next/dynamic";
import { FC } from "react";
import { content } from "./content";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Do My Accounting Assignment for Me | Scholarly Help",
// };

const WhyScholarly = dynamic(
  () => import("@/app/components/WhyScholarly/WhyScholarly"),
  {
    ssr: false,
  }
);

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  // return <div>test</div>
  return (
    <MainLayout>
      <Hero content={content.heroContent} />
      <Qualities />
      <SiteReviews />
      <WhyScholarly
        header={content.whyScholarly}
        content={content.whyScholarly.whyScholarlyContent}
      />
      <AcademicPartner
        btnText={content.btnText}
        mainHeading={content.academic.mainheading}
        content={content.academic.academicContent}
      />
      <ExcellenceProof
        btnText={content.btnText}
        content={content.excellenceProofContent}
      />
      <Process content={processContent} />
      <Samples btnText={content.btnText} />
      <CustomerReviews btnText={content.btnText} />
      <Subjects
        btnText={content.btnText}
        mainHeading={content.subjects.mainHeading}
        content={content.subjects.subjectsContent}
      />
      <Faq content={content.faqContent} />
    </MainLayout>
  );
};
export default Page;

export function generateMetadata({}) {
  return {
    title: "Pay Someone to Do My Accounting Assignment | Hire Experts",
    description:
      "Struggling with accounting? Pay someone to do your accounting assignment. Hire experts for balance sheets, audits, and financial analysis now!",
  };
}
