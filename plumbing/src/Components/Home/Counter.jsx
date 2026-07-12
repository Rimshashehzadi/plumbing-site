import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="bg-white">

      {/* Other Hero Content */}

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-3 mt-16 border-t border-gray-200"
      >
        {/* Counter 1 */}
        <div className="py-8 text-center sm:border-r border-gray-300">
          <h2 className="text-5xl font-bold text-gray-900">
            {inView ? (
              <CountUp end={20} duration={2.5} />
            ) : (
              0
            )}
            <span className="text-primary">+</span>
          </h2>

          <p className="mt-2 text-lg font-semibold">
            Parts installed per day
          </p>
        </div>

        {/* Counter 2 */}
        <div className="py-8 text-center sm:border-r border-gray-300">
          <h2 className="text-5xl font-bold text-gray-900">
            {inView ? (
              <CountUp end={100} duration={2.5} />
            ) : (
              0
            )}
            <span className="text-primary">+</span>
          </h2>

          <p className="mt-2 text-lg font-semibold">
            Happy customers weekly
          </p>
        </div>

        {/* Counter 3 */}
        <div className="py-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            {inView ? (
              <CountUp end={10} duration={2.5} />
            ) : (
              0
            )}
            <span className="text-primary">+</span>
          </h2>

          <p className="mt-2 text-lg font-semibold">
            New clients daily
          </p>
        </div>
      </div>

    </section>
  );
};

export default Counter;