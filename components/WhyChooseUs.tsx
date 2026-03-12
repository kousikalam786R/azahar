import { FaHandshake, FaHourglassHalf, FaRupeeSign, FaUserCheck, FaUsers } from "react-icons/fa";

const features = [
  { title: "Fast processing", icon: FaHourglassHalf },
  { title: "Trusted service", icon: FaHandshake },
  { title: "Affordable charges", icon: FaRupeeSign },
  { title: "Experienced support", icon: FaUserCheck },
  { title: "1000+ happy customers", icon: FaUsers }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20">
      <div className="section-shell">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Why Choose Us</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-soft"
            >
              <feature.icon className="mx-auto text-2xl text-brand-600" />
              <h3 className="mt-3 text-sm font-semibold text-slate-900">{feature.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
