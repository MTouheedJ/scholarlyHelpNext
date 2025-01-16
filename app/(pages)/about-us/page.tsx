import MainLayout from "@/app/MainLayout";
import { FC } from "react";
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
    title: "About Scholarly Help | Trusted Academic Assistance Experts",
    description:
      "Learn about Scholarly Help's journey, expertise, and dedication to helping students excel. Discover why we're the trusted choice in academics.",
  };
}
