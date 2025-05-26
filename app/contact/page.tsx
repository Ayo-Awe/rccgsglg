import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/app/contact/contact-form";
import ContactInfo from "@/app/contact/contact-info";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-12">Contact Us</h1>
          <div className="grid lg:grid-cols-2 gap-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
