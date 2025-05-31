import ContactForm from "@/app/(app)/contact/contact-form";
import ContactInfo from "@/app/(app)/contact/contact-info";

export default function ContactPage() {
  return (
    <main className="grid lg:grid-cols-2 gap-12 max-w-[1260px] mx-auto mt-10 lg:mt-20">
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
