import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ServicesTable from "@/components/ServicesTable";
import TechBadges from "@/components/TechBadges";
import Blogs from "@/components/Blogs";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop"; // ← add this

export default async function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />

        <section id="services" className="container-pro py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Comprehensive Solutions
          </h2>
          <p className="mt-2 text-white/70">
            Engineering + Accounting, aligned to business outcomes.
          </p>
          <div className="mt-8">
            <ServicesTable />
          </div>
        </section>

        <section id="tech" className="container-pro py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
          <p className="mt-2 text-white/70">
            Battle-tested tools we use to ship reliably.
          </p>
          <div className="mt-6">
            <TechBadges />
          </div>
        </section>

        <section id="blogs" className="container-pro py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold">Latest from Medium</h2>
          <p className="mt-2 text-white/70">
            Thoughts, guides and case studies.
          </p>
          <div className="mt-8">
            <Blogs />
          </div>
        </section>

        <section id="contact" className="container-pro py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s build something great
          </h2>
          <p className="mt-2 text-white/70">
            Tell us about your goals. We’ll bring the engineering and accounting
            rigor.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="container-pro py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="logo" className="h-6 w-6" />
            <span className="text-white/70">
              © {new Date().getFullYear()} DevAccountix
            </span>
          </div>
          <div className="text-white/60">
            contact:{" "}
            <a className="underline" href="mailto:info@devaccountix.com">
              info@devaccountix.com
            </a>{" "}
            · +91 7889178080
          </div>
        </div>
      </footer>
      <ScrollToTop /> {/* ← add this */}
    </>
  );
}
