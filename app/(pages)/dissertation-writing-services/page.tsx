import { FC } from "react";
// import { content } from "./content";
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
import dynamic from "next/dynamic";
import ContactSection from "@/app/components/Form/ContactSection";
import Script from "next/script";
import { content } from "../take-my-class/content";

const WhyScholarly = dynamic(
  () => import("@/app/components/WhyScholarly/WhyScholarly"),
  {
    ssr: false,
  }
);
interface PageProps {}
const Page: FC<PageProps> = ({}) => {
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
      <ContactSection />
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
    title: "FB Online Class Help",
    description:
      "Need online class help? Willing to hire someone to take my online class? We heard you! Let us help you get the grade you want. Instead, you pay someone, pay us to do your online class.",
  };
}
