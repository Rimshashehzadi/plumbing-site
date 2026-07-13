import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Sewer pipes",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Plumbing tools",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Water filters",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FaqServices() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Small Heading */}
        <span className="uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-gray-500">
          Our Services
        </span>

        {/* Main Heading */}
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900">
          Browse our catalog
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">

              {/* Image */}
              <div className="overflow-hidden rounded-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between border-b border-gray-200 py-5">

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}