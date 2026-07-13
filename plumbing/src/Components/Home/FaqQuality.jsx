import { ArrowRight } from "lucide-react";

export default function FaqQuality() {
  return (
    <section className="bg-[#f5f5f2] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Small Heading */}
          <p className="uppercase tracking-[3px] text-[11px] sm:text-xs font-semibold text-gray-600 mb-5">
            Quality Plumbing At Competitive Prices
          </p>

          {/* Main Heading */}
          <h2 className="max-w-5xl text-[#132238] font-bold leading-tight
                         text-3xl
                         sm:text-4xl
                         md:text-5xl
                         lg:text-6xl">
            Our services will make your home
            <br className="hidden sm:block" />
            comfortable and cozy
          </h2>

          {/* Read More Button */}
          <button className="group mt-10 flex items-center gap-3 text-[#132238] font-medium">
            <span className="relative">
              Read More
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#132238] transition-all duration-300 group-hover:w-0"></span>
            </span>

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}