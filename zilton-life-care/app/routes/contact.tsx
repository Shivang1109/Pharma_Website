import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { ContactInfo } from "~/components/sections/contact/ContactInfo";
import { ContactForm } from "~/components/sections/contact/ContactForm";

export function meta() {
  return [
    { title: "Contact Us | ZILTON LIFE CARE PRIVATE LIMITED" },
    {
      name: "description",
      content:
        "Get in touch with ZILTON LIFE CARE PRIVATE LIMITED for institutional supply, commercial distribution partnerships, and product inquiries.",
    },
  ];
}

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 bg-[#FAFCFB]">
      <Container>
        <SectionHeading
          eyebrow="Reach Our Team"
          title="Connect with Our Corporate Desk"
          description="Whether you represent a hospital procurement board, distribution syndicate, or institutional healthcare body, we look forward to hearing from you."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
