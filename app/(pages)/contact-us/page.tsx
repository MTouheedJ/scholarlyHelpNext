import MainLayout from "@/app/MainLayout";
import { FC } from "react";
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
    title: "Contact Scholarly Help | We're Here to Assist You",
    description:
      "Need help with assignments, exams, or online classes? Contact Scholarly Help today for prompt, reliable, and professional assistance.",
  };
}
