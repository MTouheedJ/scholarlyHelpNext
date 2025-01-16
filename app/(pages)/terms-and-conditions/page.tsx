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
    title: "Terms & Conditions | Scholarly Help Policies and Guidelines",
    description:
      "Learn about Scholarly Help's terms and conditions, including service policies, payments, privacy, and usage guidelines. Stay informed today.",
  };
}
