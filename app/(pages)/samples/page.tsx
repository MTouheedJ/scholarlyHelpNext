import MainLayout from "@/app/MainLayout";
import Hero from "@/app/components/Hero/Hero";
import SamplesAssignments from "@/app/components/SamplesAssignments/SamplesAssignments";
import { FC } from "react";
import { content } from "./content";

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  // return <div>test</div>
  return (
    <MainLayout>
      <Hero content={content.heroContent} />
      <SamplesAssignments content={content.samplesContent.SamplesButton} />
    </MainLayout>
  );
};
export default Page;

export function generateMetadata({}) {
  return {
    title: "Explore Assignment Samples | High-Quality Work Examples",
    description:
      "Scholarly Help’s academic writing services are both affordable and high-quality. We are reliable online tutors. For higher scores on your tests, homework, and assignments, rely on our subject specialists. We can also assist you with writing an essay.Check out high-quality assignment samples by Scholarly Help. View examples of essays, research, and projects we’ve successfully delivered.",
  };
}
