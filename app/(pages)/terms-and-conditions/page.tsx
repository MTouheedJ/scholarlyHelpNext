

import { FC } from "react";
import { content } from "./content";
import Hero from "@/app/components/Hero/Hero";
import MainLayout from "@/app/MainLayout";
// import TermsConditons from "./termsConditons";
import TermsConditons from "./TermsConditons";

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  // return <div>test</div>
  return (
    <MainLayout>
      <TermsConditons />
    </MainLayout>
  );
};
export default Page;
export function generateMetadata({}) {
  return {
    title: "Term and Conditions | Online Help with Money Back Guarantee - Scholarly Help",
    description: "Scholarly Help’s academic writing services are both affordable and high-quality. We are reliable online tutors. For higher scores on your tests, homework, and assignments, rely on our subject specialists. We can also assist you with writing an essay."
  };
}