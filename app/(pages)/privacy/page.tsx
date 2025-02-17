import MainLayout from "@/app/MainLayout";
import { FC } from "react";
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
    title: "Privacy Policy | Scholarly Help",
    description:
      "Learn how Scholarly Help safeguards your personal data. Read our privacy policy to understand our commitment to data protection, security, and transparency.",
  };
}
