import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rakesh Kumar",
    text: "Very fast PAN correction work. Staff guided every step properly."
  },
  {
    name: "Shabana Parveen",
    text: "Best place for online forms and bill payments. Charges are reasonable."
  },
  {
    name: "Sanjay Yadav",
    text: "Reliable money transfer and Aadhaar update support. Highly recommended."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20">
      <div className="section-shell">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Customer Reviews
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex gap-1 text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="mt-4 text-sm text-slate-600">{review.text}</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
