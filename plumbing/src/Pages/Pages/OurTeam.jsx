import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import TeamCTA from "../../Components/Home/TeamCTA";

const teamMembers = [
  {
    id: 1,
    name: "Leon Baker",
    role: "General Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
  },
  {
    id: 2,
    name: "David Green",
    role: "Senior Plumber",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
  },
  {
    id: 3,
    name: "Virgil Pierce",
    role: "Engineer",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Pipe Specialist",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800",
  },
  {
    id: 5,
    name: "Michael Scott",
    role: "Technician",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
  },
  {
    id: 6,
    name: "Daniel Carter",
    role: "Maintenance Expert",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function OurTeam() {
  return (
    <section >
      <div className="bg-[#f6f6f2] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[4px] text-sm text-gray-500 font-semibold">
            Meet Our Experts
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#16253d] mt-3">
            Our Team
          </h2>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              variants={item}
              key={member.id}
              className="group"
            >
              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-105 object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                  <div className="flex gap-4">

                    <a
                      href="#"
                      className="w-11 h-11 rounded-full bg-white text-[#1877F2] flex items-center justify-center hover:scale-110 transition"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="#"
                      className="w-11 h-11 rounded-full bg-white text-[#E4405F] flex items-center justify-center hover:scale-110 transition"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="#"
                      className="w-11 h-11 rounded-full bg-white text-[#0077B5] flex items-center justify-center hover:scale-110 transition"
                    >
                      <FaLinkedinIn />
                    </a>

                  </div>

                </div>
              </div>

              {/* Content */}

              <div className="bg-white p-6 shadow-sm group-hover:shadow-xl transition">

                <h3 className="text-2xl font-bold text-[#16253d]">
                  {member.name}
                </h3>

                <p className="mt-2 text-gray-500">
                  {member.role}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
      <TeamCTA/>
    </section>
  );
}