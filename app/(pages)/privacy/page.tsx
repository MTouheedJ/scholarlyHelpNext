
import { FC } from "react";
import { content } from "./content";
import Hero from "@/app/components/Hero/Hero";
import MainLayout from "@/app/MainLayout";
// import TermsConditons from "./termsConditons";
import Privacy from "./Privacy";

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  // return <div>test</div>
  return (
    <MainLayout>
      <Privacy />
    </MainLayout>
  );
};
export default Page;

export function generateMetadata({}) {
  return {
    title: "Privacy | Online Help with Money Back Guarantee - Scholarly Help",
  };
}