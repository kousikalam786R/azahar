import { business } from "@/lib/siteData";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="section-shell grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">About Us</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {business.name} provides digital and financial services to help people easily
            access government and banking services. We support PAN card application,
            driving licence assistance, banking services, bill payments, and online form
            processing with fast and reliable local support.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Our goal is simple: quick service, clear guidance, and trusted assistance for
            every customer in the local community.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
            alt="Digital service center shop"
            className="h-56 w-full rounded-2xl object-cover shadow-soft sm:h-72"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
            alt="Owner of digital service center"
            className="h-56 w-full rounded-2xl object-cover shadow-soft sm:h-72"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
