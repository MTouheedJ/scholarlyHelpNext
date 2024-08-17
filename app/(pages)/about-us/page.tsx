import { FC } from "react";
import { content } from "./content";
import Hero from "@/app/components/Hero/Hero";
import MainLayout from "@/app/MainLayout";
import AboutUs from "./Aboutus";
// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'About us | Online Help with Money Back Guarantee - Scholarly Help',

// }

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  // return <div>test</div>
  return (
    <MainLayout>
      <AboutUs />
    </MainLayout>
  );
};
export default Page;

export function generateMetadata({}) {
  return {
    title: "About us | Online Help with Money Back Guarantee - Scholarly Help",
    description: "Scholarly Help’s academic writing services are both affordable and high-quality. We are reliable online tutors. For higher scores on your tests, homework, and assignments, rely on our subject specialists. We can also assist you with writing an essay."
  };
}
