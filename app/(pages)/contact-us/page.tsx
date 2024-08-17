

import { FC } from "react";
import { content } from "./content";
import Hero from "@/app/components/Hero/Hero";
import MainLayout from "@/app/MainLayout";
import ContactUs from "./ContactUs";

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  // return <div>test</div>
  return (
    <MainLayout>
      <ContactUs />
    </MainLayout>
  );
};
export default Page;
export function generateMetadata({}) {
  return {
    title: "Pay Someone To Do My Online Class - Take My Online Class For Me - Scholarly Help",
    description: "Scholarly Help’s academic writing services are both affordable and high-quality. We are reliable online tutors. For higher scores on your tests, homework, and assignments, rely on our subject specialists. We can also assist you with writing an essay."
  };
}