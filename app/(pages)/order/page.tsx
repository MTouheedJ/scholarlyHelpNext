import { FC } from "react";
import Hero from "@/app/components/Hero/Hero";
import MainLayout from "@/app/MainLayout";
import Order from "./Order";

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  // return <div>test</div>
  return (
    <MainLayout>
      <Order />
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
