
import { FC } from "react";
import { content } from "./content";
import MainLayout from "@/app/MainLayout";
import Hero from "@/app/components/Hero/Hero";
import SamplesAssignments from "@/app/components/SamplesAssignments/SamplesAssignments";

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  // return <div>test</div>
  return (
    <MainLayout>
      <Hero content={content.heroContent}/>
      <SamplesAssignments content={content.samplesContent.SamplesButton}/>
    </MainLayout>
  );
};
export default Page;

export function generateMetadata({}) {
  return {
    title: "Samples | Online Help with Money Back Guarantee - Scholarly Help",
    description: "Scholarly Help’s academic writing services are both affordable and high-quality. We are reliable online tutors. For higher scores on your tests, homework, and assignments, rely on our subject specialists. We can also assist you with writing an essay."
  };
}