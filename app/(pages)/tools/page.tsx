import MainLayout from "@/app/MainLayout";
import Hero from "@/app/components/Hero/Hero";
import ToolsGrid from "@/app/components/ToolsGrid/ToolsGrid";
import { FC } from "react";
import { content } from "./content";

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  return (
    <MainLayout>
      <Hero content={content.heroContent} />
      <ToolsGrid
        mainHeading={content.conversionTools.mainheading}
        content={content.conversionTools.toolsContent}
      />
      <ToolsGrid
        mainHeading={content.algebraTools.mainheading}
        content={content.algebraTools.toolsContent}
      />
      <ToolsGrid
        mainHeading={content.physicsTools.mainheading}
        content={content.physicsTools.toolsContent}
      />
      <ToolsGrid
        mainHeading={content.chemistryTools.mainheading}
        content={content.chemistryTools.toolsContent}
      />
      <ToolsGrid
        mainHeading={content.writingTools.mainheading}
        content={content.writingTools.toolsContent}
      />
    </MainLayout>
  );
};
export default Page;

export function generateMetadata({}) {
  return {
    title: "Free Academic Tools for Students & Researchers | Scholarly Help",
    description:
      "Access free academic tools for students and researchers! From citation generators to plagiarism checkers, boost your productivity and enhance your research with ease.",
  };
}
