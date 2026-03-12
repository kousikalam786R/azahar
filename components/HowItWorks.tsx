import { FaFileUpload, FaPhoneAlt, FaTasks } from "react-icons/fa";

const steps = [
  {
    title: "Choose the service you need",
    description: "Select PAN, Aadhaar, Licence, banking, insurance, or bill payment service.",
    icon: FaTasks
  },
  {
    title: "Contact us via WhatsApp or social media",
    description: "Send your requirement and we guide you with documents and next steps.",
    icon: FaPhoneAlt
  },
  {
    title: "Submit documents and complete your work",
    description: "We process your service quickly and keep you updated till completion.",
    icon: FaFileUpload
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-shell">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">How It Works</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <step.icon className="mt-4 text-2xl text-brand-600" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
